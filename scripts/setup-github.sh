#!/usr/bin/env bash
set -euo pipefail

OWNER="${GITHUB_OWNER:-erikvongregory-gif}"
REPO="${GITHUB_REPO:-KapitalanlagenDeutschland}"
GH="${GH_BIN:-/tmp/gh_2.63.2_macOS_arm64/bin/gh}"

cd "$(dirname "$0")/.."

if ! $GH auth status >/dev/null 2>&1; then
  echo "→ Bitte bei GitHub anmelden (Browser öffnet sich)…"
  $GH auth login -h github.com -p https -w
fi

echo "→ Repository erstellen: $OWNER/$REPO"
$GH repo create "$OWNER/$REPO" --public --source=. --remote=origin --push

echo "→ Vercel mit Git verbinden…"
npx vercel@latest git connect --yes 2>/dev/null || npx vercel@latest git connect

echo "✓ Fertig: https://github.com/$OWNER/$REPO"
