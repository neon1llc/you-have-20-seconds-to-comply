---
title: "20-day learning plan: Security"
description: "A 20-day learning plan that walks a small business through the work to reach CIS Implementation Group 1 basics and a NIST CSF profile, laying the ground for SOC 2 if customers ask for it."
domain: Security
reviewed: 2026-11-12
---

Read [20 minutes to the NIST Cybersecurity Framework](20-minutes-to-nist-csf.md) and, if customers ask for a report, [20 minutes to SOC 2](20-minutes-to-soc-2.md) first. Each day below is one to two hours of work for the person leading the effort. The 20 days are a learning pace, not a deadline. Finishing the plan doesn't make a business compliant, and this plan is training, not legal advice or a compliance determination. If a step is already done, check it and move on. The order matters more than the day numbers: inventory before risk, and risk before policy.

## The plan

| Day | Do this |
|---|---|
| 1 | Name the security owner and get the business owner's agreement on time and budget. |
| 2 | Inventory devices: laptops, desktops, phones, servers, network gear, and printers. |
| 3 | Inventory software and cloud services, including free tools staff signed up for. |
| 4 | Inventory accounts, especially admin accounts and shared logins. |
| 5 | Turn on multi-factor authentication for email, remote access, admin accounts, finance systems, and cloud consoles. |
| 6 | Remove accounts of former staff and unused admin rights. |
| 7 | Turn on automatic updates for operating systems and browsers. Patch anything internet-facing that's out of date. |
| 8 | Confirm anti-malware is running on every computer. |
| 9 | Set up automated backups with one copy isolated from the network. Restore one file to prove it works. |
| 10 | Change default passwords on routers, cameras, printers, and other devices. Separate guest Wi-Fi. |
| 11 | Turn on email protections: SPF, DKIM, DMARC, and the filtering your email service offers. |
| 12 | Write a one-page security policy and an acceptable use policy. |
| 13 | Write a one-page incident response plan with names, phone numbers, and who calls the insurer and lawyer. |
| 14 | List key vendors and check their security, starting with IT, payroll, and anything holding customer data. |
| 15 | Schedule security awareness training. Use the [facilitator guide](../../training/facilitator-guide.md). |
| 16 | Run the training. Collect [acknowledgments](../../templates/acknowledgment-form.md) and record it in the [training log](../../templates/training-log.csv). |
| 17 | Write the current profile: for each CSF function, a few lines on where you stand. |
| 18 | Write the target profile and the top ten gaps, each with an owner and a date. |
| 19 | Run a 30-minute tabletop exercise: ransomware on the office file server. |
| 20 | Set the calendar: monthly patch checks, quarterly access reviews and restore tests, annual training, policy review, and profile update. |

## After day 20

- Every month: check that updates are installing and backups are running.
- Every quarter: access reviews and a restore test.
- Every year: training, policy review, a fresh current profile, vendor reviews, and a tabletop exercise.
- If customers ask for SOC 2: use this program as the base and follow the 90-day plan in [SOC 2 Readiness](https://github.com/neon1llc/soc-2-readiness).

## Sources

- [20 minutes to the NIST Cybersecurity Framework](20-minutes-to-nist-csf.md) and [20 minutes to SOC 2](20-minutes-to-soc-2.md).
- NIST, [Small Business Cybersecurity Corner](https://www.nist.gov/itl/smallbusinesscyber).
- Center for Internet Security, [Implementation Group 1](https://www.cisecurity.org/controls/implementation-groups/ig1).
- CISA, [Cyber Essentials](https://www.cisa.gov/resources-tools/resources/cyber-essentials).
- neon1, [SOC 2 Readiness](https://github.com/neon1llc/soc-2-readiness).
