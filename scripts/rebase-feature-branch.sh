#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <feature-branch> [main-branch] [origin-remote]"
  exit 1
fi

FEATURE_BRANCH="$1"
MAIN_BRANCH="${2:-main}"
ORIGIN_REMOTE="${3:-origin}"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes before rebasing."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

cleanup() {
  if [[ "$(git rev-parse --abbrev-ref HEAD)" != "${CURRENT_BRANCH}" ]]; then
    git switch "${CURRENT_BRANCH}" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

echo "Fetching ${ORIGIN_REMOTE}..."
git fetch "${ORIGIN_REMOTE}" --prune

echo "Updating ${MAIN_BRANCH} from ${ORIGIN_REMOTE}/${MAIN_BRANCH}..."
git switch "${MAIN_BRANCH}"
git pull --ff-only "${ORIGIN_REMOTE}" "${MAIN_BRANCH}"

echo "Rebasing ${FEATURE_BRANCH} onto ${MAIN_BRANCH}..."
git switch "${FEATURE_BRANCH}"
git rebase "${MAIN_BRANCH}"

echo "Pushing ${FEATURE_BRANCH} with --force-with-lease..."
git push --force-with-lease "${ORIGIN_REMOTE}" "${FEATURE_BRANCH}"

echo "Done. ${FEATURE_BRANCH} is rebased onto ${MAIN_BRANCH}."
