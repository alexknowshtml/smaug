---
title: "dzhng/skills"
type: tool
date_added: 2026-11-09
source: "https://github.com/dzhng/skills"
tags: [agent-skills, claude-code, codex, spec-driven-development, autonomous-agents]
via: "Twitter bookmark from @dzhng"
---

dzhng/skills is a personal library of reusable, domain-agnostic AI agent skills for building "software factories": agents that pursue a goal autonomously until the output can be trusted. It works with Claude Code, Codex, opencode, Cursor and other skill-compatible harnesses, and installs with `npx skills add dzhng/skills`. About 1,470 stars at time of bookmarking.

The core idea is to treat the unknown as fog of war: map the terrain, carve it into territories that build and verify in isolation, and re-slice the plan whenever implementation shows it is stale. Every piece is checked through architecture review, code review and visual review against a baseline before the loop continues.

## Key Features

- `/explore-unknowns`: interviews you quadrant by quadrant and hands back rendered options, mocks and decision tables to react to, so major decisions are frontloaded before any code is written
- `/write-spec`: transcribes the resulting map into a spec, asking about anything genuinely new instead of deciding it
- `/goal /implement-spec specs/<feature>`: runs the build unattended in loop mode (hours for a small feature, days for a large one), with a `/review` pass after each slice and `/screenshot-critique` and `/compare-screenshots` for visual work
- Ends by consolidating `specs/<feature>/decisions.md`, ranking every decision the agent made where the spec was silent, least confident first, so you review decisions rather than the diff
- `/auto-research`: runs a fast experiment loop (small hypothesis batches, regression checks on earlier tasks) when a decision needs experimental evidence
- `/close-spec` when the last slice lands

## Links

- [GitHub](https://github.com/dzhng/skills)
- [Original Tweet](https://x.com/dzhng/status/2109410105246777492)
