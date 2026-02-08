# Copilot Instructions

## Repository Context
- Repository: trevoraspencer/smaug
- Read AGENTS.md for behavioral rules and non-negotiables.
- Use small, focused PRs with conventional commit titles.

## Setup and Validation
- Install: bun install --frozen-lockfile
- Lint: bun run lint (if script exists)
- Type-check: bun run type-check (if script exists)
- Test: bun run test

## PR Conventions
- PR title must follow conventional commits.
- CI + PR title checks are required before merge.
- Squash merge is enforced as the standard merge strategy.

## Do Not Modify
- Generated artifacts unless explicitly requested.
- Secrets or credential files.
- Lock files unrelated to the current dependency update.

## Scratch directory
Use .scratch/ for any temporary working files. It is gitignored.
Create it if it doesn't exist: mkdir -p .scratch
Do not reference .scratch/ in committed code.
