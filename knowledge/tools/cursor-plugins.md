---
title: "cursor/plugins (incl. pstack engineering principles)"
type: tool
date_added: 2026-11-09
source: "https://github.com/cursor/plugins/blob/main/pstack/docs/guide/08-principles.md"
tags: [cursor, plugins, agent-skills, pstack, context-engineering]
via: "Twitter bookmark from @cu30rry_"
---

The cursor/plugins repo holds the Cursor plugin specification and official plugins (teaching, thermos, orchestrate, advisor, ralph-loop, cli-for-agent and more). The linked page is the principles guide of pstack by Lauren Tan (@poteto): very concise skills (~10-20 lines) that distill good engineering practice, loaded through a short index in `/poteto-mode`, which asks the agent to name each principle that shaped a decision. @cu30rry_ cites it as the model for compact, durable agent plugins.

## Key Features

- pstack: "go deep first" agent workflows meant to be parallelized, with principles as small skills (invokable as `/principle-<name>`)
- Principles are extracted from real sessions correcting agents, e.g. "Attack the Premise", inspired by Victor Taelin's post on models building machinery on a wrong premise
- Repo also lists dyl-stack, advisor, orchestrate and other plugins; ~15.8k stars

## Links

- [Principles guide](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/08-principles.md)
- [Repo](https://github.com/cursor/plugins)
- [Original Tweet](https://x.com/cu30rry_/status/2111056560772337907)
