---
title: "20 minutes to the ADA and WCAG"
description: "What disability rights law asks of business and government websites and apps, what WCAG is, the 2027 and 2028 deadlines, and what content and web teams need to know."
domain: Accessibility
rules: "Americans with Disabilities Act Titles II and III, Section 504 of the Rehabilitation Act, and the W3C Web Content Accessibility Guidelines (WCAG) 2.1 and 2.2"
reviewed: 2026-11-12
---

**Read this if** your business or organization has a website, an online store, a booking or patient portal, a mobile app, or posts documents and videos online. It matters most for businesses open to the public, health care providers, schools, and anyone who works for a state or local government.

## The law in plain words

The Americans with Disabilities Act (ADA) bans discrimination against people with disabilities. Two parts reach websites and apps.

**Title III** covers businesses open to the public, called public accommodations: stores, restaurants, hotels, doctors' and lawyers' offices, banks, schools, gyms, and many more. The Department of Justice's position is that Title III applies to their websites and apps, and that businesses have flexibility in how they make them accessible. DOJ's Title III regulations don't name a technical standard, so in practice businesses, courts, and settlements use WCAG. Federal courts have split on how far Title III reaches websites of businesses with no physical location. Thousands of website accessibility lawsuits are filed each year, many in New York.

**Title II** covers state and local governments, including public schools, colleges, libraries, courts, transit, and public hospitals. A 2024 DOJ rule requires their web content and mobile apps to meet **WCAG 2.1 Level AA**. In April 2026, DOJ extended the deadlines to **April 26, 2027** for governments serving 50,000 or more people, and **April 26, 2028** for smaller ones and special districts. Vendors that build or host sites and apps for these governments should expect the requirement in their contracts.

**Section 504** of the Rehabilitation Act covers organizations that receive federal financial assistance. A 2024 HHS rule requires recipients of HHS funding, which includes many hospitals, clinics, and health and human services agencies, to meet WCAG 2.1 AA. After a 2026 extension, the deadline is **May 11, 2027** for recipients with 15 or more employees, and **May 10, 2028** for smaller ones.

Selling into Europe? The European Accessibility Act has applied since June 28, 2025 to many consumer products and services sold in the EU, including e-commerce and banking, with an exemption for microenterprises providing services.

## What WCAG is

The Web Content Accessibility Guidelines (WCAG) are published by the World Wide Web Consortium (W3C). They're organized around four principles. Content must be:

- **Perceivable**: people can see or hear it in some form. Images have text alternatives, videos have captions, and text has enough contrast.
- **Operable**: people can use it with a keyboard, a switch, or voice, not only a mouse, and have enough time.
- **Understandable**: language is clear, forms explain errors, and pages behave predictably.
- **Robust**: it works with assistive technology such as screen readers, because the code is built with proper structure.

Each guideline has testable success criteria at three levels: A, AA, and AAA. **Level AA** is the usual legal and contractual target. WCAG 2.1 (2018) is the version named in the DOJ and HHS rules. WCAG 2.2 (2023) adds criteria such as larger touch targets, visible focus not hidden by sticky headers, and accessible sign-in without memory puzzles. Meeting 2.2 AA also meets 2.1 AA, so building to 2.2 is a sensible choice for new work.

## The most common problems

The WebAIM Million, a yearly automated scan of the top million home pages, keeps finding the same errors at the top of the list:

- low-contrast text,
- images with missing alternative text,
- form fields with no labels,
- empty links and buttons, such as icon buttons with no accessible name,
- missing document language,
- and empty or skipped headings.

Automated tools catch only part of WCAG. Keyboard testing and a screen reader check catch much more. Testing with disabled users catches the most.

## Overlays aren't a fix

Overlay widgets that promise one-line-of-code compliance don't fix the underlying code, and many disabled users find them get in the way. In 2025 the FTC ordered one overlay maker, accessiBe, to pay $1 million for deceptively claiming its product could make any website compliant with WCAG.

