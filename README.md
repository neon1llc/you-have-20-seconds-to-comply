# You Have 20 Seconds To Comply

Plain-language compliance guides and training for small businesses, from [neon1](https://neon1.tech).

- **20 seconds:** this page. Find your domain below.
- **20 minutes or less:** each walkthrough explains one rule: who it covers, what it asks, what staff need to know, and the penalties, with primary sources.
- **20 days:** each domain's plan turns the walkthroughs into one task a day.

## Domains

| Domain | 20-minute walkthroughs | 20-day plan |
|---|---|---|
| [Healthcare](domains/healthcare/README.md) | [HIPAA](domains/healthcare/20-minutes-to-hipaa.md) | [Plan](domains/healthcare/20-days-to-comply.md) |
| [Life sciences](domains/life-sciences/README.md) | [GxP: GMP, GLP, GCP, GDP, and Part 11](domains/life-sciences/20-minutes-to-gxp.md) | [Plan](domains/life-sciences/20-days-to-comply.md) |
| [Payments](domains/payments/README.md) | [PCI DSS](domains/payments/20-minutes-to-pci-dss.md) | [Plan](domains/payments/20-days-to-comply.md) |
| [Financial services](domains/financial-services/README.md) | [FTC Safeguards Rule](domains/financial-services/20-minutes-to-ftc-safeguards.md) | [Plan](domains/financial-services/20-days-to-comply.md) |
| [Education](domains/education/README.md) | [FERPA](domains/education/20-minutes-to-ferpa.md), [COPPA](domains/education/20-minutes-to-coppa.md) | [Plan](domains/education/20-days-to-comply.md) |
| [Privacy](domains/privacy/README.md) | [State privacy laws and New York's SHIELD Act](domains/privacy/20-minutes-to-state-privacy-laws.md) | [Plan](domains/privacy/20-days-to-comply.md) |
| [Security](domains/security/README.md) | [NIST Cybersecurity Framework and CIS Controls](domains/security/20-minutes-to-nist-csf.md), [SOC 2](domains/security/20-minutes-to-soc-2.md) | [Plan](domains/security/20-days-to-comply.md) |
| [Accessibility](domains/accessibility/README.md) | [ADA and WCAG](domains/accessibility/20-minutes-to-ada-and-wcag.md) | [Plan](domains/accessibility/20-days-to-comply.md) |
| [Marketing](domains/marketing/README.md) | [CAN-SPAM](domains/marketing/20-minutes-to-can-spam.md), [TCPA](domains/marketing/20-minutes-to-tcpa.md) | [Plan](domains/marketing/20-days-to-comply.md) |
| [AI use](domains/ai/README.md) | [NIST AI RMF and AI literacy](domains/ai/20-minutes-to-nist-ai-rmf.md), [NYC Local Law 144](domains/ai/20-minutes-to-nyc-local-law-144.md) | [Plan](domains/ai/20-days-to-comply.md) |

Not sure where to start? Every business has [privacy](domains/privacy/20-minutes-to-state-privacy-laws.md) and [security](domains/security/20-minutes-to-nist-csf.md) duties. Add the domains for the kind of data you handle and the way you reach customers.

## Training kit

- [Running compliance training](training/facilitator-guide.md): turn any walkthrough into a 20-minute self-study, a 30-minute session, or a workshop.
- [Acknowledgment form](templates/acknowledgment-form.md): staff confirm the training and the policies.
- [Training log](templates/training-log.csv): the record auditors and regulators ask for.

Each walkthrough ends with "Check yourself" questions and answers you can use as a quiz.

## Who it's for

Owners, office managers, and IT leads at small and midsize businesses and the vendors who serve them, plus trainers and consultants who want open material to teach from. No legal background needed.

## What this isn't

These guides explain rules in plain words and point to the official text. They aren't legal advice, and rules change. Each page shows the date it was last reviewed. For decisions with real consequences, such as whether a breach must be reported, talk to a qualified attorney.

## Related neon1 projects

- [SOC It 2 Me](https://github.com/neon1llc/soc-it-2-me): hands-on SOC 2 readiness course.
- [Phish Out of Water](https://github.com/neon1llc/phish-out-of-water): a one-hour security awareness session kit.
- [Home Is Where the Smart Is](https://github.com/neon1llc/home-is-where-the-smart-is): a household tech handbook.
- [Ready, Secure, Go](https://github.com/neon1llc/ready-secure-go): plain-language security training.

## Adding a domain or rule

Each domain is a folder under `domains/` with a README, one or more `20-minutes-to-<rule>.md` walkthroughs, and a `20-days-to-comply.md` plan. See [CONTRIBUTING.md](CONTRIBUTING.md) for the page layout and writing rules, and run the check before opening a pull request:

```
node tools/check.mjs
```

## Licenses

| What | License | What it means |
|---|---|---|
| Written material (everything except `tools/` and `.github/`) | [CC BY-SA 4.0](LICENSE) | Share it, teach from it, adapt it, even commercially. Credit it as *"Based on You Have 20 Seconds To Comply by neon1 (neon1.tech), CC BY-SA 4.0"* and share your changes under the same license. |
| Code (`tools/`, `.github/`) | [MIT](LICENSE-CODE) | Use it for anything, keeping the copyright notice. |
| The You Have 20 Seconds To Comply and neon1 names and the neon1 logo | Reserved | Not covered by either license. See [TRADEMARK.md](TRADEMARK.md). |

You Have 20 Seconds To Comply is © 2026 neon1 LLC. Keep the [NOTICE](NOTICE) file in copies and adaptations. Laws and government publications cited here are public domain. Standards such as PCI DSS and WCAG belong to their publishers and are cited, not copied. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md).

Found something wrong or out of date? See [SECURITY.md](SECURITY.md).
