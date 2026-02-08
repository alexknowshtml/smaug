# Smaug 🐉

Archive your Twitter/X bookmarks (and/or optionally, likes) to markdown. Automatically.

*Like a dragon hoarding treasure, Smaug collects the valuable things you bookmark and like.*

> **AI integration:** Smaug is configured for Z.ai (`zai`) via a single-provider workflow. See [Z.ai Integration](#zai-integration) for setup details.

## Contents

- [Quick Start](#quick-start-5-minutes)
- [Fork Workflow](#fork-workflow)
- [Getting Twitter Credentials](#getting-twitter-credentials)
- [What It Does](#what-it-does)
- [Running](#running)
- [Categories](#categories)
- [Automation](#automation)
- [Output](#output)
- [Configuration](#configuration)
- [Z.ai Integration](#zai-integration)
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
bun install

# 3. Run the setup wizard
bunx smaug setup

# 4. Run the full job (fetch + process with Z.ai)
bunx smaug run
```

The setup wizard will:
- Create required directories
- Guide you through getting Twitter credentials
- Create your config file

## Fork Workflow

If you are running a custom fork that intentionally differs from upstream, use the fork maintenance guide:

- [`docs/FORK_WORKFLOW.md`](./docs/FORK_WORKFLOW.md)

This includes:
- How to keep your fork's `main` branch synced with upstream
- How to keep your feature branch rebased and push safely with `--force-with-lease`
- Helper scripts in `scripts/sync-fork-main.sh` and `scripts/rebase-feature-branch.sh`

## Getting Twitter Credentials

Smaug uses the bird CLI which needs your Twitter session cookies.

If you don't want to use the wizard to make it easy, you can manually put your session info into the config.

1. Copy the example config:
   ```bash
   cp smaug.config.example.json smaug.config.json
   ```
2. Open Twitter/X in your browser
3. Open Developer Tools → Application → Cookies
4. Find and copy these values:
   - `auth_token`
   - `ct0`
5. Add them to your `smaug.config.json`:

```json
{
  "twitter": {
    "authToken": "your_auth_token_here",
    "ct0": "your_ct0_here"
  }
}
```

> **Note:** `smaug.config.json` is gitignored to prevent accidentally committing credentials. The example file is tracked instead.

## What Smaug Actually Does

1. **Fetches bookmarks** from Twitter/X using the bird CLI (can also fetch likes, or both)
2. **Expands t.co links** to reveal actual URLs
3. **Extracts content** from linked pages:
   - GitHub repos (via API: stars, description, README)
   - External articles (title, author, content)
   - X/Twitter long-form articles (full content via bird CLI)
   - Quote tweets and reply threads (full context)
4. **Invokes Z.ai** to analyze and categorize each tweet
5. **Saves to markdown** organized by date with rich context
6. **Files to knowledge library** - GitHub repos to `knowledge/tools/`, articles to `knowledge/articles/`

## Running Manually

```bash
# Full job (fetch + process with Z.ai)
bunx smaug run

# Fetch from bookmarks (default)
bunx smaug fetch 20

# Fetch ALL bookmarks (paginated - requires bird CLI from git)
bunx smaug fetch --all
bunx smaug fetch --all --max-pages 5  # Limit to 5 pages

# Fetch from likes instead
bunx smaug fetch --source likes

# Fetch from both bookmarks AND likes
bunx smaug fetch --source both

# Process already-fetched tweets
bunx smaug process

# Force re-fetch even if already archived
bunx smaug fetch --force

# Check what's pending
bun -e "const fs=require('fs'); console.log(JSON.parse(fs.readFileSync('./.state/pending-bookmarks.json','utf8')).count)"
```

### Fetching All Bookmarks

By default, Twitter's API returns ~50-70 bookmarks per request. To fetch more, use the `--all` flag which enables pagination:

```bash
bunx smaug fetch --all              # Fetch all (up to 10 pages)
bunx smaug fetch --all --max-pages 20  # Fetch up to 20 pages
```

**Note:** This requires bird CLI built from git (not the npm release). See [Troubleshooting](#troubleshooting) for installation instructions.

**Cost warning:** Processing large bookmark backlogs can consume significant model tokens. Each bookmark with content-heavy links (long articles, GitHub READMEs, etc.) adds to context. Process in batches to control costs:

```bash
bunx smaug run --limit 50 -t    # Process 50 at a time with token tracking
```

Use the `-t` flag to monitor usage. See [Token Usage Tracking](#token-usage-tracking) for cost estimates by model.

## Categories

Categories define how different bookmark types are handled. Smaug comes with sensible defaults, but you can customize them in `smaug.config.json`.

### Default Categories

| Category | Matches | Action | Destination |
|----------|---------|--------|-------------|
| **github** | github.com | file | `./knowledge/tools/` |
| **article** | medium.com, substack.com, dev.to, blogs | file | `./knowledge/articles/` |
| **x-article** | x.com/i/article/* | file | `./knowledge/articles/` |
| **tweet** | (fallback) | capture | bookmarks.md only |

🔜 _Note: Transcription is flagged but not yet automated. PRs welcome!_

### X/Twitter Long-Form Articles

X articles (`x.com/i/article/*`) are Twitter's native long-form content format. Smaug extracts the full article text using bird CLI:

1. **Direct extraction**: If the bookmarked tweet is the article author's original post, content is extracted directly
2. **Search fallback**: If you bookmark someone sharing/quoting an article, Smaug searches for the original author's tweet and extracts the full content from there
3. **Metadata fallback**: If search fails, basic metadata (title, description) is captured

Example X article bookmark:
```markdown
## @joaomdmoura - Lessons From 2 Billion Agentic Workflows
> [Full article content extracted]

- **Tweet:** https://x.com/joaomdmoura/status/123456789
- **Link:** https://x.com/i/article/987654321
- **Filed:** [lessons-from-2-billion-agentic-workflows.md](./knowledge/articles/lessons-from-2-billion-agentic-workflows.md)
- **What:** Deep dive into patterns from scaling CrewAI to billions of agent executions.
```

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

## Bookmark Folders

If you've organized your Twitter bookmarks into folders, Smaug can preserve that organization as tags. Configure folder IDs mapped to tag names:

```json
{
  "folders": {
    "1234567890": "ai-tools",
    "0987654321": "articles-to-read",
    "1122334455": "research"
  }
}
```

**How to find folder IDs:**
1. Open Twitter/X and go to your bookmarks
2. Click on a folder
3. The URL will be `https://x.com/i/bookmarks/1234567890` - the number is the folder ID

When folders are configured:
- Smaug fetches from each folder separately
- Each bookmark gets tagged with its folder name
- Tags appear in `bookmarks.md` entries and knowledge file frontmatter

**Note:** Twitter's API doesn't return folder membership when fetching all bookmarks at once, so Smaug must fetch each folder individually.

## Automation

Run Smaug automatically every 30 minutes:

### Option A: PM2 (recommended)

```bash
bun add -g pm2
pm2 start "bunx smaug run" --cron "*/30 * * * *" --name smaug
pm2 save
pm2 startup    # Start on boot
```

### Option B: Cron

```bash
crontab -e
# Add:
*/30 * * * * cd /path/to/smaug && bunx smaug run >> smaug.log 2>&1
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

Copy the example config and customize:

```bash
cp smaug.config.example.json smaug.config.json
```

Example `smaug.config.json`:

```json
{
  "source": "bookmarks",
  "includeMedia": false,
  "archiveFile": "./bookmarks.md",
  "pendingFile": "./.state/pending-bookmarks.json",
  "stateFile": "./.state/bookmarks-state.json",
  "timezone": "America/New_York",
  "twitter": {
    "authToken": "your_auth_token",
    "ct0": "your_ct0"
  },
  "autoInvokeZai": true,
  "zaiModel": "glm-4.7",
  "zaiTimeout": 900000,
  "zaiBin": "zai",
  "projectRoot": null,
  "webhookUrl": null,
  "webhookType": "discord"
}
```

| Option | Default | Description |
|--------|---------|-------------|
| `source` | `bookmarks` | What to fetch: `bookmarks` (default), `likes`, or `both` |
| `includeMedia` | `false` | **EXPERIMENTAL**: Include media attachments (photos, videos, GIFs) |
| `archiveFile` | `./bookmarks.md` | Main archive file |
| `pendingFile` | `./.state/pending-bookmarks.json` | Pending bookmark JSON before AI processing |
| `stateFile` | `./.state/bookmarks-state.json` | Fetch/process state tracking |
| `timezone` | `America/New_York` | For date formatting |
| `autoInvokeZai` | `true` | Auto-run Z.ai for analysis after fetch |
| `zaiModel` | `glm-4.7` | Z.ai model used for processing |
| `zaiTimeout` | `900000` | Max Z.ai processing time (15 min) |
| `zaiBin` | `zai` | Z.ai binary name/path |
| `projectRoot` | `null` | Working directory for Z.ai invocation |
| `webhookUrl` | `null` | Discord/Slack webhook for notifications |

Environment variables also work: `AUTH_TOKEN`, `CT0`, `SOURCE`, `INCLUDE_MEDIA`, `ARCHIVE_FILE`, `PENDING_FILE`, `STATE_FILE`, `TIMEZONE`, `AUTO_INVOKE_ZAI`, `ZAI_MODEL`, `ZAI_TIMEOUT`, `ZAI_BIN`, `PROJECT_ROOT`, etc.

### Experimental: Media Attachments

Media extraction (photos, videos, GIFs) is available but disabled by default. To enable:

```bash
# One-time with flag
bunx smaug fetch --media

# Or in config
{
  "includeMedia": true
}
```

When enabled, the `media[]` array is included in the pending JSON with:
- `type`: "photo", "video", or "animated_gif"
- `url`: Full-size media URL
- `previewUrl`: Thumbnail (smaller, faster)
- `width`, `height`: Dimensions
- `videoUrl`, `durationMs`: For videos only

⚠️ **Why experimental?**
1. **Requires bird with media support** - PR [#14](https://github.com/steipete/bird/pull/14) adds media extraction. Until merged, you'll need a fork with this PR or wait for an upstream release. Without it, `--media` is a no-op (empty array).
2. **Workflow still being refined** - Short screengrabs (< 30s) don't need transcripts, but longer videos might. We're still figuring out the best handling.

## Z.ai Integration

Smaug uses Z.ai (`zai`) for intelligent bookmark processing. It invokes the CLI with the processing playbook in `.claude/commands/process-bookmarks.md`.

Install and verify Z.ai:

```bash
which zai
zai --help
```

Tune behavior in `smaug.config.json`:

```json
{
  "autoInvokeZai": true,
  "zaiModel": "glm-4.7",
  "zaiTimeout": 900000,
  "zaiBin": "zai"
}
```

### Token Usage Tracking

Track your API costs with the `-t` flag:

```bash
bunx smaug run -t
# or
bunx smaug run --track-tokens
```

This displays a breakdown at the end of each run:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 TOKEN USAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Main (glm-4.7):
  Input:               85 tokens  <$0.01
  Output:           5,327 tokens  <$0.01
  Cache Read:     724,991 tokens  <$0.01
  Cache Write:     62,233 tokens  <$0.01

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 TOTAL COST: unavailable for this model
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
bunx smaug run
```

### Bird CLI 403 errors

Your Twitter cookies may have expired. Get fresh ones from your browser.

### Processing is slow

- Increase `--limit` only in small steps for large backlogs
- Use a faster/lower-cost Z.ai model via `zaiModel` if available in your environment
- Avoid `fetch --force` unless you explicitly want to re-process archived bookmarks

### Only ~50-70 bookmarks fetched

The npm release of bird CLI (v0.5.1) doesn't support pagination. To fetch all bookmarks, install bird from git:

```bash
# Clone and build bird from source
cd /tmp
git clone https://github.com/steipete/bird.git
cd bird
pnpm install    # or: bun add -g pnpm && pnpm install
pnpm run build:dist

# Link globally (may need sudo or --force)
npm link --force

# Verify
bird --version  # Should show a newer commit hash
bird bookmarks --help  # Should show --all flag
```

Then use `bunx smaug fetch --all` to fetch all bookmarks with pagination.

## Credits

- [bird CLI](https://github.com/steipete/bird) by Peter Steinberger
- Built with Z.ai

## License

MIT
