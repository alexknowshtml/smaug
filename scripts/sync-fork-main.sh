#!/usr/bin/env bash

set -euo pipefail

MAIN_BRANCH="${1:-main}"
ORIGIN_REMOTE="${2:-origin}"
UPSTREAM_REMOTE="${3:-upstream}"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes before syncing."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

cleanup() {
  if [[ "$(git rev-parse --abbrev-ref HEAD)" != "${CURRENT_BRANCH}" ]]; then
    git switch "${CURRENT_BRANCH}" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

echo "Fetching remotes..."
git fetch "${ORIGIN_REMOTE}" --prune
git fetch "${UPSTREAM_REMOTE}" --prune

echo "Switching to ${MAIN_BRANCH}..."
git switch "${MAIN_BRANCH}"

echo "Fast-forwarding from ${ORIGIN_REMOTE}/${MAIN_BRANCH}..."
git pull --ff-only "${ORIGIN_REMOTE}" "${MAIN_BRANCH}"

echo "Fast-forwarding from ${UPSTREAM_REMOTE}/${MAIN_BRANCH}..."
git merge --ff-only "${UPSTREAM_REMOTE}/${MAIN_BRANCH}"

echo "Pushing synced ${MAIN_BRANCH} to ${ORIGIN_REMOTE}..."
git push "${ORIGIN_REMOTE}" "${MAIN_BRANCH}"

echo "Done. ${MAIN_BRANCH} is synced with ${UPSTREAM_REMOTE}/${MAIN_BRANCH}."
