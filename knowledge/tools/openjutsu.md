---
title: "openjutsu"
type: tool
date_added: 2026-11-09
source: "https://github.com/D3voz/openjutsu"
tags: [video-generation, comfyui, character-swap, open-weights, local-ai]
via: "Twitter bookmark from @RoundtableSpace"
---

Open-source, local alternative to Higgsfield's Genjutsu character swap. Drop in a video and a character photo, press Generate, and the main person in the video is replaced while camera, cuts, motion and soundtrack are preserved. Built as a small Next.js front end (TypeScript, ~2k stars) over ComfyUI workflows using `@comfyorg/sdk`, running on open weights: MiniMax H3 for video, SAM 3.1 for person tracking, Qwen3-VL 8B for describing pictures and shots, and FLUX.3 Klein for relighting.

## Key Features

- Simple motion transfer: one character replaces the main person (largest in frame)
- Advanced motion transfer: 1-4 characters with optional roles, per-shot matching of tracked people to roles
- Object swap: change (hair, clothes, objects), remove, or repaint the background, regenerating only the tracked area
- From picture: FLUX prepares the character in the video's pose, with optional relight (17 light looks)
- Post-processing to fix small faces; selectable visual describer model (Qwen3-VL 8B/4B, Gemma 4 E2B)
- Runs fully locally on your own GPU; the tweet notes to only use footage and faces you have rights to

## Links

- [GitHub](https://github.com/D3voz/openjutsu)
- [Original tweet](https://x.com/RoundtableSpace/status/2116141818786230389)
