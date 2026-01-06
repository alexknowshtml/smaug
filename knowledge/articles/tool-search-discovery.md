---
title: "Tool Search Should Not Be Search But Discovery"
type: article
date_added: 2026-01-05
source: "https://nicolaygerold.com/posts/tool-search-should-not-be-just-search-but-discovery"
author: "Nicolay Gerold"
tags: [llm-agents, tool-management, context-window, ai-engineering]
via: "Twitter bookmark from @nicolaygerold"
---

Nicolay Gerold's technical analysis on why tool loading and selection in LLM agents is fundamentally a discovery problem rather than a search problem. The article explores the challenges of managing tools within limited context windows while maintaining clean, discoverable interfaces.

## Key Concepts

- **Deferred Tool Loading**: The practice of not loading all available tools upfront, but instead making them discoverable on-demand
- **Context Management**: Balancing the information density needed to effectively use tools against the limited context window constraints
- **Tool Discovery vs Search**: Why finding the right tool requires understanding intent and capability matching, not just keyword matching

## Significance

The article addresses a core challenge in building production LLM systems: as the number of available tools grows, both the context cost and the cognitive burden of tool selection increases. Pure search approaches (like listing all tools or full-text search) don't scale well.

## Key Context

- Published: December 16, 2025
- Topic: LLM agent architecture and tool management
- Perspective: Technical/engineering
- Author Expertise: Context management and LLM system design

## Links

- [Original Article](https://nicolaygerold.com/posts/tool-search-should-not-be-just-search-but-discovery)
- [Original Tweet](https://x.com/nicolaygerold/status/2000963680570368089)
