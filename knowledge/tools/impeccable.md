---
title: "Impeccable"
type: tool
date_added: 2026-10-20
source: "https://github.com/pbakaus/impeccable"
tags: [agent-skills, design, anti-slop, ai-agents, frontend]
via: "Twitter bookmark from @RoundtableSpace"
---

Impeccable gives a coding agent a design vocabulary and a reviewer so AI-built interfaces stop converging on the same look (Inter everywhere, purple-to-blue gradients, nested cards, gray text on colored backgrounds). It installs as a set of slash commands into agents like Claude Code, Cursor and Codex CLI.

## Key Features

- 24 commands grouped as Steer (bolder, quieter, distill, typeset, layout, animate, overdrive), Review (critique, audit), Finish (polish, harden, clarify, adapt, optimize, onboard), Iterate live (live, generate) and Plan/set up (shape, init, document, extract).
- `/impeccable init` reads the codebase, asks only what it cannot infer and writes PRODUCT.md; `document` captures the visual system in DESIGN.md.
- `critique` scores a design against usability heuristics; `audit` reports accessibility, performance, theming and responsive issues ranked P0 to P3.
- A deterministic slop detector (62 rules per the README) runs without an LLM or API key.
- Install with `npx impeccable install` from the project root.

## Links

- [GitHub](https://github.com/pbakaus/impeccable)
- [Original Tweet](https://x.com/RoundtableSpace/status/2112449992346517755)
