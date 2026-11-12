---
title: "20 minutes to PCI DSS"
description: "What the card industry's security standard asks of any business that takes card payments, what staff need to know."
domain: Payments
rules: "PCI Data Security Standard (PCI DSS) v4.0.1"
reviewed: 2026-11-12
---

**Read this if** your business takes credit or debit cards in any way: a card terminal at the counter, a phone order, an online checkout, or an invoice with a pay link. It also applies to service providers that handle card data for others or can affect its security, such as payment processors, hosting providers, and IT firms that manage a merchant's network.

## What PCI DSS is

The Payment Card Industry Data Security Standard (PCI DSS) is a set of security requirements for protecting card data. The PCI Security Standards Council publishes it. The Council was founded by the major card brands (American Express, Discover, JCB, Mastercard, and Visa).

PCI DSS is not a law. It reaches you through contracts. When you sign up with a payment processor or bank (your "acquirer"), the agreement requires you to comply with PCI DSS and the card brands' rules. The acquirer or the card brand decides how you prove it, and what happens if you don't.

The current version is v4.0.1, published in June 2024. Its "future-dated" requirements, which v4.0 gave organizations time to prepare for, became mandatory on March 31, 2025. In June 2026 the Council opened a request for comments on v4.0.1 as the first step toward the next version, so expect a revision in the coming years.

## What card data is

PCI DSS protects two kinds of data.

**Cardholder data** is the primary account number (PAN, the long number on the card), plus the cardholder name, expiration date, and service code when they're stored with the PAN. The PAN is what makes data in scope.

**Sensitive authentication data** is the full magnetic stripe or chip data, the three- or four-digit card verification code (CVV2, CVC2, CID), and PINs or PIN blocks. You may not keep sensitive authentication data after a transaction is authorized, even if you encrypt it. Writing down the security code from a phone order "for later" breaks this rule.

The cardholder data environment (CDE) is the people, processes, and technology that store, process, or send card data, plus anything connected to them. The smaller your CDE, the less of the standard applies to you.

## How small businesses comply

Most small merchants prove compliance each year with a **Self-Assessment Questionnaire (SAQ)** and, depending on the SAQ, quarterly external vulnerability scans by an Approved Scanning Vendor (ASV). Larger merchants and service providers may need an on-site assessment by a Qualified Security Assessor (QSA), with a Report on Compliance.

The SAQ type depends on how you take payments. A few common examples:

| How you take cards | Usual SAQ |
|---|---|
| Online only, and a third-party processor hosts the whole payment page (a redirect or an embedded iframe from the processor) | SAQ A |
| Online, and your own site controls how the payment page is delivered | SAQ A-EP |
| Standalone terminals that dial out or connect over the internet, not connected to other systems | SAQ B or SAQ B-IP |
| A validated point-to-point encryption (P2PE) terminal | SAQ P2PE |
| Typing card numbers into a processor's virtual terminal in a web browser | SAQ C-VT |
| Anything else, including storing card numbers | SAQ D |

Your acquirer tells you which one to file. If they don't, ask. Choosing the wrong SAQ is a common way to end up out of compliance without knowing it.

The biggest lever a small business has is to **keep card data out of its own systems**. Use a hosted payment page for online sales, P2PE or tokenizing terminals in the store, and never store card numbers yourself. Each of those moves you to a shorter SAQ.

Outsourcing doesn't remove responsibility. You still need to confirm that each payment provider is PCI DSS compliant (they publish an Attestation of Compliance), keep a list of them, and know which requirements they handle and which ones you do.

## The twelve requirements in plain words

PCI DSS is organized under six goals and twelve requirements.

1. **Network security controls.** Firewalls or similar controls between the CDE and everything else, including the guest Wi-Fi.
2. **Secure configuration.** Change vendor default passwords and settings on every device, and turn off what you don't use.
3. **Protect stored account data.** Keep as little as possible, for as short a time as possible. Mask the PAN when it's displayed. Make it unreadable where it's stored.
4. **Encrypt card data sent over open networks**, and never send card numbers by email, text, or chat.
5. **Protect against malware**, including phishing.
6. **Develop and maintain secure systems.** Patch promptly. For online stores, control and monitor the scripts on payment pages to stop skimming code.
7. **Restrict access** to card data to people whose job needs it.
8. **Identify users and authenticate them.** Unique IDs, strong passwords, and multi-factor authentication for access into the CDE.
9. **Restrict physical access.** Lock up paper with card data, and inspect card terminals for tampering and skimmers.
10. **Log and monitor** access to systems and card data.
11. **Test security regularly**: vulnerability scans, penetration tests where required, and checks for changes to payment pages.
12. **Support security with policies and programs**, including risk assessment, security awareness training, incident response, and service provider management.

## What staff need to know

Requirement 12.6 sets out the training. The business must have a formal security awareness program and review it at least every 12 months. Staff take training when hired and at least once every 12 months, delivered in more than one way (for example, a session plus written reminders). Training must cover phishing and related attacks, and the acceptable use of end-user technology such as laptops, phones, and remote access. At least once every 12 months, each person acknowledges that they've read and understood the security policy and procedures. Staff who handle card terminals also need training to spot tampering and substitution of devices (requirement 9.5.1.3).

