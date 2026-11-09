---
title: "CVEngine - AI-first external attack surface assessment"
type: tool
date_added: 2026-11-09
source: "https://github.com/hevnsnt/CVEngine"
tags: [security, attack-surface, vulnerability-scanner, mcp, nuclei]
via: "Twitter bookmark from @hevnsnt"
---

Free, GPL-3.0, self-hosted (Docker Compose, Django/PostgreSQL) attack surface manager. Point it at a domain and it discovers subdomains, IPs, ports and tech with bbot, naabu and nmap, matches them against actively exploited CVEs (rated fire, smoke or ice), then uses AI triage plus read-only Nuclei/nmap/banner checks to prove which findings are real, recording the exact command used.

## Key Features

- Continuous discovery with a change timeline (new hosts, opened ports, version bumps, screenshot diffs)
- Exploitation-ranked CVEs and a 0-100 score per host; triage into confirmed, likely or needs validation
- Sentinels: remote scanners that can scan inside private networks
- Shodan-style search over your own inventory, PDF reports, REST API, MCP server, Slack/Discord/Telegram alerts
- Bring your own AI (Anthropic, OpenAI, OpenRouter, Ollama, LM Studio, vLLM); works without a model for discovery and scanning
- Bug bounty workbench with program scope import

## Links

- [GitHub](https://github.com/hevnsnt/CVEngine)
- [Original Tweet](https://x.com/hevnsnt/status/2114370259797065878)
