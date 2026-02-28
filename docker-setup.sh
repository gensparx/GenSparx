#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_FILE="$ROOT_DIR/docker-compose.yml"
EXTRA_COMPOSE_FILE="$ROOT_DIR/docker-compose.extra.yml"

# Prefer GenSparx envs; fall back to legacy OpenClaw names for compatibility.
IMAGE_NAME="${GENSPARX_IMAGE:-${OPENCLAW_IMAGE:-gensparx:local}}"
EXTRA_MOUNTS="${GENSPARX_EXTRA_MOUNTS:-${OPENCLAW_EXTRA_MOUNTS:-}}"
HOME_VOLUME_NAME="${GENSPARX_HOME_VOLUME:-${OPENCLAW_HOME_VOLUME:-}}"
CONFIG_DIR="${GENSPARX_CONFIG_DIR:-${OPENCLAW_CONFIG_DIR:-$HOME/.gensparx}}"
WORKSPACE_DIR="${GENSPARX_WORKSPACE_DIR:-${OPENCLAW_WORKSPACE_DIR:-$HOME/.gensparx/workspace}}"
GATEWAY_PORT="${GENSPARX_GATEWAY_PORT:-${OPENCLAW_GATEWAY_PORT:-18789}}"
BRIDGE_PORT="${GENSPARX_BRIDGE_PORT:-${OPENCLAW_BRIDGE_PORT:-18790}}"
GATEWAY_BIND="${GENSPARX_GATEWAY_BIND:-${OPENCLAW_GATEWAY_BIND:-lan}}"
DOCKER_APT="${GENSPARX_DOCKER_APT_PACKAGES:-${OPENCLAW_DOCKER_APT_PACKAGES:-}}"

docker() {
  if [[ -n "${DOCKER_STUB_LOG:-}" ]]; then
    if [[ "${1:-}" == "compose" && "${2:-}" == "version" ]]; then
      return 0
    fi
    if [[ "${1:-}" == "build" ]]; then
      echo "build $*" >>"${DOCKER_STUB_LOG}"
      return 0
    fi
    if [[ "${1:-}" == "compose" ]]; then
      echo "compose $*" >>"${DOCKER_STUB_LOG}"
      return 0
    fi
    echo "unknown $*" >>"${DOCKER_STUB_LOG}"
    return 0
  fi
  command docker "$@"
}

# If not stubbing, ensure docker is present.
if [[ -z "${DOCKER_STUB_LOG:-}" ]]; then
  if ! command -v docker >/dev/null 2>&1; then
    echo "Missing dependency: docker" >&2
    exit 1
  fi
  if ! command docker compose version >/dev/null 2>&1; then
    echo "Docker Compose not available (try: docker compose version)" >&2
    exit 1
  fi
fi

mkdir -p "$CONFIG_DIR"
mkdir -p "$WORKSPACE_DIR"

export GENSPARX_CONFIG_DIR="$CONFIG_DIR"
export OPENCLAW_CONFIG_DIR="$CONFIG_DIR"
export GENSPARX_WORKSPACE_DIR="$WORKSPACE_DIR"
export OPENCLAW_WORKSPACE_DIR="$WORKSPACE_DIR"
export GENSPARX_GATEWAY_PORT="$GATEWAY_PORT"
export OPENCLAW_GATEWAY_PORT="$GATEWAY_PORT"
export GENSPARX_BRIDGE_PORT="$BRIDGE_PORT"
export OPENCLAW_BRIDGE_PORT="$BRIDGE_PORT"
export GENSPARX_GATEWAY_BIND="$GATEWAY_BIND"
export OPENCLAW_GATEWAY_BIND="$GATEWAY_BIND"
export GENSPARX_IMAGE="$IMAGE_NAME"
export OPENCLAW_IMAGE="$IMAGE_NAME"
export GENSPARX_DOCKER_APT_PACKAGES="$DOCKER_APT"
export OPENCLAW_DOCKER_APT_PACKAGES="$DOCKER_APT"
export GENSPARX_EXTRA_MOUNTS="$EXTRA_MOUNTS"
export OPENCLAW_EXTRA_MOUNTS="$EXTRA_MOUNTS"
export GENSPARX_HOME_VOLUME="$HOME_VOLUME_NAME"
export OPENCLAW_HOME_VOLUME="$HOME_VOLUME_NAME"

