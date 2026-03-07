#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SMOKE_IMAGE="${GENSPARX_INSTALL_SMOKE_IMAGE:-${CLAWDBOT_INSTALL_SMOKE_IMAGE:-gensparx-install-smoke:local}}"
NONROOT_IMAGE="${GENSPARX_INSTALL_NONROOT_IMAGE:-${CLAWDBOT_INSTALL_NONROOT_IMAGE:-gensparx-install-nonroot:local}}"
INSTALL_URL="${GENSPARX_INSTALL_URL:-${CLAWDBOT_INSTALL_URL:-https://gensparx.bot/install.sh}}"
CLI_INSTALL_URL="${GENSPARX_INSTALL_CLI_URL:-${CLAWDBOT_INSTALL_CLI_URL:-https://gensparx.bot/install-cli.sh}}"
SKIP_NONROOT="${GENSPARX_INSTALL_SMOKE_SKIP_NONROOT:-${CLAWDBOT_INSTALL_SMOKE_SKIP_NONROOT:-0}}"
LATEST_DIR="$(mktemp -d)"
LATEST_FILE="${LATEST_DIR}/latest"

echo "==> Build smoke image (upgrade, root): $SMOKE_IMAGE"
docker build \
  -t "$SMOKE_IMAGE" \
  -f "$ROOT_DIR/scripts/docker/install-sh-smoke/Dockerfile" \
  "$ROOT_DIR/scripts/docker"

echo "==> Run installer smoke test (root): $INSTALL_URL"
docker run --rm -t \
  -v "${LATEST_DIR}:/out" \
  -e GENSPARX_INSTALL_URL="$INSTALL_URL" \
  -e GENSPARX_INSTALL_METHOD=npm \
  -e GENSPARX_INSTALL_LATEST_OUT="/out/latest" \
  -e GENSPARX_INSTALL_SMOKE_PREVIOUS="${GENSPARX_INSTALL_SMOKE_PREVIOUS:-${CLAWDBOT_INSTALL_SMOKE_PREVIOUS:-}}" \
  -e GENSPARX_INSTALL_SMOKE_SKIP_PREVIOUS="${GENSPARX_INSTALL_SMOKE_SKIP_PREVIOUS:-${CLAWDBOT_INSTALL_SMOKE_SKIP_PREVIOUS:-0}}" \
  -e GENSPARX_NO_ONBOARD=1 \
  -e DEBIAN_FRONTEND=noninteractive \
  "$SMOKE_IMAGE"

LATEST_VERSION=""
if [[ -f "$LATEST_FILE" ]]; then
  LATEST_VERSION="$(cat "$LATEST_FILE")"
fi

if [[ "$SKIP_NONROOT" == "1" ]]; then
  echo "==> Skip non-root installer smoke (GENSPARX_INSTALL_SMOKE_SKIP_NONROOT=1)"
else
  echo "==> Build non-root image: $NONROOT_IMAGE"
  docker build \
    -t "$NONROOT_IMAGE" \
    -f "$ROOT_DIR/scripts/docker/install-sh-nonroot/Dockerfile" \
    "$ROOT_DIR/scripts/docker"

  echo "==> Run installer non-root test: $INSTALL_URL"
  docker run --rm -t \
    -e GENSPARX_INSTALL_URL="$INSTALL_URL" \
    -e GENSPARX_INSTALL_METHOD=npm \
    -e GENSPARX_INSTALL_EXPECT_VERSION="$LATEST_VERSION" \
    -e GENSPARX_NO_ONBOARD=1 \
    -e DEBIAN_FRONTEND=noninteractive \
    "$NONROOT_IMAGE"
fi

if [[ "${GENSPARX_INSTALL_SMOKE_SKIP_CLI:-${CLAWDBOT_INSTALL_SMOKE_SKIP_CLI:-0}}" == "1" ]]; then
  echo "==> Skip CLI installer smoke (GENSPARX_INSTALL_SMOKE_SKIP_CLI=1)"
  exit 0
fi

if [[ "$SKIP_NONROOT" == "1" ]]; then
  echo "==> Skip CLI installer smoke (non-root image skipped)"
  exit 0
fi

echo "==> Run CLI installer non-root test (same image)"
docker run --rm -t \
  --entrypoint /bin/bash \
  -e GENSPARX_INSTALL_URL="$INSTALL_URL" \
  -e GENSPARX_INSTALL_CLI_URL="$CLI_INSTALL_URL" \
  -e GENSPARX_NO_ONBOARD=1 \
  -e DEBIAN_FRONTEND=noninteractive \
  "$NONROOT_IMAGE" -lc "curl -fsSL \"$CLI_INSTALL_URL\" | bash -s -- --set-npm-prefix --no-onboard"
