# Workflow Standardization Status

Last verified: 2026-02-08

## Decision Log

- GitHub Copilot PR code review is paused.
- Greptile is the selected PR review tool going forward.
- `.github/copilot-instructions.md` remains in each repo for coding-agent context.
- Phase 1.4 explicit `test/verify-workflow` PRs have been completed across all target repos.

## Phase 0 (Once) Status

| Item | Status | Notes |
|---|---|---|
| 0.1 Save prompts to dotfiles | Done | `trevoraspencer/dotfiles/playbooks/*` contains the three core playbook files. |
| 0.2 Create repo template | Done | `trevoraspencer/repo-template` exists and is marked `is_template=true`. |
| 0.3 Org-level review tooling | In progress | Copilot org review settings are deferred; Greptile setup is pending. |

## Phase 1 (Per Repo) Status

Legend:
- `Done`: Completed and verified
- `Partial`: Completed except for known platform or plan limits
- `Pending`: Not yet executed

| Repo | 1.1 Core settings | 1.1 Security settings | 1.1 Review tool | 1.2 Prompt 1 rollout | 1.3 Prompt 3 audit | 1.4 explicit `test/verify-workflow` PR | Notes |
|---|---|---|---|---|---|---|---|
| `AMTA-Management/spiderweb-services` | Done | Done | Pending | Done | Done | Done | Branch protection is implemented via classic branch-protection API (equivalent outcome to rulesets, no ruleset object). |
| `AMTA-Management/spiderweb` | Done | Done | Pending | Done | Done | Done | Branch protection is implemented via classic branch-protection API (equivalent outcome to rulesets, no ruleset object). |
| `AMTA-Management/spiderweb-tools` | Done | Done | Pending | Done | Done | Done | Branch protection is implemented via classic branch-protection API (equivalent outcome to rulesets, no ruleset object). |
| `AMTA-Management/spiderweb-infra` | Done | Done | Pending | Done | Done | Done | Branch protection is implemented via classic branch-protection API (equivalent outcome to rulesets, no ruleset object). |
| `AMTA-Management/spiderweb-ecosystem` | Done | Done | Pending | Done | Done | Done | Branch protection is implemented via classic branch-protection API (equivalent outcome to rulesets, no ruleset object). |
| `trevoraspencer/repo-template` | Done | Done | Pending | Done | Done | Done | Template repo is active and standardized. |
| `trevoraspencer/smaug` | Done | Done | Pending | Done | Done | Done | Public fork; code scanning default setup is configured. |
| `trevoraspencer/webweaver-bot` | Done | Partial | Pending | Done | Done | Done | Secret scanning and code scanning remain unavailable without GitHub Advanced Security. |
| `trevoraspencer/dotfiles` | Done | Partial | Pending | Done | Done | Done | Secret scanning and code scanning remain unavailable without GitHub Advanced Security. |

## Remaining Work

1. Configure Greptile for org and personal repos.
2. Decide whether to purchase GitHub Advanced Security for private personal repos, or accept those two security exceptions.
