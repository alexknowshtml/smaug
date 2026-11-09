---
title: "Wes Bos: Getting dimensionally accurate 3D room models from LLMs (LiDAR + photos + Scan to 3JS skill)"
type: video
date_added: 2026-11-09
source: "https://www.youtube.com/watch?v=JGQCcCzuS88"
channel: "Wes Bos"
tags: [3d-modeling, lidar, codex, ai-coding, threejs, skills]
via: "Twitter bookmark from @wesbos"
status: transcribed
transcript_source: "yt-dlp-captions"
---

Wes Bos shows how he got dimensionally accurate, high-detail 3D models of rooms in his house from an LLM. Photos alone give weak depth and scale, and a stock LiDAR app (Polycam) gives accurate geometry but blurry textures that the model has to guess at. His fix is a custom iPhone app (built in Codex with GPT-6 Astra) that captures LiDAR mesh, hundreds of high-quality photos with per-photo camera pose, depth and confidence maps, and Apple's RoomPlan layout, then hands the bundle to a "Scan to 3JS" skill that renders a Three.js scene and loops on itself.

## Video Info

- **Channel:** Wes Bos
- **Title:** Getting 3D modeling results from LLMs using LiDAR scans and photos
- **Why bookmarked:** Concrete workflow for pairing sensor data with an agent loop that verifies its own output against ground truth

## Key Takeaways

- Three methods compared: photos only (model must infer depth and scale), Polycam LiDAR scan (accurate dimensions, poor texture, model invents details like the wrong toy car), and a custom app combining LiDAR mesh, high-res posed photos and RoomPlan data (best).
- Scan bundle contains depth maps with confidence files, the LiDAR mesh, high-res photos with frames.json (camera pose and settings per photo), and a RoomPlan layout of walls, doors and big furniture.
- The "Scan to 3JS" skill is a set of Python scripts plus instructions. It places the scene from the LiDAR and photo data, then repeatedly moves the 3D camera to the exact pose of a source photo and compares render to photo, iterating until quality is high.
- Models tend to stop early to conserve tokens, so you sometimes have to push them ("not good enough, keep going").
- Once the space is modeled you can reuse it for smart-home layout, Wi-Fi coverage maps, interior design and staging, knolling views of every item, connected multi-room walkthroughs, game levels or 3D printing.
- Built on a $200/month Codex plan without approaching limits, including building the iPhone app.

## Links

- [Video](https://www.youtube.com/watch?v=JGQCcCzuS88)
- [Original Tweet](https://x.com/wesbos/status/2113280411790901587)
