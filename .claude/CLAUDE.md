# Smaug — Twitter/X Bookmark Archiver

> Forked from [alexknowshtml/smaug](https://github.com/alexknowshtml/smaug). Customized for CAPTAIN.

## What This Tool Does

Archives Twitter/X bookmarks to categorized markdown using Bird CLI + Claude API.
Output feeds into the-library knowledge pipeline.

## CAPTAIN Ecosystem Context

- **Team:** The Forge (business tooling)
- **Project:** The Archives — Knowledge Library
- **Config key:** `smaug` in `~/.claude/captain.config.json`
- **Category:** tool (forked third-party)

## Usage

1. Install Bird CLI (requires Twitter/X session cookies)
2. Configure `smaug.config.json` with API credentials
3. Run: `npx smaug run --limit 50 -t` (batch processing with token tracking)
4. Output: `output/bookmarks.md` — categorized markdown

## Cross-Repo Rules

- **Reference but not update.** When working in this repo, you can READ from other CAPTAIN repos. Never WRITE to another repo.
- **Branch strategy:** `main` stays synced with upstream via rebase. All CAPTAIN customizations go on the `captain` branch.

## Upstream Tracking

- **Upstream:** https://github.com/alexknowshtml/smaug.git
- **Sync:** `git fetch upstream && git checkout main && git rebase upstream/main && git checkout captain && git rebase main`

## Knowledge Pipeline Integration

Smaug output (markdown) can feed into the-library repo:
- Path: `~/Projects/the-library` (config key: `library`)
- Manual transfer for now — automated pipeline is future work
