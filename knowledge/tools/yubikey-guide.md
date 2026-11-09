---
title: "YubiKey-Guide (drduh) - GnuPG and SSH keys on a YubiKey"
type: tool
date_added: 2026-11-09
source: "https://github.com/drduh/YubiKey-Guide"
tags: [security, yubikey, gnupg, ssh, hardware-keys]
via: "Twitter bookmark from @dhkleung"
---

Community guide (13k+ stars) for storing GnuPG and SSH credentials on a YubiKey so private keys can never be copied off the device. Keys are generated on an offline machine, backed up to encrypted offline media, then transferred to the YubiKey for daily use; a lost or destroyed key is restored from the backup onto a new device. Bookmarked as @dhkleung's rebuttal ("Y'all using Yubikeys wrong") to @mikemaccana's complaint that YubiKey support is the flakiest part of password managers and browsers.

## Key Features

- Walks through buying and verifying a YubiKey with OpenPGP support (Security Key and Bio models are not supported)
- Recommends a hardened, ideally air-gapped or ephemeral (Debian Live, Tails) environment for key generation
- Certify key plus signature, encryption and authentication subkeys; PIN setup, touch policy, subkey renewal and rotation
- SSH via gpg-agent, agent forwarding, GitHub commit signing, multiple YubiKeys, email clients
- Optional hardening, troubleshooting and alternative solutions sections

## Links

- [GitHub](https://github.com/drduh/YubiKey-Guide)
- [Original Tweet](https://x.com/dhkleung/status/2114362755155456038)
