---
title: "HackerTube: the YouTube videos Hacker News keeps telling each other to watch"
type: article
date_added: 2026-11-09
source: "https://hackertube.org/"
author: "Andrej Karpathy"
tags: [Hacker-News, YouTube, recommendations, claude-code, vibe-coding]
via: "Twitter bookmark from @karpathy"
---

HackerTube is a YouTube-styled front end (search, categories, playlists, watch-later, light/dark theme) built by Andrej Karpathy as a weekend hack. Claude filtered about 43M Hacker News comments spanning 20 years down to 6,454 videos that are repeatedly recommended, giving a login-free browsing experience with state kept in the local browser session. Thumbnails are a representative mid-video frame rather than the A/B-tested uploaded ones. The underlying comment-analysis data is offered as a single zip so others can point their own Claude at it.

Note: the captured page content was raw HTML/CSS only, so details beyond the site's description and the tweet thread are not captured.

## Key Takeaways

- Built in about 2 hours with Claude Code (desktop app) and Opus 5.5 on Medium effort; Karpathy only did the browser-side chores (YouTube metadata API key from Google Cloud, a VPS, the domain) and had Claude update, secure, harden and deploy the server.
- Curating by HN comment signal ("videos that keep being recommended") beats algorithmic recommendations for him.
- Projects that once took weeks or months can now be few-shotted over breakfast.

## Links

- [Article](https://hackertube.org/)
- [Original Tweet](https://x.com/karpathy/status/2116957135661945283)
