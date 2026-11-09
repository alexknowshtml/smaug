---
title: "Automating a YubiKey for Agentic Logins"
type: article
date_added: 2026-11-09
source: "https://jon.oberheide.org/blog/2026/10/24/automating-a-yubikey-for-agentic-logins/"
author: "Jon Oberheide"
tags: [security, agents, authentication, 2fa, yubikey]
via: "Twitter bookmark from @jonoberheide"
---

Jon Oberheide (Duo founder) describes how agents that drive headless browsers into portals without APIs or MCP have to get through human-designed 2FA. He walks through each common method and rates how hard it is for an agent, then describes the hack he built to automate a YubiKey challenge/response for one critical portal that only supports a phone call or an attested hardware key. The extracted text was truncated, so the YubiKey automation details are not captured here.

## Key Takeaways

- TOTP and passkeys/WebAuthn are easy for agents: store the seed or key material and compute on demand.
- Email OTP is medium (route to an agent-readable inbox, e.g. Resend); SMS and voice OTP are hacks (virtual numbers, webhooks, speech-to-text).
- Push approval is the biggest hack (emulating the vendor app); hardware security keys are hard but doable.
- Security and automatability are not inversely correlated; passkeys are strong, usable and easy to automate.
- Ideal future is APIs/MCP with scoped, revocable, auditable delegated agent credentials; giving replayable credentials to non-deterministic agents is risky.

## Links

- [Article](https://jon.oberheide.org/blog/2026/10/24/automating-a-yubikey-for-agentic-logins/)
- [Original Tweet](https://x.com/jonoberheide/status/2114029568621174907)
