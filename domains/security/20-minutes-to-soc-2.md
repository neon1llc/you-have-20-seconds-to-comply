---
title: "20 minutes to SOC 2"
description: "What a SOC 2 report is, who asks for one, what it takes to get one, and what staff need to know, with a pointer to the full SOC It 2 Me course."
domain: Security
rules: "AICPA SOC 2 examinations and the 2017 Trust Services Criteria"
reviewed: 2026-11-12
---

**Read this if** a customer has asked for your SOC 2 report, a sales deal is stuck on a security questionnaire, or you sell software or services that hold other companies' data. For the full hands-on course, with a controls map, evidence checklists, and templates, see [SOC It 2 Me](https://github.com/neon1llc/soc-it-2-me).

## What SOC 2 is

SOC 2 is a report, not a certification and not a law. An independent CPA firm examines your controls and issues an opinion on them under standards set by the American Institute of Certified Public Accountants (AICPA). Your customers read the report to decide whether to trust you with their data. Business customers, especially larger ones and regulated ones, often require it in contracts.

The controls are judged against the AICPA's **Trust Services Criteria**. Security (the "common criteria") is in every SOC 2 report. You can add Availability, Confidentiality, Processing Integrity, and Privacy if your customers need them.

There are two types of report.

- **Type 1** looks at whether your controls are designed properly as of a single date.
- **Type 2** looks at whether they also worked over a period, usually 3 to 12 months. Customers generally want Type 2.

## What it takes

1. **Decide why and for whom.** Confirm a customer actually needs SOC 2 and not something lighter, such as a completed questionnaire or a CSF-based summary.
2. **Draw the boundary.** Pick the system the report covers, the criteria, and how it treats vendors such as your cloud provider.
3. **Assess risk.** List what could go wrong and which controls address it.
4. **Put controls in place and write policies.** Most companies need 40 to 80 controls covering governance, people, access, change management, operations, incidents, vendors, and continuity.
5. **Collect evidence as you go.** Auditors test samples, so controls need to leave records: tickets, logs, review sign-offs, and training records.
6. **Choose an audit firm** and run a readiness review.
7. **Get through the observation period** for a Type 2, then the audit.

SOC It 2 Me walks through each step in eight modules, with a 90-day readiness plan.

## Training in SOC 2

The Trust Services Criteria expect the company to communicate security responsibilities to staff and to make sure people have the knowledge their roles need. In practice auditors look for:

- security awareness training at hire and at least once a year,
- a signed acknowledgment of the code of conduct and security policies at hire and yearly,
- role-specific training for engineers, support staff, and admins,
- and records of all of it, for everyone in scope, including contractors.

Missing training records for even a few people sampled is one of the most common exceptions in a first Type 2 report. The [acknowledgment form](../../templates/acknowledgment-form.md) and [training log](../../templates/training-log.csv) in this repository work for SOC 2 evidence.

## What staff need to know

Staff in a SOC 2 company follow the same habits as any secure workplace (see [20 minutes to the NIST Cybersecurity Framework](20-minutes-to-nist-csf.md)), plus a few that matter because an auditor will test them.

1. **Follow the process even when it's slow.** Changes need a ticket and a review. Access needs an approved request.
2. **Leave a record.** If a control isn't recorded, the auditor treats it as not done.
3. **Complete training and acknowledgments on time.**
4. **Report incidents and near misses**, so the incident process has real entries.
5. **Tell IT when someone leaves or changes roles**, so access is removed on time.

## Common mistakes

- Buying a compliance platform before understanding what the controls are for.
- Scoping everything the company owns into the first report.
- Writing policies that describe what the company wishes it did.
- Quarterly access reviews that slip, leaving gaps in the observation period.
- Forgetting contractors in training and background checks.

## Next

The [20-day plan](20-days-to-comply.md) for this domain turns the walkthrough into a day-by-day list of tasks.

## Check yourself

1. Is SOC 2 a certification?
2. Which Trust Services Criteria category is in every SOC 2 report?
3. What's the difference between Type 1 and Type 2?
4. What kind of firm can issue a SOC 2 report?
5. Why do training records matter so much in a SOC 2 audit?

<details>
<summary>Answers</summary>

1. No. It's an attestation report with a CPA firm's opinion on your controls.
2. Security, also called the common criteria.
3. Type 1 covers design at a point in time. Type 2 also covers whether controls operated effectively over a period.
4. A licensed CPA firm.
5. Auditors test samples of people, and a missing record counts as an exception in the report.

</details>

## Sources

- AICPA and CIMA, [System and Organization Controls: SOC suite of services](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services).
- AICPA, [2017 Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy (with revised points of focus, 2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022). Training and competence: CC1.4 and CC2.2.
- neon1, [SOC It 2 Me](https://github.com/neon1llc/soc-it-2-me), SOC 2 readiness course, controls map, and templates.
- neon1, [Ready, Secure, Go](https://github.com/neon1llc/ready-secure-go), plain-language SOC 2 track.
