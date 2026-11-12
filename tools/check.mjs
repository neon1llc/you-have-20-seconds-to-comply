// check.mjs: the repository's one check, with no dependencies. Every page has front matter, a review
// date, and a Sources section with at least one link. Walkthroughs and plans keep their shape. Every
// relative link points at a file that exists. Prose stays free of dashes and semicolons.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative, basename } from "node:path";

// Folders that hold pages a reader opens. Root documents (README, CONTRIBUTING, and so on) get link and style checks only
const CONTENT_DIRS = ["domains", "training", "templates"];
const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const SKIP = new Set([".git", "node_modules", ".github"]);
const WORDS_PER_MINUTE = 200;

// Walk the tree and collect every Markdown file
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

// Remove code blocks, inline code, and link targets so style checks read only prose
function prose(text) {
  return text
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/https?:\/\/\S+/g, "");
}

const problems = [];
const minutes = [];
const files = walk(ROOT);

for (const file of files) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const name = basename(file);

  // Content pages: front matter with title, description, and a review date, then a Sources section with a link
  if (CONTENT_DIRS.some((d) => rel.startsWith(d + "/"))) {
    const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fm) problems.push(`${rel}: no front matter`);
    else {
      for (const key of ["title", "description"]) {
        if (!new RegExp(`^${key}:\\s*\\S`, "m").test(fm[1])) problems.push(`${rel}: front matter has no ${key}`);
      }
      if (!/^reviewed:\s*\d{4}-\d{2}-\d{2}\s*$/m.test(fm[1])) problems.push(`${rel}: front matter has no reviewed date (YYYY-MM-DD)`);
      if (rel.startsWith("domains/") && !/^domain:\s*\S/m.test(fm[1])) problems.push(`${rel}: front matter has no domain`);
    }
    const sources = text.split(/^## Sources\s*$/m)[1];
    if (sources === undefined) problems.push(`${rel}: no "## Sources" section`);
    else if (!/\]\(https?:\/\//.test(sources)) problems.push(`${rel}: Sources section has no web link`);
  }

  // Walkthroughs keep their shape and report a reading time
  if (/^20-minutes-to-.+\.md$/.test(name)) {
    if (!/^rules:\s*\S/m.test(text)) problems.push(`${rel}: front matter has no rules`);
    for (const h of ["## Next", "## Check yourself", "## Sources"]) {
      if (!text.includes(`\n${h}\n`)) problems.push(`${rel}: missing "${h}"`);
    }
    const words = prose(text).split(/\s+/).filter(Boolean).length;
    minutes.push(`${Math.round(words / WORDS_PER_MINUTE).toString().padStart(3)} min  ${rel}`);
  }

  // Plans have exactly twenty numbered days
  if (name === "20-days-to-comply.md") {
    const days = [...text.matchAll(/^\| (\d+) \|/gm)].map((m) => Number(m[1]));
    const expected = Array.from({ length: 20 }, (_, i) => i + 1);
    if (days.join(",") !== expected.join(",")) problems.push(`${rel}: plan should list days 1 to 20 in order`);
  }

  // Relative links must land on a real file. Web links, mail links, and in-page anchors are left alone
  const body = text.replace(/```[\s\S]*?```/g, "");
  for (const m of body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const target = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(target)) continue;
    const path = decodeURIComponent(target.split("#")[0]);
    if (!existsSync(resolve(dirname(file), path))) problems.push(`${rel}: broken link ${target}`);
  }

  // House style: no em dashes, en dashes, or semicolons in prose. Sources keep official titles as published
  prose(text.split(/^## Sources\s*$/m)[0]).split("\n").forEach((line, i) => {
    if (/[–—]/.test(line)) problems.push(`${rel}: dash in prose: ${line.trim().slice(0, 60)}`);
    if (/;/.test(line)) problems.push(`${rel}: semicolon in prose: ${line.trim().slice(0, 60)}`);
  });
}

// Show reading times so long walkthroughs are easy to spot
console.log("Reading time at " + WORDS_PER_MINUTE + " words a minute:\n" + minutes.sort().join("\n") + "\n");

// Report and fail on any problem, so the workflow turns red
if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} problem(s) in ${files.length} files`);
  process.exit(1);
}
console.log(`ok: ${files.length} files, pages, sources, and links sound`);
