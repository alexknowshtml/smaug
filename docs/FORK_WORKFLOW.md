# Fork Workflow

This repo includes a workflow for maintaining a long-lived fork while upstream continues to change.

## Assumptions

- Your fork remote is named `origin`
- The original project remote is named `upstream`
- Default branch is `main`
- Your custom work lives on feature branches (for example, `feature/zai-bun-hard-switch`)

## One-Time Setup

```bash
git remote -v
git remote add upstream https://github.com/alexknowshtml/smaug.git
git fetch --all --prune
```

If `upstream` already exists, skip the `git remote add` line.

## Regular Sync Routine

Run this before starting new work and before opening PRs:

```bash
./scripts/sync-fork-main.sh
```

What it does:

1. Ensures your working tree is clean
2. Fetches `origin` and `upstream`
3. Fast-forwards local `main` to `origin/main`
4. Fast-forwards local `main` to `upstream/main`
5. Pushes the updated `main` back to your fork (`origin/main`)

## Rebase Your Feature Branch

After syncing `main`, rebase your feature branch:

```bash
./scripts/rebase-feature-branch.sh feature/zai-bun-hard-switch
```

What it does:

1. Ensures your working tree is clean
2. Updates local `main` from `origin/main`
3. Checks out your feature branch
4. Rebases it onto `main`
5. Pushes with `--force-with-lease`

## Typical Daily Flow

```bash
./scripts/sync-fork-main.sh
./scripts/rebase-feature-branch.sh feature/zai-bun-hard-switch
bun test
git push origin feature/zai-bun-hard-switch
```

## Recovery Notes

- If rebase reports conflicts: resolve files, run `git add <file>`, then `git rebase --continue`.
- If you need to stop rebasing: `git rebase --abort`.
- If push is rejected after rebase, confirm you are pushing with `--force-with-lease` (the rebase script handles this).
