---
title: "20 minutes to COPPA"
description: "What the Children's Online Privacy Protection Rule asks of websites, apps, and edtech tools used by children under 13, including the 2025 amendments, and what the team needs to know."
domain: Education
rules: "Children's Online Privacy Protection Act (15 U.S.C. §§ 6501 to 6506) and the COPPA Rule (16 CFR Part 312)"
reviewed: 2026-11-12
---

**Read this if** you build or run a website, app, game, connected toy, or learning tool that children under 13 use, or you work at a school choosing such tools. It also applies to general audience services that know they're collecting information from a child under 13, and to ad networks and plug-ins that know they're collecting from users of a child-directed service.

## What COPPA is

The Children's Online Privacy Protection Act (COPPA) and the FTC's rule under it control how online services collect, use, and share personal information from children under 13. The core requirement is notice to parents and verifiable parental consent before collecting a child's personal information, with a few narrow exceptions.

The FTC amended the rule in 2025. The amendments took effect June 23, 2025, and most had to be in place by April 22, 2026.

## Who's covered

You're an "operator" covered by COPPA if your website or online service:

- is **directed to children** under 13, judged by its subject matter, visual content, use of animated characters, music, ads, the age of models and celebrities, and evidence about who actually uses it, or
- is a general audience service with **actual knowledge** that it collects personal information from a particular child under 13.

A service can be "mixed audience": directed to children but not mainly to them. It can age-screen users and apply COPPA only to those under 13, as long as it doesn't collect personal information before the age screen.

## What counts as personal information

Personal information under COPPA includes name, address, online contact information such as an email address or screen name that works as one, phone number, Social Security number, photos, videos, or audio with a child's image or voice, geolocation precise enough to identify a street and city, and persistent identifiers such as cookies, device IDs, and IP addresses that can recognize a user over time and across services. The 2025 amendments added **biometric identifiers**, such as fingerprints, voiceprints, and face templates, and **government-issued identifiers** such as passport and state ID numbers.

## What the rule requires

1. **A clear privacy notice** on the service, and a direct notice to parents before collecting information, saying what you collect, how you use it, and who you share it with.
2. **Verifiable parental consent** before collecting, using, or disclosing a child's personal information. Approved methods include a signed form, a credit or debit card transaction with notice, a call or video call with trained staff, checking a government ID against a database (then deleting it), knowledge-based questions, and, since 2025, a face match against a government photo ID. An email or text message plus a follow-up step (such as a confirming message) works only when you don't disclose the information to others.
3. **Separate consent for disclosure to third parties.** Since the 2025 amendments, you need a separate parental consent to disclose a child's information to third parties, for example for targeted advertising, unless the disclosure is integral to the service.
4. **Parent rights.** Parents can review the information collected from their child, have it deleted, and refuse further collection or use.
5. **No conditioning.** You can't require a child to give more information than is reasonably necessary to take part in an activity.
6. **A written information security program.** Since 2025, operators must have one, with a designated coordinator, at least annual risk assessments, safeguards sized to the risk, regular testing, and at least annual review. Before sharing children's information with service providers or third parties, you must check they can protect it and get written assurances.
7. **A written data retention policy.** Keep children's information only as long as reasonably necessary for the purpose it was collected for, never indefinitely, and delete it securely afterward. The policy must state the purposes, the business need, and the deletion timeframe, and appear in your privacy notice.

The rule has limited exceptions to prior consent, such as collecting a parent's email address to ask for consent, or using a persistent identifier only to support the internal operations of the service (for example, to keep a session working or prevent fraud), and not to build a profile or serve targeted ads.

## Schools and edtech

The FTC's guidance says a school can consent on parents' behalf when an edtech operator collects children's information only for the use and benefit of the school, for an educational purpose, and for no other commercial purpose. The operator still has to give the school the full notice, and the school should be able to review and have the information deleted. If the operator wants to use the data for its own purposes, such as advertising or building products for sale beyond the service, school consent isn't enough and parental consent is needed.

Schools also have FERPA obligations for the same data. See [20 minutes to FERPA](20-minutes-to-ferpa.md).

## What the team needs to know

