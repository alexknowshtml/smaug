---
title: "google/ax (Agent Executor)"
type: tool
date_added: 2026-11-09
source: "https://github.com/google/ax"
tags: [agents, orchestration, kubernetes, sandboxing, google]
via: "Twitter bookmark from @thisdudelikesAI"
---

AX (Agent Executor) is Google's open-source, Kubernetes-style declarative runtime for orchestrating autonomous agent workloads at scale. You declare a task, its workspace and a model in YAML; AX sandboxes it on top of Agent Substrate and runs it. The README warns it is in heavy development and major breaking changes are likely before a stable release.

## Key Features

- Three primitives: `Task` (sandboxed agent run with CPU/memory limits), `Workspace` (pre-wired Git repos, MCP servers and skills), `Model` (LLM config with credentials from a Kubernetes secret)
- CLI workflow: `ax apply -f task.yaml`, `ax describe task`, `ax ssh` to shell into a running agent (needs `debug: true`), `ax suspend` / `ax resume` to pause and continue
- Runs on Agent Substrate for sandboxed execution (gVisor worker pools); needs a Kubernetes cluster, Go, kubectl and Podman or Docker
- Designed for millions of tasks per cluster; Go, ~14.5k stars

## Links

- [GitHub](https://github.com/google/ax)
- [Original Tweet](https://x.com/thisdudelikesAI/status/2111028170808005070)
