---
title: "unslop"
type: tool
date_added: 2026-11-09
source: "https://github.com/heydamir/unslop"
tags: [claude-skill, design, ui, frontend]
via: "Twitter bookmark from @ConnorShowler"
---

A skill for Claude Code, Codex and Google Antigravity by Damir Sokolovsky (@heydamir) that turns vibecoded, AI-looking UI into a designed interface. It audits for slop first (purple gradients, glows, emoji labels, shouty copy, uneven spacing), proposes a direction taken from the product, then fixes the screen pass by pass like a designer's redline review. Works with any stack (Next.js, React, Vue, Svelte, Tailwind, plain HTML/CSS) and even on a live site given only a URL. About 12k stars; CC BY 4.0.

## Key Features

- Audit lists every sign of slop and where it lives, before any edit
- Direction step: character, world, the one or two colour moments, a signature detail
- Ordered passes: spacing, color, icons, copy, type, layout, details, visuals, motion
- Optional hero visuals via image services (fal, Replicate, OpenAI images, Higgsfield), asking before any paid generation
- Optional story video (<10s square clip of the screen unslopping itself); needs Playwright and ffmpeg
- Install by copying `skills/unslop` into `~/.claude/skills/`; invoke with `/unslop`

## Links

- [GitHub](https://github.com/heydamir/unslop)
- [Original tweet](https://x.com/ConnorShowler/status/2116172935710810128)
- [Announcement by @heydamir](https://x.com/heydamir/status/2116158176336970008)
