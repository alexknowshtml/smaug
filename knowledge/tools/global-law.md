---
title: "global-law (Git for Global Law)"
type: tool
date_added: 2026-11-09
source: "https://github.com/lexifina/global-law"
tags: [law, git, legal-tech, mcp, open-data]
via: "Twitter bookmark from @RoundtableSpace"
---

The world's law in git: each jurisdiction's legislation is its own repository (`lexifina/<country>-law`) where every commit is one law taking effect, and this repo aggregates them as submodules. The tools read each commit's `In-force` date, so you can see what any provision said on any date and which law wrote each line or word. It grew out of the US Code repository that hit #1 on Hacker News (28/10/26). Released CC0 (~1.9k stars at capture).

## Key Features

- Per-country law repositories as submodules, arranged by jurisdiction (country, state, city), with manifest.json and jurisdiction.json indexes
- CLI (`tools/law.py`): `show` a provision on a date, `blame`/`words` for the law behind each line/word, `diff` between dates, `laws` that took effect in a window
- Read-only MCP server with 18 tools (find provision, read on a date, history, search, check a case or brief against law in force); Python 3.9+ and git only, no network calls
- Case law corpora per court, linked to the articles they cite, with `check_precedent`
- Preconfigured for Claude Code, Cursor, VS Code and Codex

## Links

- [GitHub](https://github.com/lexifina/global-law)
- [Original Tweet](https://x.com/RoundtableSpace/status/2116104070029292024)