## What content and web teams need to know

No law requires a specific accessibility training for private businesses. But accessibility depends on the people who write, design, and build content, so they need to know these points.

1. **Write alt text for meaningful images** that says what the image communicates. Mark decorative images so screen readers skip them.
2. **Use real headings in order** (one H1, then H2, H3), not bold text that looks like a heading.
3. **Make link text say where it goes.** "Download the 2026 fee schedule (PDF)" instead of "click here."
4. **Check color contrast**: at least 4.5 to 1 for normal text and 3 to 1 for large text.
5. **Don't use color alone** to show meaning, such as red for errors without text.
6. **Caption videos and provide transcripts for audio.**
7. **Label every form field**, and write error messages that say how to fix the problem.
8. **Make everything work with a keyboard**, with a visible focus indicator.
9. **Prefer accessible web pages over PDFs.** When a PDF is needed, tag it and check it.
10. **Test before publishing**: run an automated checker, tab through the page, and try it with a screen reader for key pages.

## What the business needs on paper

- An accessibility statement on the site, with a way to report problems and get help.
- A target standard (WCAG 2.1 or 2.2 Level AA) written into policies and vendor contracts.
- Audit results and a remediation plan with dates.
- Accessibility checks in the publishing and release process.
- For government vendors and HHS recipients: evidence of conformance before the deadline, and a process for the content rule exceptions (archived content, preexisting documents, third-party content).
- Training records for content editors and developers. See the [training log](../../templates/training-log.csv).

## Common mistakes

- Relying on an overlay widget.
- Redesigning the site without accessibility requirements, then fixing it afterward at higher cost.
- Scanned PDFs of forms and menus.
- Videos without captions.
- Carousels, pop-ups, and chat widgets that trap keyboard users.
- Third-party booking or payment widgets nobody tested.
- No contact method for people who hit a barrier.

## Next

The [20-day plan](20-days-to-comply.md) for this domain turns the walkthrough into a day-by-day list of tasks.

## Check yourself

1. Does the ADA name a technical standard for private business websites?
2. What standard and level does the DOJ Title II rule require?
3. When must a city of 80,000 people meet the Title II web rule?
4. Will an overlay widget make a site WCAG compliant?
5. What contrast ratio does WCAG AA require for normal-size text?

<details>
<summary>Answers</summary>

1. No. DOJ's Title III regulations don't name one, but WCAG Level AA is the standard courts, settlements, and DOJ guidance point to.
2. WCAG 2.1 Level AA.
3. April 26, 2027, after DOJ's 2026 extension.
4. No. Accessibility depends on the underlying content and code, and the FTC has acted against an overlay maker for claiming otherwise.
5. At least 4.5 to 1.

</details>

## Sources

- U.S. Department of Justice, [Guidance on Web Accessibility and the ADA](https://www.ada.gov/resources/web-guidance/) (March 18, 2022).
- DOJ, [Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities](https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state), final rule, 89 FR 31320 (April 24, 2024), and [Extension of Compliance Dates](https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web), interim final rule, 91 FR 20902 (April 20, 2026). Regulation: [28 CFR Part 35, Subpart H](https://www.ecfr.gov/current/title-28/chapter-I/part-35/subpart-H).
- HHS, [Extension of Compliance Dates; Accessibility of Web Content and Mobile Applications of Recipients of Departmental Financial Assistance](https://www.federalregister.gov/documents/2026/05/11/2026-09266/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web), interim final rule, 91 FR 25496 (May 11, 2026), amending the [2024 Section 504 rule](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-84).
- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) and [WCAG 2.1](https://www.w3.org/TR/WCAG21/), and W3C WAI, [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/).
- WebAIM, [The WebAIM Million](https://webaim.org/projects/million/).
- FTC, [FTC Approves Final Order Requiring accessiBe to Pay $1 Million](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million) (April 2025).
- European Commission, [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en).
