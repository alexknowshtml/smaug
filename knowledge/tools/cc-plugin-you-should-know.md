---
title: "cc-plugin-you-should-know"
type: tool
date_added: 2026-10-18
source: "https://github.com/wassname/cc-plugin-you-should-know"
tags: [claude-code, plugins, prompts, observer, research]
via: "Twitter bookmark from @wassname"
---

Claude Code's built-in `cc-plugin-you-should-know` plugin, extracted from version 2.1.292 for research and to reproduce its observer behavior in Pi. The repo retains the observer plugin and its discovery tip rather than the whole application.

## Key Features

- Main observer prompt in `claude-code-2.1.292/observer-prompt.md`, plus formatted and raw bundled plugin code.
- Periodically sends the conversation, including tool results, to a separate request using the same model as the main session.
- Looks for one consequential thing the user may have missed (a tradeoff, unexplained decision or questionable result) and usually replies `learn: none`.
- Has no tools and does not interrupt the main agent; shows a short note above the input.
- Remembers suggested and understood topics to avoid repeats, and backs off when suggestions are ignored.
- Checks are eligible every six main-agent steps, subject to other conditions.

## Links

- [GitHub](https://github.com/wassname/cc-plugin-you-should-know)
- [Original Tweet](https://x.com/wassname/status/2111951857694498823)
