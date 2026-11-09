---
title: "Astryx"
type: tool
date_added: 2026-11-09
source: "https://github.com/meta/astryx"
tags: [design-system, react, stylex, mcp, agents, meta]
via: "Twitter bookmark from @awe0_io"
---

Astryx is Meta's open source design system, matured over eight years internally where it powers 13,000+ apps, now released under MIT (Beta, about 17.6k stars). It ships 150+ accessible React 19 components, brand-level theming, dark mode, ready-made templates and a CLI, and is designed so that people and AI coding assistants build from the same reference docs and tooling.

## Key Features

- 150+ accessible components, dark mode, templates, theming via CSS custom property overrides (no forking or wrapping needed)
- Authored in StyleX but consumed as pre-built CSS with typed React components; no build plugin, and `className` overrides work with Tailwind, CSS modules or plain CSS
- Open internals: building blocks are exported, and `swizzle` ejects a component's full source into your project
- Agent-ready: CLI (`astryx component --list`, `astryx docs ...`) and MCP expose component docs and templates to AI agents
- Packages: `@astryxdesign/core`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`

## Links

- [GitHub](https://github.com/meta/astryx)
- [Docs](https://astryx.atmeta.com)
- [Original Tweet](https://x.com/awe0_io/status/2119354093458395284)
