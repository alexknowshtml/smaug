---
title: "anan-iphone-use"
type: tool
date_added: 2026-11-09
source: "https://github.com/ananhq/anan-iphone-use"
tags: [mcp, esp32, iphone, agents, hardware]
via: "Twitter bookmark from @hr98w"
---

ESP32-S3 MCP server firmware (built for the M5Stack StopWatch) that lets an AI agent control an iPhone by acting as a USB or Bluetooth mouse and keyboard. The client agent observes the screen, decides and verifies; the board only executes taps, drags, scrolling and typing. The firmware runs no model and provides no phone screenshots. 154 stars, C.

## Key Features

- MCP server reachable over USB networking (192.168.7.1) or Wi-Fi; input to the iPhone goes over USB or experimental BLE
- Needs AssistiveTouch enabled on the iPhone; USB input requires a USB-C connection
- Integrates with Anan, a client-side agent (open source coming soon), whose system screen sharing needs iOS 27+; other MCP clients and ESP32 boards are welcome
- Includes an `anan-iphone-use` agent skill that guides flashing, connection setup and adaptation to other ESP32 boards
- Demos: drawing in Notes, checking Xiaohongshu followers, enabling Do Not Disturb with a timer
- Expressive-eyes avatar adapted from Trentct/m5stack-stopwatch-avatar

## Links

- [GitHub](https://github.com/ananhq/anan-iphone-use)
- [Original Tweet](https://x.com/hr98w/status/2110005513144721410)
