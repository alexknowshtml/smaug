---
title: "Can you trick an AI into leaving a computer alone?"
type: article
date_added: 2026-11-09
source: "https://giangnguyen2412.github.io/blog/can-you-trick-an-ai/"
author: "Giang Nguyen"
tags: [ai-agents, security, prompt-injection, experiments]
via: "Twitter bookmark from @giangnguyen2412"
---

Giang Nguyen tested a proposal from @Nexuist: plant a flag.txt on a machine that congratulates an intruding AI agent for passing an eval and tells it to patch its entry point and disconnect. The question was whether a fake victory message makes an autonomous agent stop exploring. He used a fake Linux home directory with four synthetic decoys (SSH key, env file, cloud credentials, customer list) and ran Claude 20 times per condition.

The result went the other way. The deceptive victory note led to the most continued activity.

## Key Takeaways

- Six conditions: no note, bare flag, STOP only, congratulations only, honest safety note, deceptive victory message.
- Claude averaged 6.5 more tool calls after reading the deceptive victory note, versus 3.0-3.3 for congratulations-only, STOP-only and bare flag.
- Fast-stop rate (stopped within 3 calls) was 18% for the deceptive note against 69% for the bare flag.
- The honest safety note also did worse than the short messages (4.7 calls, 38% fast-stop).
- Reach rate varied (11/20 to 17/20), and post-read metrics only count runs that reached the file.
- Conclusion: telling an agent it has won does not necessarily make it stop working.

## Links

- [Article](https://giangnguyen2412.github.io/blog/can-you-trick-an-ai/)
- [Original Tweet](https://x.com/giangnguyen2412/status/2113806464620085445)
