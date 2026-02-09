# Workflow Standardization Status

Last verified: 2026-02-09

## Decision Log

- GitHub Copilot PR code review is paused.
- Greptile is the selected PR review tool going forward.
- `.github/copilot-instructions.md` remains in each repo for coding-agent context.
- Phase 1.4 explicit `test/verify-workflow` PRs have been completed across all target repos.
- `greptile.json` has been merged in all 9 target repos.
- Manual `@greptileai` smoke trigger comments were posted on all Greptile rollout PRs; no Greptile bot review/check response was detected yet.

## Phase 0 (Once) Status

| Item | Status | Notes |
|---|---|---|
| 0.1 Save prompts to dotfiles | Done | `trevoraspencer/dotfiles/playbooks/*` contains the three core playbook files. |
| 0.2 Create repo template | Done | `trevoraspencer/repo-template` exists and is marked `is_template=true`. |
| 0.3 Org-level review tooling | Partial | Greptile app is installed org-wide and repo config is merged; runtime review/check response is still unverified. |

## Phase 1 (Per Repo) Status

Legend:
- `Done`: Completed and verified
- `Partial`: Completed except for known platform or plan limits
- `Pending`: Not yet executed

| Repo | 1.1 Core settings | 1.1 Security settings | 1.1 Review tool | 1.2 Prompt 1 rollout | 1.3 Prompt 3 audit | 1.4 explicit `test/verify-workflow` PR | Notes |
|---|---|---|---|---|---|---|---|
| `AMTA-Management/spiderweb-services` | Done | Done | Partial | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile config merged in `#123`, no bot response observed. |
| `AMTA-Management/spiderweb` | Done | Done | Partial | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile config merged in `#36`, no bot response observed. |
| `AMTA-Management/spiderweb-tools` | Done | Done | Partial | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile config merged in `#9`, no bot response observed. |
| `AMTA-Management/spiderweb-infra` | Done | Done | Partial | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile config merged in `#9`, no bot response observed. |
| `AMTA-Management/spiderweb-ecosystem` | Done | Done | Partial | Done | Done | Done | Branch protection is implemented via classic branch-protection API; Greptile config merged in `#8`, no bot response observed. |
| `trevoraspencer/repo-template` | Done | Done | Partial | Done | Done | Done | Template repo is active and standardized; Greptile config merged in `#7`, no bot response observed. |
| `trevoraspencer/smaug` | Done | Done | Partial | Done | Done | Done | Public fork; code scanning default setup is configured; Greptile config merged in `#7`, no bot response observed. |
| `trevoraspencer/webweaver-bot` | Done | Partial | Partial | Done | Done | Done | Secret scanning and code scanning remain unavailable without GHAS; Greptile config merged in `#19`, no bot response observed. |
| `trevoraspencer/dotfiles` | Done | Partial | Partial | Done | Done | Done | Secret scanning and code scanning remain unavailable without GHAS; Greptile config merged in `#8`, no bot response observed. |

## Remaining Work

1. Complete Greptile activation verification (personal-account installation visibility, repository enablement confirmation, and first observed bot review/check on a PR).
2. Decide whether to purchase GitHub Advanced Security for private personal repos, or accept the two security exceptions.
3. After Greptile is stable, decide whether to make its status check merge-blocking.
