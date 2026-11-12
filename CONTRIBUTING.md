# Contributing

Thanks for helping. People use these guides to make real decisions about their obligations, so accuracy comes first.

## What helps most

- Corrections backed by the official source, with a link.
- Updates when a rule changes, a deadline moves, or a penalty amount is adjusted.
- New walkthroughs for rules that fit an existing domain, and new domains that small businesses commonly face.
- Translations, accessibility fixes, and printable versions.

## How a domain is laid out

```
domains/<domain>/
  README.md                  who it's for, who enforces it, and links to everything below
  20-minutes-to-<rule>.md    one walkthrough per rule, readable in about 20 minutes
  20-days-to-comply.md       one plan per domain, twenty rows, one task a day
```

Each walkthrough follows the same order: who it covers, what it asks in plain words, what staff need to know, what the business needs on paper, penalties and enforcement, common mistakes, a link to the plan, "Check yourself" questions with answers, and Sources.

Every page opens with front matter:

```
---
title: "20 minutes to <rule>"
description: "One sentence on what the page covers."
domain: <Domain name>
rules: "The laws or standards, with citations"
reviewed: YYYY-MM-DD
---
```

## How to write here

- Write for a busy owner or office manager. Short sentences, plain words, and the reason before the step.
- Every fact that could be wrong (a deadline, a dollar amount, a threshold, a date) needs a primary source in the page's Sources section: the statute, the regulation, the Federal Register, or the agency's own guidance. News articles and vendor blogs can be further reading, not the source.
- Say what the rule requires and what's good practice, and keep the two apart.
- Name tools only when it helps, and give more than one.
- No fear selling. State penalties plainly and move on.
- Don't copy standards that aren't public domain. Describe them in your own words and cite them by number.
- Use the serial comma.
- Update the `reviewed` date when you check a page against its sources.

## Checking your change

```
node tools/check.mjs
```

It fails if a page is missing front matter, a review date, or a Sources section with at least one link, or if a relative link points nowhere.

## Branches and commits

Name branches `feat/`, `fix/`, `docs/`, or `chore/` plus a short hyphenated description. Use [Conventional Commits](https://www.conventionalcommits.org/), for example `docs(healthcare): update HIPAA penalty amounts for 2027` or `feat(domains): add a workplace domain`. Merge with `git merge --no-ff`, and never rewrite history on `main`.
