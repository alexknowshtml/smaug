---
title: "plugbear"
type: tool
date_added: 2026-11-09
source: "https://github.com/mikecann/plugbear"
tags: [mcp, agents, gateway, claude-code, codex]
via: "Twitter bookmark from @mikeysee"
---

PlugBear (formerly Plugboard, CLI still named `connectors`) is a single MCP gateway that runs on a Mac and gives every agent the same URL. You sign in to each service (Notion, Sentry, Cloudflare, Gmail, Google Calendar, DeepWiki, or any MCP server) once, instead of re-connecting connectors for every Claude login, Codex, Grok and so on. Tokens stay on your machine; nothing goes through a third party.

## Key Features

- One sign-in per service shared by all agents and providers, each agent getting its own token for the gateway
- Approval gates: sending, replying, deleting, sharing and inviting wait for approval on a page (optional phone push); reads and page edits do not
- Call log of what each agent called, with what, and how it went
- Agents are told when a service needs sign-in, with a link to hand to the user
- macOS (Apple silicon) with a LaunchAgent, optionally on an always-on Mac over Tailscale; per-agent upstream filters in `agents.json`
- TypeScript, ~19 stars at time of capture

## Links

- [GitHub](https://github.com/mikecann/plugbear)
- [Original Tweet](https://x.com/mikeysee/status/2115672608675078569)
