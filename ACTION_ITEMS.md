# ACTION ITEMS — smaug

**Repo:** `trevoraspencer/smaug`
**Role:** Archive Twitter/X bookmarks to markdown with AI-powered analysis. Configured for Z.ai (zai) as the AI provider.
**Primary Language:** JavaScript (Bun)
**Applicable Themes:** 3 (Context Engineering & Smart Fork Detection), 12 (Knowledge Management), 3 Update (Self-Improving Error Tracking)

---

## P0 — High Impact, Do First

### 1. Implement Smart Fork Detection via Session RAG (Theme 3: Context Engineering)

**What:** Add a system that auto-loads session transcripts into a vector database, enabling a `/detect-fork` command that finds relevant past sessions when starting new work. This prevents the "I explained this before" problem.

**Why:** Insight from @PerceptualPeak: "Auto-load every session transcript into vector DB via RAG. `/detect-fork` command asks what you're trying to do. Sub-agent queries RAG for most relevant past session. Returns top 5 sessions with relevance scores."

**Architecture:**
```
Session Transcripts → Embeddings → Vector DB (local)
                                        ↓
User: "/detect-fork I want to add category X"
                                        ↓
RAG Query → Top 5 relevant past sessions with scores
                                        ↓
User picks a session → Context loaded automatically
```

**Files to create/modify:**
- Create `src/session-store/` directory:
  - `src/session-store/index.ts` — Main module for session storage and retrieval
  - `src/session-store/embeddings.ts` — Generate embeddings from session content (use Z.ai or local model)
  - `src/session-store/vector-db.ts` — Local vector DB operations (use SQLite + vector extension, or a lightweight lib like `vectra`)
  - `src/session-store/types.ts` — TypeScript types for sessions, embeddings, search results

- Create `src/commands/detect-fork.ts`:
  ```typescript
  // Detect relevant past sessions for a given intent
  // Usage: bunx smaug detect-fork "I want to add a new bookmark category"
  // Output: Top 5 sessions with relevance scores and summaries
  
  interface ForkResult {
    sessionId: string;
    date: string;
    summary: string;
    relevanceScore: number;
    keyTopics: string[];
    resumeCommand: string; // Command to resume from this point
  }
  ```

- Modify `src/index.ts` — Register `detect-fork` as a new command
- Create `data/sessions/` directory — Where session transcripts are stored (gitignored)
- Modify `.gitignore` — Add `data/sessions/` and vector DB files

**Dependencies to add:**
- A lightweight vector search library compatible with Bun (evaluate `vectra`, `hnswlib-node`, or SQLite with `sqlite-vss`)
- Embedding generation: use Z.ai API or a local embedding model

**Acceptance criteria:**
- [ ] Sessions are automatically captured and stored after each `smaug run`
- [ ] `bunx smaug detect-fork "query"` returns top 5 relevant past sessions
- [ ] Each result includes: date, summary, relevance score, resume command
- [ ] Vector DB is local-only (no cloud dependency)
- [ ] Session data is gitignored (contains personal bookmark content)

---

### 2. Build Now/Next/Later Backlog System (Theme 12: Knowledge Management)

**What:** Add a structured triage system to Smaug that automatically categorizes bookmarks into Now (act this week), Next (act this month), and Later (reference) buckets, replacing the current flat bookmark dump.

**Why:** Insight from Theme 12: "Structured retrieval + actionability beats capture." Also the "bookmark triage ritual" from Theme 8: set weekly 45-minute triage block. Smaug already captures bookmarks — now make them actionable.

**Files to create/modify:**
- Create `src/triage/` directory:
  - `src/triage/index.ts` — Triage engine that classifies bookmarks
  - `src/triage/classifier.ts` — AI-powered classification into Now/Next/Later using Z.ai
  - `src/triage/types.ts`:
    ```typescript
    type TriageBucket = 'now' | 'next' | 'later' | 'archive';
    
    interface TriagedBookmark {
      id: string;
      url: string;
      content: string;
      bucket: TriageBucket;
      reason: string;           // Why it was classified this way
      actionItem?: string;      // Specific action to take (for 'now' and 'next')
      relatedRepos?: string[];  // Which of your repos this applies to
      expiresAt?: string;       // When this becomes stale
    }
    ```
  - `src/triage/prompts.ts` — Prompts for the classification AI:
    ```typescript
    const TRIAGE_PROMPT = `Classify this bookmark for a software engineer who:
    - Runs the Spiderweb agent orchestration platform
    - Is transitioning from coder to orchestrator/operator
    - Values: shipping speed, security, agent autonomy, economic outcomes
    
    Classify as:
    - NOW: Directly applicable to current active projects this week
    - NEXT: Valuable but not urgent (this month)
    - LATER: Reference material, might be useful someday
    - ARCHIVE: Already outdated or not relevant
    
    For NOW and NEXT items, specify the exact action and which repo it applies to.`;
    ```

