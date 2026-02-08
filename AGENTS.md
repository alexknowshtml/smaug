# AGENTS.md

## Purpose
This repository is trevoraspencer/smaug.
Changes must stay within the scope of this repository and preserve a clean, linear history on main.

## Non-Negotiables
1. Never add AI attribution/co-authored-by lines in commits, PRs, or source files.
2. Never commit secrets, credentials, tokens, or private keys.
3. Keep changes small, reviewable, and scoped to one concern.

## Branch and PR Conventions
- Use feature branches: <type>/<short-description>.
- PR titles must follow conventional commits: <type>(<scope>): <description>.
- Squash merge is the standard merge method.

## Quality Gates
- CI job check must pass before merging.
- PR title validation job validate must pass before merging.
- Any repo-specific tests/lint/type checks must pass before requesting review.

## Scratch directory
Use .scratch/ for any temporary files, plans, or analysis output.
This directory is gitignored and must never be committed.
Create it if it doesn't exist: mkdir -p .scratch
Never reference .scratch/ files in committed code or documentation.

## Multi-Agent Safety
- Only one AI agent should work in a given clone/worktree at a time.
- For parallelization, use separate clones or git worktrees.
