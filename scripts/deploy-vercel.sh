#!/usr/bin/env bash
set -euo pipefail

SCOPE="${VERCEL_SCOPE:-erikvongregory-gif}"
PROJECT="${VERCEL_PROJECT:-KapitalanlagenDeutschland}"

cd "$(dirname "$0")/.."

echo "→ Vercel Scope: $SCOPE"
echo "→ Projekt: $PROJECT"

npx vercel@latest link --scope "$SCOPE" --project "$PROJECT" --yes
npx vercel@latest --scope "$SCOPE" --prod --yes

echo "✓ Production-Deploy gestartet."
