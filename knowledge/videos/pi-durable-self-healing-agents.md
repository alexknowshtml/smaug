---
title: "Pi Durable: durable agents and a self-healing code setup"
type: video
date_added: 2026-11-09
source: "https://www.youtube.com/watch?v=BLRReTwV8Fc"
channel: "Scott Tolinski (Syntax)"
tags: [agents, durable-agents, pi, sentry, self-healing]
via: "Twitter bookmark from @stolinski"
status: transcribed
transcript_source: "yt-dlp-captions"
---

Scott Tolinski explains why long-running, self-starting agents need durability (resumable after crashes, never repeating side effects like sending an email twice) and shows how Pi Durable, a library from the team behind the Pi agent harness, provides this. He replaced about 8,000 lines of custom agent code with it and demos a self-healing flow: a Sentry error triggers a webhook, an agent finds the root cause, fixes it, tests it, opens a PR, and marks the issue resolved.

## Video Info

- **Channel:** Scott Tolinski (Syntax)
- **Title:** Pi Durable demo (title not in transcript)
- **Why bookmarked:** Tolinski says he uses Pi Durable for everything, including automatic self-healing of his code

## Key Takeaways

- Pi Durable persists everything to storage (messages, tool calls, pending approvals); a new process reopens it and continues, and any client (phone, browser, Slack) sees the same agent
- Every tool declares whether it is safe to re-run after a crash (a search yes, sending an email no)
- Agent-driven rather than a rigid workflow engine; steering, forking, sub-agents, multiplayer and approvals come nearly free
- Runs anywhere JavaScript runs: browser with IndexedDB, Node with SQLite, Durable Objects, or Deno's cell-d; works with any model provider
- Self-healing demo: Sentry webhook through a Cloudflare tunnel, root-cause analysis via Sentry, fix, test, PR, merge, and issue marked resolved; the run can be stopped and resumed, and the same agent answered later questions
- Adoption signals: Open Code 2 can run as a library or in a durable object; Cloudflare's Agent SDK has a harness for it; Mario (Pi's author) built a multiplayer agent app on it running on an Android phone
- Tip: point your agent at the repo's examples folder (reload/restart, tool overrides, compaction, child tasks)

## Links

- [Video](https://www.youtube.com/watch?v=BLRReTwV8Fc)
- [Original Tweet](https://x.com/stolinski/status/2111096409793716386)
