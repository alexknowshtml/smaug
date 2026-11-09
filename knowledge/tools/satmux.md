---
title: "satmux"
type: tool
date_added: 2026-11-09
source: "https://github.com/Th0rgal/satmux"
tags: [networking, inflight-wifi, tcp, python]
via: "Twitter bookmark from @thomasmc"
---

satmux is a zero-dependency Python 3 TCP multiplexer and 1-RTT HTTP/TLS relay that speeds up and stabilises geostationary (GEO) inflight Wi-Fi (Inmarsat GX, Viasat, Panasonic, SITA). It routes traffic over persistent non-443 BBR carriers to a cheap ground VM near the satellite downlink, bypassing cabin split-TCP proxies on :443 and DNS interception that cause resets and timeouts. Bookmarked as a practical agent-driven "life hack" for working on flights without Starlink.

## Key Features

- 12 pre-warmed persistent TCP carriers on :8444 with BBR and MSS 1280, bypassing the cabin :443 PEP
- 0-RTT stream open via local SOCKS5 (127.0.0.1:1080) and HTTP CONNECT (127.0.0.1:8080), preserving end-to-end TLS
- 1-RTT ground fetch (127.0.0.1:8081): ground VM does DNS, TLS 1.3 and redirects on fiber, zlib-compresses responses before the satellite hop
- Unix-socket routing for `gh` and git so already-running coding agents work without restart
- Reported results: 6-origin burst 19.13s (3/6 failed) to 5.35s (0/6 failed), about 3.6x faster
- Limits: physical GEO latency floor (~600 ms), per-seat bandwidth cap (~4-5 Mbps), does not bypass captive portals
- Setup: rent a $0.01-0.03/h VM near the downlink, run satmux there, connect the local client (an agent can do this)

## Links

- [GitHub](https://github.com/Th0rgal/satmux)
- [Original Tweet](https://x.com/thomasmc/status/2119102696280240176)