COPPA doesn't set a training requirement, but its written security program requirement expects people to know their part. Product, engineering, marketing, and support staff should be able to act on these points.

1. **Know whether the service is child-directed or mixed audience**, and where the age screen sits.
2. **Collect nothing from a child before consent** except what an exception allows.
3. **Check every SDK, analytics tool, and ad library** before it ships in a child-directed product. Many collect persistent identifiers by default.
4. **No targeted advertising to children** without the separate consent the rule requires.
5. **Route parent requests** to review or delete data to the right person, and act on them.
6. **Follow the retention schedule.** Delete children's data when its purpose ends.
7. **Report a security incident right away**, as for any other breach.
8. **Know that marketing can make a service child-directed.** Cartoon characters, kid-focused ads, and child celebrities count as evidence.

## What the business needs on paper

- An assessment of whether the service is child-directed, mixed audience, or general audience, with the reasons.
- The privacy notice and the direct notice to parents.
- Records of parental consent, by method.
- A list of every third party and SDK that receives children's information, with written assurances.
- The written information security program and its annual risk assessments and reviews.
- The written data retention policy, also published in the privacy notice.
- For edtech: school agreements covering school-authorized consent, deletion, and no commercial use.

## Penalties and enforcement

The FTC and state attorneys general enforce COPPA. Civil penalties can reach $53,088 per violation, and the FTC continues to apply that amount in 2026. Cases against app makers, toy companies, and video platforms have ended in penalties from thousands to hundreds of millions of dollars, plus deletion of data and algorithms built from it.

## Common mistakes

- Treating "users must be 13" in the terms of service as an age screen when the content plainly draws children.
- Third-party SDKs in a kids' app collecting advertising IDs.
- Keeping children's data indefinitely "for analytics."
- Relying on school consent while also using the data for product marketing.
- No written security program, which became mandatory with the 2025 amendments.

## Next

The [20-day plan](20-days-to-comply.md) for this domain turns the walkthrough into a day-by-day list of tasks.

## Check yourself

1. Your educational game uses cartoon characters and is marketed to elementary school students, but the terms say users must be 13. Is it covered?
2. Can a school consent on parents' behalf?
3. What two written documents did the 2025 amendments add?
4. Do you need separate consent to share children's data with an ad network?
5. Is a device ID personal information under COPPA?

<details>
<summary>Answers</summary>

1. Very likely yes. Content, marketing, and audience decide whether a service is child-directed, not the terms of service.
2. Yes, when the operator collects the information only for the school's educational use and for no other commercial purpose.
3. A written information security program and a written data retention policy.
4. Yes, unless the disclosure is integral to the service. Since the amendments, third-party disclosure needs its own parental consent.
5. Yes, when it can recognize a user over time and across services. Using it only to support internal operations is an exception to prior consent.

</details>

## Sources

- [15 U.S.C. §§ 6501 to 6506](https://www.law.cornell.edu/uscode/text/15/chapter-91), the COPPA statute.
- [16 CFR Part 312](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312), the COPPA Rule. Definitions: [§ 312.2](https://www.ecfr.gov/current/title-16/section-312.2). Consent: [§ 312.5](https://www.ecfr.gov/current/title-16/section-312.5). Security program: [§ 312.8](https://www.ecfr.gov/current/title-16/section-312.8). Retention: [§ 312.10](https://www.ecfr.gov/current/title-16/section-312.10).
- FTC, [Children's Online Privacy Protection Rule](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule), final rule, 90 FR 16918 (April 22, 2025), effective June 23, 2025, compliance by April 22, 2026.
- FTC, [Complying with COPPA: Frequently Asked Questions](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions), including the section on schools.
- FTC, [Civil Penalty Inflation Adjustments](https://www.federalregister.gov/documents/2026/09/15/2026-18853/civil-penalty-inflation-adjustments), 91 FR 58446 (September 15, 2026), keeping 2025 amounts for 2026, and [Adjustments to Civil Penalty Amounts](https://www.federalregister.gov/documents/2025/01/17/2025-01361/adjustments-to-civil-penalty-amounts), 90 FR 5580 (January 17, 2025).
