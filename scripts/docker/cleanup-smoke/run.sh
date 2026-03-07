#!/usr/bin/env bash
set -euo pipefail

cd /repo

export GENSPARX_STATE_DIR="/tmp/gensparx-test"
export GENSPARX_CONFIG_PATH="${GENSPARX_STATE_DIR}/gensparx.json"

echo "==> Build"
pnpm build

echo "==> Seed state"
mkdir -p "${GENSPARX_STATE_DIR}/credentials"
mkdir -p "${GENSPARX_STATE_DIR}/agents/main/sessions"
echo '{}' >"${GENSPARX_CONFIG_PATH}"
echo 'creds' >"${GENSPARX_STATE_DIR}/credentials/marker.txt"
echo 'session' >"${GENSPARX_STATE_DIR}/agents/main/sessions/sessions.json"

echo "==> Reset (config+creds+sessions)"
pnpm gensparx reset --scope config+creds+sessions --yes --non-interactive

test ! -f "${GENSPARX_CONFIG_PATH}"
test ! -d "${GENSPARX_STATE_DIR}/credentials"
test ! -d "${GENSPARX_STATE_DIR}/agents/main/sessions"

echo "==> Recreate minimal config"
mkdir -p "${GENSPARX_STATE_DIR}/credentials"
echo '{}' >"${GENSPARX_CONFIG_PATH}"

echo "==> Uninstall (state only)"
pnpm gensparx uninstall --state --yes --non-interactive

test ! -d "${GENSPARX_STATE_DIR}"

echo "OK"
