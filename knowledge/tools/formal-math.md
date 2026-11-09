---
title: "anthropics/formal-math"
type: tool
date_added: 2026-11-09
source: "https://github.com/anthropics/formal-math"
tags: [lean, formal-verification, mathematics, anthropic]
via: "Twitter bookmark from @__alpoge__"
---

Anthropic's repository of machine-checked Lean 4 formalizations, each a self-contained Lake project following the Palomar submission template (Challenge.lean / Solution.lean / comparator.json). The bookmarked `eth/` project formalizes a result, found by an internal Claude research model (14M output tokens, no human input), that one deterministic Turing machine counts satisfying assignments of k-CNF formulas in time that refutes the Exponential Time Hypothesis.

## Key Features

- `zeta23/`: more than two thirds of Riemann zeta zeros are simple and on the critical line (Alpoge-Furman)
- `3sum-apsp/`: truly subcubic-style bounds for 3SUM, (min,+)-product and APSP on a word RAM (Alman-Vassilevska Williams)
- `eth/`: Claude-authored refutation of the Exponential Time Hypothesis, with paper PDF
- CI runs `lake build` with no `sorry`, plus the Palomar comparator check (leanprover/comparator, nanoda kernel, landrun sandbox)
- Apache-2.0, Lean 4 / Mathlib pinned per project

## Links

- [GitHub](https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth)
- [Original Tweet](https://x.com/__alpoge__/status/2114930095009968506)