if [[ -z "${GENSPARX_GATEWAY_TOKEN:-${OPENCLAW_GATEWAY_TOKEN:-}}" ]]; then
  if command -v openssl >/dev/null 2>&1; then
    GENSPARX_GATEWAY_TOKEN="$(openssl rand -hex 32)"
  else
    GENSPARX_GATEWAY_TOKEN="$(python3 - <<'PY'
import secrets
print(secrets.token_hex(32))
PY
)"
  fi
fi
export GENSPARX_GATEWAY_TOKEN
export OPENCLAW_GATEWAY_TOKEN="${OPENCLAW_GATEWAY_TOKEN:-$GENSPARX_GATEWAY_TOKEN}"

COMPOSE_FILES=("$COMPOSE_FILE")
COMPOSE_ARGS=()

write_extra_compose() {
  local home_volume="$1"
  shift
  local -a mounts=("$@")
  local mount

  cat >"$EXTRA_COMPOSE_FILE" <<'YAML'
services:
  openclaw-gateway:
    volumes:
YAML

  if [[ -n "$home_volume" ]]; then
    printf '      - %s:/home/node\n' "$home_volume" >>"$EXTRA_COMPOSE_FILE"
    printf '      - %s:/home/node/.openclaw\n' "$CONFIG_DIR" >>"$EXTRA_COMPOSE_FILE"
    printf '      - %s:/home/node/.openclaw/workspace\n' "$WORKSPACE_DIR" >>"$EXTRA_COMPOSE_FILE"
  fi

  for mount in "${mounts[@]}"; do
    printf '      - %s\n' "$mount" >>"$EXTRA_COMPOSE_FILE"
  done

  cat >>"$EXTRA_COMPOSE_FILE" <<'YAML'
  openclaw-cli:
    volumes:
YAML

  if [[ -n "$home_volume" ]]; then
    printf '      - %s:/home/node\n' "$home_volume" >>"$EXTRA_COMPOSE_FILE"
    printf '      - %s:/home/node/.openclaw\n' "$CONFIG_DIR" >>"$EXTRA_COMPOSE_FILE"
    printf '      - %s:/home/node/.openclaw/workspace\n' "$WORKSPACE_DIR" >>"$EXTRA_COMPOSE_FILE"
  fi

  for mount in "${mounts[@]}"; do
    printf '      - %s\n' "$mount" >>"$EXTRA_COMPOSE_FILE"
  done

  if [[ -n "$home_volume" && "$home_volume" != *"/"* ]]; then
    cat >>"$EXTRA_COMPOSE_FILE" <<YAML
volumes:
  ${home_volume}:
YAML
  fi
}