- Modify `src/index.ts` — Add `triage` command
- Create `knowledge/triage/` directory structure:
  ```
  knowledge/triage/
    now.md        # Actionable this week
    next.md       # Actionable this month
    later.md      # Reference/someday
    archive.md    # No longer relevant
  ```

**Acceptance criteria:**
- [ ] `bunx smaug triage` runs classification on all unclassified bookmarks
- [ ] Output generates/updates now.md, next.md, later.md, archive.md
- [ ] Each entry in now.md and next.md has a specific action item and target repo
- [ ] Re-running triage doesn't duplicate entries (idempotent)
- [ ] Classification uses Z.ai for intelligence

---

### 3. Self-Improving Error Tracking Scratch Pad (Theme 3 Update: Self-Improving Agents)

**What:** Add a mechanism where Smaug tracks its own mistakes and learns from corrections, improving classification and analysis quality over time.

**Why:** Insight from @iruletheworldmo (Feb 6): "Create a scratch pad file... tell agent: 'build a file where you track your mistakes and what I like.' By session 5, it's a different tool."

**Files to create/modify:**
- Create `data/learning/` directory (gitignored for personal data, but templates committed):
  - Create `data/learning/.gitkeep`
- Create `src/learning/` directory:
  - `src/learning/tracker.ts`:
    ```typescript
    interface LearningEntry {
      date: string;
      sessionType: 'run' | 'triage' | 'detect-fork';
      whatHappened: string;
      whatWentWrong?: string;
      correction?: string;
      patternLearned?: string;
    }
    
    // Append to data/learning/sessions.jsonl after each run
    // Read accumulated patterns before each run to improve prompts
    ```
  - `src/learning/prompt-enhancer.ts`:
    ```typescript
    // Before sending prompts to Z.ai, inject learned patterns:
    // 1. Read data/learning/sessions.jsonl
    // 2. Extract patterns and anti-patterns
    // 3. Append to system prompt: "Based on past sessions, avoid: X, prefer: Y"
    ```

- Modify processing pipeline (`src/` — wherever prompts are constructed) to call prompt-enhancer before AI calls

**Acceptance criteria:**
- [ ] After each `smaug run`, a learning entry is logged
- [ ] Accumulated learnings are injected into subsequent prompts
- [ ] User can manually add corrections: `bunx smaug learn "category X should be classified as Y"`
- [ ] Learning data stays local (gitignored)

---

## P1 — Medium Impact, Do Next

### 4. NotebookLLM-Style Expert AI Workflow (Theme 12: Knowledge Management)

**What:** Add a workflow that converts accumulated bookmark knowledge into a structured expert source, similar to the NotebookLLM pattern.

**Why:** Insight from @hooeem (Feb 3): "Find experts on YouTube → Put into NotebookLLM → Create expert source → Export as markdown → Create Claude project → You have an expert AI in any niche."

**Applied to Smaug:** Your bookmarks already contain curated expert knowledge. Turn the `knowledge/` directory into a structured expert source that can be loaded into any AI project.

**Files to create/modify:**
- Create `src/commands/export-expert.ts`:
  ```typescript
  // Export accumulated bookmark knowledge as a structured expert guide
  // Output: A single markdown file optimized for AI consumption
  // Sections: Key patterns, Tools index, Decision frameworks, Anti-patterns
  
  // Usage: bunx smaug export-expert --topic "agent orchestration"
  // Output: knowledge/exports/agent-orchestration-guide.md
  ```
- Create `knowledge/exports/` directory for generated expert guides

**Acceptance criteria:**
- [ ] `bunx smaug export-expert --topic X` generates a focused guide from relevant bookmarks
- [ ] Guide is formatted for AI consumption (structured, concise, actionable)
- [ ] Can filter by theme, date range, or source

---

### 5. Cross-File Pattern Discovery (Theme 12: Knowledge Management)

**What:** Add analysis that finds patterns and connections across multiple bookmark files — themes that appear repeatedly, tools that keep getting bookmarked, topics that are gaining momentum.

**Why:** Insight from Theme 12: The unified insights file (BOOKMARKS_INSIGHTS_FINAL.md) was manually created by merging multiple sources. Automate this pattern discovery.

