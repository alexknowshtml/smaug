---
title: "Unbroker"
type: tool
date_added: 2026-11-09
source: "https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/security/unbroker"
tags: [privacy, ai-agents, hermes-agent, skills, security]
via: "Twitter bookmark from @NousResearch"
---

Unbroker is an open-source skill for Hermes Agent (Nous Research) that finds where your personal information is exposed on data broker sites and files the removal requests for you. It was announced by @SHL0MS as a free alternative to paid removal services such as DeleteMe, Incogni and EasyOptOuts, which charge monthly fees to submit opt-outs you can file yourself. @NousResearch re-shared it with "Great time to use the Unbroker skill!"

## Key Features

- Builds search vectors from every name, alias, email, phone and address you have used, so profiles indexed under old names or addresses are still found
- Fans out parallel sub-agents across a maintained, auto-refreshing list of brokers
- Tiered automation: drives a browser through opt-out forms, sends emails and opens confirmation links itself; anything only a human can finish is returned as a short list
- Email handled through your own logged-in webmail (no stored password), SMTP, or manual drafts
- Tailors requests to your jurisdiction (CCPA/CPRA, GDPR, general right-to-delete) and uses California's DROP portal to cover 500+ registered brokers in one request
- Privacy-minded: data stays local (works with a local model), optional encryption at rest, opaque IDs in filenames and logs
- Tracks every case in a ledger and can re-scan on a cron schedule to re-file if data reappears

## Links

- [GitHub](https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/security/unbroker)
- [Hermes Agent repo](https://github.com/NousResearch/hermes-agent)
- [Original Tweet](https://x.com/NousResearch/status/2114530795868373035)
