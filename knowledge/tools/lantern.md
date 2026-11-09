---
title: "lantern"
type: tool
date_added: 2026-11-09
source: "https://github.com/ivarvong/lantern"
tags: [typescript, svg, animation, code-explainers, cloudflare-workers, agents]
via: "Twitter bookmark from @dillon_mulroy"
---

lantern produces animated, steppable explainers for code changes. It is a zero-dependency TypeScript port of manim's core model that renders to SVG, either as a live DOM in the browser or as strings in Cloudflare Workers or Node. Every step is addressable by URL, and each scene has a text form and structured trace so agents can inspect and verify it.

## Key Features

- Scenes are classes with an async `construct()`; steps are named markers and `this.state` is recorded in traces
- Mermaid flowchart parsing into animatable shapes, plus JSON document scenes (`sceneFromDoc`)
- Agent-oriented tooling: `see` (frame as text plus state diff), `shot` (contact sheet PNG), `verify:motion` (teleports, pops, cuts, flicker)
- Runs in browser, Node 24 or Cloudflare Workers; not yet on npm

## Links

- [GitHub](https://github.com/ivarvong/lantern)
- [Original Tweet](https://x.com/dillon_mulroy/status/2113758763517620622)
