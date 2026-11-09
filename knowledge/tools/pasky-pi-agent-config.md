---
title: "pi-agent-config"
type: tool
date_added: 2026-11-09
source: "https://github.com/pasky/pi-agent-config"
tags: [ai-agents, pi, tmux, multi-agent, workflow]
via: "Twitter bookmark from @xpasky"
---

Petr Baudis's (pasky) personal configuration for the Pi coding agent, doubling as a write-up of how he works with AI agents. Individual agents are Pi sessions with the pi-amplike extension (named model/thinking-level modes, Jina.AI web browsing, synchronous parallel subagents, cross-model-vendor review tool, /handoff for long sessions). Agent swarms run as tmux windows on a permanently running Linux server, built on pi-side-agents, which spawn async agents each with their own tmux window and git worktree.

## Key Features

- Mode system: named combinations of models and thinking levels, easy to retarget when new models ship
- Cross-model-vendor review as the main precondition for staying hands-off
- /handoff: like /compact but lets the model re-query the pre-compaction session
- Side agents (tmux window + git worktree each, depth limited to 2), no backlog or TODO lists; "lgtm merge" lands work
- Custom tmux window switcher with LLM-generated branch names and session summaries
- Skills for importing Claude.ai chats and querying email; remote image paste and Chrome CDP proxying

## Links

- [GitHub](https://github.com/pasky/pi-agent-config)
- [Original Tweet](https://x.com/xpasky/status/2118059185648685513)