A training session for front-line staff should leave people able to act on these points.

1. **Never write down card numbers** or security codes. If a phone order can't go straight into the terminal or virtual terminal, ask your manager for the approved process.
2. **Never accept or send card numbers by email, text, or chat.** If a customer sends one, don't reply with it, tell your manager, and delete it as your procedure says.
3. **Never ask for the PIN**, and don't watch customers enter it.
4. **Check the terminal.** Look for loose parts, extra layers over the keypad or card slot, broken seals, or a device that doesn't match the serial number on file. Report anything odd before using it.
5. **Verify repair visits.** Don't let anyone service, swap, or take a terminal without confirming the visit with your manager or the provider. Criminals pose as technicians.
6. **Use your own login.** Don't share passwords for the register, the virtual terminal, or the payment portal.
7. **Spot phishing.** Fake "processor" emails asking you to log in or update payment settings are common. Report them.
8. **Keep receipts and paperwork secure**, and shred anything with card data.
9. **Report problems right away**: a suspected skimmer, a lost device, a customer reporting fraud after shopping with you, or anything that looks wrong.
10. **Follow the acceptable use policy** for work devices and remote access.

## What the business needs on paper

- A list of every way you accept cards and every system and provider involved, with a simple diagram of how card data flows.
- Your SAQ (or Report on Compliance) and Attestation of Compliance for the current year.
- ASV scan reports, if your SAQ requires them.
- An information security policy, reviewed at least every 12 months.
- A list of payment terminals with make, model, serial number, and location, and a record of tamper inspections.
- A list of service providers, their PCI compliance status, and who's responsible for which requirements.
- Training records and annual policy acknowledgments. See the [training log](../../templates/training-log.csv) and [acknowledgment form](../../templates/acknowledgment-form.md).
- An incident response plan that says who to call, including your acquirer, if you suspect card data was compromised.

## Penalties and enforcement

The PCI Council doesn't fine anyone. Enforcement runs through the card brands and acquirers under their contracts. Brands can assess fees and penalties against an acquirer, and acquirer agreements commonly let the acquirer pass them on to the merchant. The amounts aren't published.

After a breach, the costs usually come from several places: a forensic investigation by a PCI Forensic Investigator, card brand assessments for fraud and card reissuance, higher processing fees, a requirement to move to a stricter validation level, and in serious cases losing the ability to accept cards. State breach notification laws can apply too, and the FTC has brought cases against companies whose weak security exposed card data.

## Common mistakes

- Writing card numbers on paper order forms or sticky notes.
- Taking card numbers in email, chat, or voicemail, or recording phone calls that capture them.
- Storing security codes "to make repeat orders easier."
- Default passwords on terminals, routers, or the point-of-sale system.
- Running the registers on the same flat network as guest Wi-Fi or personal devices.
- Filing SAQ A for a website that actually hosts its own payment form.
- Assuming the processor "handles PCI" and filing nothing.
- No check for skimmers on terminals, gas pumps, or self-checkout.

## Next

The [20-day plan](20-days-to-comply.md) for this domain turns the walkthrough into a day-by-day list of tasks.

## Check yourself

1. A customer reads their security code over the phone, and you write it down to process the order later. Is that allowed?
2. Your online store redirects to the processor's hosted payment page. Which SAQ is likely?
3. How often must staff take security awareness training under PCI DSS v4.0.1?
4. A technician arrives unannounced to replace your card terminal. What do you do?
5. Is PCI DSS a law?

<details>
<summary>Answers</summary>

1. No. Security codes are sensitive authentication data and can't be stored after authorization, including on paper. Process the payment directly while on the call.
2. SAQ A, if the processor serves the entire payment page and your site handles no card data. Confirm with your acquirer.
3. When hired and at least once every 12 months, along with an annual acknowledgment of the security policy.
4. Don't hand over the device. Confirm the visit with your manager or the provider using a phone number you already have.
5. No. It's an industry standard enforced through your contract with your acquirer and the card brands' rules.

</details>

## Sources

- PCI Security Standards Council, [Document Library](https://www.pcisecuritystandards.org/document_library/): PCI DSS v4.0.1, the Self-Assessment Questionnaires and their instructions, and the glossary. Training: requirements 12.6.1 to 12.6.3.2 and 9.5.1.3. Sensitive authentication data: requirement 3.3.1.
- PCI Security Standards Council, [Just Published: PCI DSS v4.0.1](https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1) (June 2024).
- PCI Security Standards Council, [Now is the Time for Organizations to Adopt the Future-Dated Requirements of PCI DSS v4.x](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x) (effective March 31, 2025).
- PCI Security Standards Council, [Request for Comments: PCI DSS v4.0.1](https://blog.pcisecuritystandards.org/request-for-comments-pci-data-security-standard-pci-dss-v4.0.1) (June 2026).
- PCI Security Standards Council, [Merchant resources](https://www.pcisecuritystandards.org/merchants/), including the Guide to Safe Payments and the Data Security Essentials Evaluation Tool for small merchants.
- PCI Security Standards Council, [New Information Supplement: Payment Page Security and Preventing E-Skimming](https://blog.pcisecuritystandards.org/new-information-supplement-payment-page-security-and-preventing-e-skimming).
- Federal Trade Commission, [Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) business guidance.
