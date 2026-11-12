---
title: "Running compliance training"
description: "How to turn any walkthrough in this repository into a short training session, collect acknowledgments, and keep records that hold up when a regulator, auditor, or customer asks."
reviewed: 2026-11-12
---

Most rules in this repository require training, or expect it, and nearly all of them expect proof that it happened. This guide is for the owner, office manager, or IT lead who has to run that training without a learning management system or a big budget.

## Pick the format

| Format | Time | Good for |
|---|---|---|
| Self-study | About 20 minutes | Reading one walkthrough and answering its "Check yourself" questions. Fits remote staff and new hires. |
| Short session | 30 minutes | A team meeting: the walkthrough's staff points, two or three real examples, and the check questions out loud. |
| Workshop | 60 to 90 minutes | First-time training, or a group that handles regulated data all day. Add a scenario exercise and the 20-day plan's first steps. |

Pick based on risk. People who handle patient records, card data, client tax files, or student records all day get the longer format the first time. Everyone else can usually do the short session or self-study, with a refresher each year.

## Prepare (about an hour)

1. **Choose the walkthrough** for your domain, and read it yourself.
2. **Pull out your own policies.** Training on the rule alone isn't enough. People need to know your procedures: who the privacy officer is, which tools are approved, how to report an incident, and where forms live. Most rules require training on the organization's own policies.
3. **Collect two or three local examples.** A misdirected email last year, a phishing message staff received, a near miss at the front desk. Remove names. Real examples are what people remember.
4. **Print or share** the walkthrough's "What every staff member needs to know" list as a one-page handout.
5. **Prepare the acknowledgment form.** Fill in the policy names and version dates on the [acknowledgment form](../templates/acknowledgment-form.md).

## Run a 30-minute session

| Minutes | What happens |
|---|---|
| 0 to 3 | Why this matters here: who the rule protects, and one sentence on what goes wrong without it. |
| 3 to 15 | The staff points from the walkthrough, one at a time, each tied to your own procedure. |
| 15 to 22 | Your local examples. Ask "What would you do?" before giving the answer. |
| 22 to 27 | The "Check yourself" questions, answered out loud. |
| 27 to 30 | Who to call, how to report, and where the policies live. Hand out the acknowledgment form. |

Keep the tone practical. People report mistakes faster when they believe reporting is expected and won't be punished for honest errors. Say that plainly, and make sure your sanctions policy agrees with it for good-faith reporting.

## For a workshop, add a scenario

Pick one and work it as a group, step by step.

- **Healthcare:** A staff member emails a spreadsheet of patient appointments to the wrong address. Walk through the four-factor risk assessment and the 60-day clock.
- **Payments:** A customer emails their card number to place an order. What do you do with the email, and the order?
- **Financial services:** A client calls saying the IRS rejected their return because one was already filed. What does that suggest, and who gets told?
- **Education:** A noncustodial parent asks for their child's report card. What do you check first?
- **Marketing:** A customer replies "no more" to a promotional text. Which systems need updating, and by when?
- **AI use:** A colleague wants to paste a client contract into a free chat tool to summarize it. What's the answer, and what's the alternative?

## Keep the records

Training that isn't recorded may as well not have happened when an investigator, auditor, or customer asks. For each session, record:

- the date, format, and length,
- the topic and the walkthrough or materials used, with their version or review date,
- who attended, by name and role,
- who led it,
- and each person's signed acknowledgment of the policies covered.

The [training log](../templates/training-log.csv) has these columns. Keep records at least as long as the strictest rule that applies to you. HIPAA, for example, requires six years.

## Follow up

- **New hires** get training before or soon after they first touch regulated data. Several rules say "within a reasonable time" or "upon hire."
- **Policy changes** trigger training for the people affected.
- **Refreshers** happen at least once a year, even where the rule doesn't name a frequency. PCI DSS, New York's student data rules, and the DFS cybersecurity rule do require annual training.
- **Short reminders** between sessions help more than one long annual session. A two-line note about a current phishing trend counts as security awareness.

## Measure whether it worked

Attendance is a record, not a result. Better signs: more incident reports (including near misses), fewer repeat mistakes, faster responses to records requests, and fewer people clicking phishing tests. Pick one or two and look at them before the next session.

## Related material

- [Phish Out of Water](https://github.com/neon1llc/phish-out-of-water), a ready-made one-hour security awareness session with slides and exercises.
- [SOC It 2 Me](https://github.com/neon1llc/soc-it-2-me), a SOC 2 course with a workshop facilitator guide.
- [Ready, Secure, Go](https://github.com/neon1llc/ready-secure-go), plain-language security training and practice cards.

## Sources

- NIST, [SP 800-50 Rev. 1, Building a Cybersecurity and Privacy Learning Program](https://csrc.nist.gov/pubs/sp/800/50/r1/final) (September 2024).
- HIPAA training and records: [45 CFR § 164.530(b) and (j)](https://www.ecfr.gov/current/title-45/section-164.530).
- PCI DSS v4.0.1, requirement 12.6, from the PCI Security Standards Council [Document Library](https://www.pcisecuritystandards.org/document_library/).
- New York student data training: [8 NYCRR § 121.7](https://regulations.justia.com/states/new-york/title-8/chapter-ii/subchapter-e/part-121/section-121-7/).
- New York DFS cybersecurity training: [23 NYCRR Part 500](https://www.dfs.ny.gov/cybersecurity), § 500.14(a)(3).
