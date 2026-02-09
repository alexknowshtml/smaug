# Workflow Standardization Status

Last verified: 2026-02-09

## Decision Log

- GitHub Copilot PR code review is paused.
- Greptile is the selected PR review tool going forward.
- `.github/copilot-instructions.md` remains in each repo for coding-agent context.
- Phase 1.4 explicit `test/verify-workflow` PRs have been completed across all target repos.
- `greptile.json` has been merged in all 9 target repos.
- Greptile activation verification succeeded in all 9 target repos using `@greptile` smoke PR triggers.
- GHAS purchase for private personal repos is deferred for now (exceptions accepted).
- Greptile merge-blocking policy decision is deferred for now (non-blocking mode retained).

## Phase 0 (Once) Status

| Item | Status | Notes |
|---|---|---|
| 0.1 Save prompts to dotfiles | Done | `trevoraspencer/dotfiles/playbooks/*` contains the three core playbook files. |
| 0.2 Create repo template | Done | `trevoraspencer/repo-template` exists and is marked `is_template=true`. |
| 0.3 Org-level review tooling | Done | Greptile app is installed and `@greptile` smoke verification succeeded across all 9 target repos. |

## Phase 1 (Per Repo) Status

Legend:

- `Done`: Completed and verified
- `Partial`: Completed except for known platform or plan limits
- `Pending`: Not yet executed

| Repo | 1.1 Core settings | 1.1 Security settings | 1.1 Review tool | 1.2 Prompt 1 rollout | 1.3 Prompt 3 audit | 1.4 explicit `test/verify-workflow` PR | Notes |
|---|---|---|---|---|---|---|---|
| `AMTA-Management/spiderweb-services` | Done | Done | Done | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile verified on smoke PR `#125` via `@greptile`. |
| `AMTA-Management/spiderweb` | Done | Done | Done | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile verified on smoke PR `#38` via `@greptile`. |
| `AMTA-Management/spiderweb-tools` | Done | Done | Done | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile verified on smoke PR `#11` via `@greptile`. |
| `AMTA-Management/spiderweb-infra` | Done | Done | Done | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile verified on smoke PR `#11` via `@greptile`. |
| `AMTA-Management/spiderweb-ecosystem` | Done | Done | Done | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile verified on smoke PR `#10` via `@greptile`. |
| `trevoraspencer/repo-template` | Done | Done | Done | Done | Done | Done | Template repo is active and standardized; Greptile verified on smoke PR `#9` via `@greptile`. |
| `trevoraspencer/smaug` | Done | Done | Done | Done | Done | Done | Public fork; code scanning default setup is configured; Greptile verified on smoke PR `#9` via `@greptile`. |
| `trevoraspencer/webweaver-bot` | Done | Partial | Done | Done | Done | Done | Secret scanning and code scanning remain unavailable without GHAS; Greptile verified on smoke PR `#21` via `@greptile`. |
| `trevoraspencer/dotfiles` | Done | Partial | Done | Done | Done | Done | Secret scanning and code scanning remain unavailable without GHAS; Greptile verified on smoke PR `#10` via `@greptile`. |

## Deferred Decisions

1. GHAS purchase for private personal repos is deferred; current security exceptions remain accepted.
2. Greptile merge-blocking policy is deferred; `Greptile Review` remains non-blocking for now.