VALID_MOUNTS=()
if [[ -n "$EXTRA_MOUNTS" ]]; then
  IFS=',' read -r -a mounts <<<"$EXTRA_MOUNTS"
  for mount in "${mounts[@]}"; do
    mount="${mount#"${mount%%[![:space:]]*}"}"
    mount="${mount%"${mount##*[![:space:]]}"}"
    if [[ -n "$mount" ]]; then
      VALID_MOUNTS+=("$mount")
    fi
  done
fi

if [[ -n "$HOME_VOLUME_NAME" || ${#VALID_MOUNTS[@]} -gt 0 ]]; then
  write_extra_compose "$HOME_VOLUME_NAME" "${VALID_MOUNTS[@]}"
  COMPOSE_FILES+=("$EXTRA_COMPOSE_FILE")
fi
for compose_file in "${COMPOSE_FILES[@]}"; do
  COMPOSE_ARGS+=("-f" "$compose_file")
done
COMPOSE_HINT="docker compose"
for compose_file in "${COMPOSE_FILES[@]}"; do
  COMPOSE_HINT+=" -f ${compose_file}"
done

ENV_FILE="$ROOT_DIR/.env"
upsert_env() {
  local file="$1"
  shift
  local -a keys=("$@")
  local tmp
  tmp="$(mktemp)"
  declare -A seen=()

  if [[ -f "$file" ]]; then
    while IFS= read -r line || [[ -n "$line" ]]; do
      local key="${line%%=*}"
      local replaced=false
      for k in "${keys[@]}"; do
        if [[ "$key" == "$k" ]]; then
          printf '%s=%s\n' "$k" "${!k-}" >>"$tmp"
          seen["$k"]=1
          replaced=true
          break
        fi
      done
      if [[ "$replaced" == false ]]; then
        printf '%s\n' "$line" >>"$tmp"
      fi
    done <"$file"
  fi

  for k in "${keys[@]}"; do
    if [[ -z "${seen[$k]:-}" ]]; then
      printf '%s=%s\n' "$k" "${!k-}" >>"$tmp"
    fi
  done

  mv "$tmp" "$file"
}

upsert_env "$ENV_FILE" \
  GENSPARX_CONFIG_DIR \
  GENSPARX_WORKSPACE_DIR \
  GENSPARX_GATEWAY_PORT \
  GENSPARX_BRIDGE_PORT \
  GENSPARX_GATEWAY_BIND \
  GENSPARX_GATEWAY_TOKEN \
  GENSPARX_IMAGE \
  GENSPARX_EXTRA_MOUNTS \
  GENSPARX_HOME_VOLUME \
  GENSPARX_DOCKER_APT_PACKAGES \
  OPENCLAW_CONFIG_DIR \
  OPENCLAW_WORKSPACE_DIR \
  OPENCLAW_GATEWAY_PORT \
  OPENCLAW_BRIDGE_PORT \
  OPENCLAW_GATEWAY_BIND \
  OPENCLAW_GATEWAY_TOKEN \
  OPENCLAW_IMAGE \
  OPENCLAW_EXTRA_MOUNTS \
  OPENCLAW_HOME_VOLUME \
  OPENCLAW_DOCKER_APT_PACKAGES

echo "==> Building Docker image: $IMAGE_NAME"
docker build \
  --build-arg "GENSPARX_DOCKER_APT_PACKAGES=${DOCKER_APT}" \
  --build-arg "OPENCLAW_DOCKER_APT_PACKAGES=${DOCKER_APT}" \
  -t "$IMAGE_NAME" \
  -f "$ROOT_DIR/Dockerfile" \
  "$ROOT_DIR"

echo ""
echo "==> Onboarding (interactive)"
echo "When prompted:"
echo "  - Gateway bind: lan"
echo "  - Gateway auth: token"
echo "  - Gateway token: $GENSPARX_GATEWAY_TOKEN"
echo "  - Tailscale exposure: Off"
echo "  - Install Gateway daemon: No"
echo ""
docker compose "${COMPOSE_ARGS[@]}" run --rm openclaw-cli onboard --no-install-daemon

echo ""
echo "==> Provider setup (optional)"
echo "WhatsApp (QR):"
echo "  ${COMPOSE_HINT} run --rm openclaw-cli channels login"
echo "Telegram (bot token):"
echo "  ${COMPOSE_HINT} run --rm openclaw-cli channels add --channel telegram --token <token>"
echo "Discord (bot token):"
echo "  ${COMPOSE_HINT} run --rm openclaw-cli channels add --channel discord --token <token>"
echo "Docs: https://docs.openclaw.ai/channels"

echo ""
echo "==> Starting gateway"
docker compose "${COMPOSE_ARGS[@]}" up -d openclaw-gateway

echo ""
echo "Gateway running with host port mapping."
echo "Access from tailnet devices via the host's tailnet IP."
echo "Config: $CONFIG_DIR"
echo "Workspace: $WORKSPACE_DIR"
echo "Token: $GENSPARX_GATEWAY_TOKEN"
echo ""
echo "Commands:"
echo "  ${COMPOSE_HINT} logs -f openclaw-gateway"
echo "  ${COMPOSE_HINT} exec openclaw-gateway node dist/index.js health --token \"$GENSPARX_GATEWAY_TOKEN\""
