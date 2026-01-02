# Smaug 🐉

Archive your Twitter/X bookmarks to markdown. Automatically.

*Like a dragon hoarding treasure, Smaug collects the valuable things you bookmark.*

## Contents

- [Quick Start](#quick-start-5-minutes)
- [Getting Twitter Credentials](#getting-twitter-credentials)
- [What It Does](#what-it-does)
- [Running](#running)
- [Categories](#categories)
- [Automation](#automation)
- [Output](#output)
- [Configuration](#configuration)
- [Claude Code Integration](#claude-code-integration)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)

```
  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥
       _____ __  __   _   _   _  ____
      / ____|  \/  | / \ | | | |/ ___|
      \___ \| |\/| |/ _ \| | | | |  _
       ___) | |  | / ___ \ |_| | |_| |
      |____/|_|  |_/_/  \_\___/ \____|

   🐉 The dragon stirs... treasures to hoard!
```

## Quick Start (5 minutes)

```bash
# 1. Install bird CLI (Twitter API wrapper)
# See https://github.com/steipete/bird for installation

# 2. Clone and install Smaug
git clone https://github.com/alexknowshtml/smaug
cd smaug
npm install

# 3. Run the setup wizard
npx smaug setup

# 4. Run the full job (fetch + process with Claude)
npx smaug run
```

The setup wizard will:
- Create required directories
- Guide you through getting Twitter credentials
- Create your config file

## Manually Getting Twitter Credentials

Smaug uses the bird CLI which needs your Twitter session cookies. 

If you don't want to use the wizard to make it easy, you can manually put your seession info into the config. 

1. Open Twitter/X in your browser
2. Open Developer Tools → Application → Cookies
3. Find and copy these values:
   - `auth_token`
   - `ct0`
4. Add them to `smaug.config.json`:

```json
{
  "twitter": {
    "authToken": "your_auth_token_here",
    "ct0": "your_ct0_here"
  }
}
```

## What It Does

1. **Fetches bookmarks** from Twitter/X using the bird CLI
2. **Expands t.co links** to reveal actual URLs
3. **Extracts content** from linked pages (GitHub repos, articles, quote tweets)
4. **Invokes Claude Code** to analyze and categorize each bookmark
5. **Saves to markdown** organized by date with rich context
6. **Files to knowledge library** - GitHub repos to `knowledge/tools/`, articles to `knowledge/articles/`

## Running

```bash
# Full job (fetch + process with Claude)
npx smaug run

# Just fetch bookmarks (no Claude processing)
npx smaug fetch 20

# Process already-fetched bookmarks
npx smaug process

# Force re-process (ignore duplicates)
npx smaug process --force

# Check what's pending
cat .state/pending-bookmarks.json | jq '.count'
```

## Categories

Categories define how different bookmark types are handled. Smaug comes with sensible defaults, but you can customize them in `smaug.config.json`.

### Default Categories

| Category | Matches | Action | Destination |
|----------|---------|--------|-------------|
| **github** | github.com | file | `./knowledge/tools/` |
| **article** | medium.com, substack.com, dev.to, blog | file | `./knowledge/articles/` |
| **podcast** | podcasts.apple.com, spotify.com/episode, overcast.fm | transcribe | `./knowledge/podcasts/` |
| **youtube** | youtube.com, youtu.be | transcribe | `./knowledge/videos/` |
| **video** | vimeo.com, loom.com | transcribe | `./knowledge/videos/` |
| **tweet** | (fallback) | capture | bookmarks.md only |

### Actions

- **file**: Create a separate markdown file with rich metadata
- **capture**: Add to bookmarks.md only (no separate file)
- **transcribe**: Flag for future transcription *(auto-transcription coming soon! PRs welcome)*

### Custom Categories

Add your own categories in `smaug.config.json`:

```json
{
  "categories": {
    "research": {
      "match": ["arxiv.org", "papers.", "scholar.google"],
      "action": "file",
      "folder": "./knowledge/research",
      "template": "article",
      "description": "Academic papers"
    },
    "newsletter": {
      "match": ["buttondown.email", "beehiiv.com"],
      "action": "file",
      "folder": "./knowledge/newsletters",
      "template": "article",
      "description": "Newsletter issues"
    }
  }
}
```

Your custom categories merge with the defaults. To override a default, use the same key (e.g., `github`, `article`).

## Automation

Run Smaug automatically every 30 minutes:

### Option A: PM2 (recommended)

```bash
npm install -g pm2
pm2 start "npx smaug run" --cron "*/30 * * * *" --name smaug
pm2 save
pm2 startup    # Start on boot
```

### Option B: Cron

```bash
crontab -e
# Add:
*/30 * * * * cd /path/to/smaug && npx smaug run >> smaug.log 2>&1
```

### Option C: systemd

```bash
# Create /etc/systemd/system/smaug.service
# See docs/systemd-setup.md for details
```

## Output

### bookmarks.md

Your bookmarks organized by date:

```markdown
# Thursday, January 2, 2026

## @simonw - Gist Host Fork for Rendering GitHub Gists
> I forked the wonderful gistpreview.github.io to create gisthost.github.io

- **Tweet:** https://x.com/simonw/status/123456789
- **Link:** https://gisthost.github.io/
- **Filed:** [gisthost-gist-rendering.md](./knowledge/articles/gisthost-gist-rendering.md)
- **What:** Free GitHub Pages-hosted tool that renders HTML files from Gists.

---

## @tom_doerr - Whisper-Flow Real-time Transcription
> This is amazing - real-time transcription with Whisper

- **Tweet:** https://x.com/tom_doerr/status/987654321
- **Link:** https://github.com/dimastatz/whisper-flow
- **Filed:** [whisper-flow.md](./knowledge/tools/whisper-flow.md)
- **What:** Real-time speech-to-text using OpenAI Whisper with streaming support.
```

### knowledge/tools/*.md

GitHub repos get their own files:

```markdown
---
title: "whisper-flow"
type: tool
date_added: 2026-01-02
source: "https://github.com/dimastatz/whisper-flow"
tags: [ai, transcription, whisper, streaming]
via: "Twitter bookmark from @tom_doerr"
---

Real-time speech-to-text transcription using OpenAI Whisper...

## Key Features
- Streaming audio input
- Multiple language support
- Low latency output

## Links
- [GitHub](https://github.com/dimastatz/whisper-flow)
- [Original Tweet](https://x.com/tom_doerr/status/987654321)
```

## Configuration

Create `smaug.config.json`:

```json
{
  "archiveFile": "./bookmarks.md",
  "pendingFile": "./.state/pending-bookmarks.json",
  "stateFile": "./.state/bookmarks-state.json",
  "timezone": "America/New_York",
  "twitter": {
    "authToken": "your_auth_token",
    "ct0": "your_ct0"
  },
  "autoInvokeClaude": true,
  "claudeModel": "sonnet",
  "claudeTimeout": 900000,
  "allowedTools": "Read,Write,Edit,Glob,Grep,Bash,Task,TodoWrite",
  "webhookUrl": null,
  "webhookType": "discord"
}
```

| Option | Default | Description |
|--------|---------|-------------|
| `archiveFile` | `./bookmarks.md` | Main bookmark archive |
| `timezone` | `America/New_York` | For date formatting |
| `autoInvokeClaude` | `true` | Auto-run Claude Code for analysis |
| `claudeModel` | `sonnet` | Model to use (`sonnet`, `haiku`, or `opus`) |
| `claudeTimeout` | `900000` | Max processing time (15 min) |
| `webhookUrl` | `null` | Discord/Slack webhook for notifications |

Environment variables also work: `AUTH_TOKEN`, `CT0`, `ARCHIVE_FILE`, `TIMEZONE`, `CLAUDE_MODEL`, etc.

## Claude Code Integration

Smaug uses Claude Code for intelligent bookmark processing. The `.claude/commands/process-bookmarks.md` file contains instructions for:

- Generating descriptive titles (not generic "Article" or "Tweet")
- Filing GitHub repos to `knowledge/tools/`
- Filing articles to `knowledge/articles/`
- Handling quote tweets with full context
- Processing reply threads with parent context
- Parallel processing for 3+ bookmarks

You can also run processing manually:

```bash
claude
> Run /process-bookmarks
```

## Troubleshooting

### "No new bookmarks to process"

This means either:
1. No bookmarks were fetched (check bird CLI credentials)
2. All fetched bookmarks already exist in `bookmarks.md`

To start fresh:
```bash
rm -rf .state/ bookmarks.md knowledge/
mkdir -p .state knowledge/tools knowledge/articles
npx smaug run
```

### Bird CLI 403 errors

Your Twitter cookies may have expired. Get fresh ones from your browser.

### Processing is slow

- Try `haiku` model instead of `sonnet` in config for faster (but less thorough) processing
- Make sure you're not re-processing with `--force` (causes edits instead of appends)

## Credits

- [bird CLI](https://github.com/steipete/bird) by Peter Steinberger
- Built with Claude Code

## License

MIT
