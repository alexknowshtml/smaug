---
title: "onehumanbeing/esp32-iphone-agent (Handsy)"
type: tool
date_added: 2026-11-09
source: "https://github.com/onehumanbeing/esp32-iphone-agent"
tags: [ios, esp32, computer-use, hardware, agents]
via: "Twitter bookmark from @neuronxwhite"
---

Lets an AI model operate a real iPhone using a roughly $7 ESP32-S3 board plugged into the phone, with no Mac tether, developer account or jailbreak. The board mirrors the screen over AirPlay as the agent's eyes and acts as a USB HID mouse/keyboard (via AssistiveTouch) as its hands, while an iOS app calls any OpenAI-compatible vision model over cellular.

## Key Features

- Screen capture: board poses as an AirPlay target and relays frames back to the agent app
- Input: USB HID mouse and keyboard for taps, swipes and typing in any app
- Standalone: phone-only after first flash and signing (needs iOS 18+, Seeed XIAO ESP32S3 with 8MB PSRAM)
- Per the tweet: a small cursor wiggle before precise clicks corrects drift; progress shows in the Dynamic Island
- Later versions listen to AirPlay audio and support long tasks with step-by-step replay; MIT license, Swift, ~4.7k stars

## Links

- [GitHub](https://github.com/onehumanbeing/esp32-iphone-agent)
- [Original Tweet](https://x.com/neuronxwhite/status/2111101305729261624)