**Files to create/modify:**
- Create `src/analysis/pattern-discovery.ts`:
  ```typescript
  // Analyze all bookmark files for:
  // 1. Recurring themes (topics mentioned 3+ times)
  // 2. Momentum signals (topics increasing in frequency)
  // 3. Tool clusters (tools that appear together)
  // 4. Action gaps (topics bookmarked but never acted on)
  // 5. Source authority (which Twitter handles provide most actionable content)
  
  interface PatternReport {
    recurringThemes: Theme[];
    momentumSignals: MomentumItem[];
    toolClusters: ToolCluster[];
    actionGaps: ActionGap[];
    topSources: Source[];
  }
  ```
- Add to `src/index.ts` as `bunx smaug patterns` command

**Acceptance criteria:**
- [ ] `bunx smaug patterns` analyzes all files in `knowledge/` and `bookmarks.md`
- [ ] Output identifies themes with 3+ mentions, increasing-frequency topics, and unacted items
- [ ] Report is saved to `knowledge/patterns/latest.md`

---

### 6. Automation: Scheduled Triage Ritual (Theme 8: Execution Discipline)

**What:** Add support for automated scheduled runs that perform the bookmark triage ritual on a weekly basis.

**Why:** Insight from execution discipline items: "Set weekly recurring 45-minute bookmark triage block." Smaug should support this natively.

**Files to create/modify:**
- Create `scripts/weekly-triage.sh`:
  ```bash
  #!/usr/bin/env bash
  set -euo pipefail
  cd "$(dirname "$0")/.."
  
  echo "=== Weekly Bookmark Triage — $(date) ==="
  
  # 1. Fetch new bookmarks
  bunx smaug run
  
  # 2. Run triage classification
  bunx smaug triage
  
  # 3. Run pattern discovery
  bunx smaug patterns
  
  # 4. Generate summary
  echo "Triage complete. Review:"
  echo "  - knowledge/triage/now.md (act this week)"
  echo "  - knowledge/triage/next.md (act this month)"
  echo "  - knowledge/patterns/latest.md (trends)"
  ```
- Create `docs/automation.md` — Instructions for setting up as a cron job or launchd plist

**Acceptance criteria:**
- [ ] `scripts/weekly-triage.sh` runs the full pipeline
- [ ] Can be triggered via cron, launchd, or manually
- [ ] Output is self-contained and reviewable

---

## P2 — Lower Priority, Do Later

### 7. Agent-Readable Documentation Update (Theme 5: Developer Tooling)

**What:** Update AGENTS.md to follow GitHub's 6 Core Areas standard (Commands, Testing, Project Structure, Code Style, Git Workflow, Boundaries).

**Why:** The current AGENTS.md is minimal. An AI agent working in this repo needs to know how to run, test, and build Smaug.

**Files to modify:**
- `AGENTS.md` — Expand with:
  ```markdown
  ## Commands
  - Install: `bun install`
  - Run full job: `bunx smaug run`
  - Setup wizard: `bunx smaug setup`
  - Run tests: `bun test`
  - Lint: `bun run lint`
  
  ## Testing
  - Tests live in `test/`
  - Use Bun's built-in test runner
  - Mock Twitter API responses for deterministic tests
  
  ## Project Structure
  - `src/` — Source code
  - `knowledge/` — Processed bookmark knowledge
  - `scripts/` — Automation scripts
  - `data/` — Local data (gitignored)
  - `examples/` — Example configs and outputs
  
  ## Code Style
  - TypeScript with Bun
  - Biome for formatting and linting
  
  ## Boundaries
  - Never commit Twitter session cookies or API keys
  - Never commit personal bookmark content to public branches
  - Z.ai is the configured AI provider — don't switch without explicit instruction
  ```

**Acceptance criteria:**
- [ ] AGENTS.md covers all 6 GitHub core areas
- [ ] Commands are accurate and tested

---

### 8. Fork Workflow Documentation Improvement (Theme 5: Repo Hygiene)

**What:** The existing `docs/FORK_WORKFLOW.md` and sync scripts are a good foundation. Add smart fork detection integration so the fork maintenance workflow is aware of upstream changes that affect your customizations.

**Why:** This repo is a fork with intentional divergence. The smart fork detection (item 1) should also help track when upstream changes conflict with your custom features.

**Files to modify:**
- `docs/FORK_WORKFLOW.md` — Add section on detecting upstream changes that conflict with local customizations
- `scripts/sync-fork-main.sh` — Add pre-sync check that flags files you've modified that also changed upstream

**Acceptance criteria:**
- [ ] Fork sync warns about conflicts before they happen
- [ ] Modified files are tracked so you know which upstream changes to review carefully
