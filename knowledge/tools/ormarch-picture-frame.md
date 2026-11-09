---
title: "ormarch-picture-frame"
type: tool
date_added: 2026-11-09
source: "https://github.com/pangoleen/ormarch-picture-frame"
tags: [omarchy, arch-linux-arm, embedded, hyprland, hardware]
via: "Twitter bookmark from @redp314"
---

Shell-based repo that recreates a working SD-card installation of Omarchy (Arch Linux ARM armv7h with Hyprland on the Mali-400 GPU) on a PF1007L / Allwinner A33 10.1-inch digital photo frame, leaving the original eMMC untouched. Experimental and hardware-specific (Humblestead HM-PF1007-BK / EFERCRO PF1007L, 1 GB RAM, 800x1280 DSI panel, Silead touch, AIC8800DC Wi-Fi/Bluetooth). 26 stars.

## Key Features

- Boots a custom Arch Linux ARM image from microSD; does not support installing to eMMC
- Hyprland plus pinned Omarchy `quattro` source, rotated display, calibrated touch and touch keyboard
- Wi-Fi, PipeWire audio via the built-in speaker, Bluetooth LE (mouse and keyboard paired; classic Bluetooth unverified)
- Automatic brightness from the light sensor, photo slideshow (`pf-slideshow`), kiosk web view mode (`pf-webview`), YouTube playback via mpv
- Local voice typing (Moonshine tiny via sherpa-onnx) with audio streamed from a Mac over the USB link, since the frame has no microphone
- Reinstall path: build the image on macOS with `image/build.sh`, write it with a guarded SD writer, then run `port/frame/bootstrap.sh` on the frame
- Limits: 1 GB RAM (one Firefox page uses ~300-470 MB); no Chromium, Electron or Neovim for 32-bit ARM; Claude Code has no official 32-bit ARM build

## Links

- [GitHub](https://github.com/pangoleen/ormarch-picture-frame)
- [Original Tweet](https://x.com/redp314/status/2109995906028179952)
