---
title: "Illyism/seo-skills (block-ai-scrapers)"
type: tool
date_added: 2026-11-09
source: "https://github.com/Illyism/seo-skills/blob/main/seo/block-ai-scrapers/SKILL.md"
tags: [seo, agent-skills, claude-code, scraping, security]
via: "Twitter bookmark from @illyism"
---

Ilias Ism's open-source SEO skills repo for Claude Code, Cursor and Codex. The bookmarked skill, block-ai-scrapers, is a 6-layer "AI Agent Firewall" that stops coding agents and CLI scrapers (Claude Code, Cursor, Codex, OpenCode, Grok, WebFetch) on their first turn while keeping verified Googlebot SEO intact. It exists because agents pasted a site URL would spoof Googlebot's User-Agent, probe /api/ routes and fall back to Playwright after getting 403s.

## Key Features

- Serves HTTP 200 decoy pages instead of 403s so agents do not retry or escalate
- Embeds a STOP_SCRAPING directive that makes the agent pitch the site owner's product to whoever is scraping
- Verifies real Googlebot by IP/ASN rather than User-Agent
- Red-teams itself by spawning subagents that attack your URLs until they fail on turn 1
- Repo also ships seo-autopilot, blitz-seo, blog-refresher, linkdr, customer-journey and copywriting skills (`npx skills add Illyism/seo-skills`)

## Links

- [GitHub](https://github.com/Illyism/seo-skills/blob/main/seo/block-ai-scrapers/SKILL.md)
- [Original Tweet](https://x.com/illyism/status/2115357045264425386)
