#!/usr/bin/env bash
# Rootless gensparx in Podman: run after one-time setup.
#
# One-time setup (from repo root): ./setup-podman.sh
# Then:
#   ./scripts/run-gensparx-podman.sh launch           # Start gateway
#   ./scripts/run-gensparx-podman.sh launch setup      # Onboarding wizard
#
# As the gensparx user (no repo needed):
#   sudo -u gensparx /home/gensparx/run-gensparx-podman.sh
#   sudo -u gensparx /home/gensparx/run-gensparx-podman.sh setup
#
# Legacy: "setup-host" delegates to ../setup-podman.sh

set -euo pipefail

GENSPARX_USER="${GENSPARX_PODMAN_USER:-gensparx}"

resolve_user_home() {
  local user="$1"
  local home=""
  if command -v getent >/dev/null 2>&1; then
    home="$(getent passwd "$user" 2>/dev/null | cut -d: -f6 || true)"
  fi
  if [[ -z "$home" && -f /etc/passwd ]]; then
    home="$(awk -F: -v u="$user" '$1==u {print $6}' /etc/passwd 2>/dev/null || true)"
  fi
  if [[ -z "$home" ]]; then
    home="/home/$user"
  fi
  printf '%s' "$home"
}

GENSPARX_HOME="$(resolve_user_home "$GENSPARX_USER")"
GENSPARX_UID="$(id -u "$GENSPARX_USER" 2>/dev/null || true)"
LAUNCH_SCRIPT="$GENSPARX_HOME/run-gensparx-podman.sh"

# Legacy: setup-host → run setup-podman.sh
if [[ "${1:-}" == "setup-host" ]]; then
  shift
  REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
  SETUP_PODMAN="$REPO_ROOT/setup-podman.sh"
  if [[ -f "$SETUP_PODMAN" ]]; then
    exec "$SETUP_PODMAN" "$@"
  fi
  echo "setup-podman.sh not found at $SETUP_PODMAN. Run from repo root: ./setup-podman.sh" >&2
  exit 1
fi

# --- Step 2: launch (from repo: re-exec as gensparx in safe cwd; from gensparx home: run container) ---
if [[ "${1:-}" == "launch" ]]; then
  shift
  if [[ -n "${GENSPARX_UID:-}" && "$(id -u)" -ne "$GENSPARX_UID" ]]; then
    # Exec as gensparx with cwd=/tmp so a nologin user never inherits an invalid cwd.
    exec sudo -u "$GENSPARX_USER" env HOME="$GENSPARX_HOME" PATH="$PATH" TERM="${TERM:-}" \
      bash -c 'cd /tmp && exec '"$LAUNCH_SCRIPT"' "$@"' _ "$@"
  fi
  # Already gensparx; fall through to container run (with remaining args, e.g. "setup")
fi

# --- Container run (script in gensparx home, run as gensparx) ---
EFFECTIVE_HOME="${HOME:-}"
if [[ -n "${GENSPARX_UID:-}" && "$(id -u)" -eq "$GENSPARX_UID" ]]; then
  EFFECTIVE_HOME="$GENSPARX_HOME"
  export HOME="$GENSPARX_HOME"
fi
if [[ -z "${EFFECTIVE_HOME:-}" ]]; then
  EFFECTIVE_HOME="${GENSPARX_HOME:-/tmp}"
fi
CONFIG_DIR="${GENSPARX_CONFIG_DIR:-$EFFECTIVE_HOME/.gensparx}"
ENV_FILE="${GENSPARX_PODMAN_ENV:-$CONFIG_DIR/.env}"
WORKSPACE_DIR="${GENSPARX_WORKSPACE_DIR:-$CONFIG_DIR/workspace}"
CONTAINER_NAME="${GENSPARX_PODMAN_CONTAINER:-gensparx}"
GENSPARX_IMAGE="${GENSPARX_PODMAN_IMAGE:-gensparx:local}"
PODMAN_PULL="${GENSPARX_PODMAN_PULL:-never}"
HOST_GATEWAY_PORT="${GENSPARX_PODMAN_GATEWAY_HOST_PORT:-${GENSPARX_GATEWAY_PORT:-18789}}"
HOST_BRIDGE_PORT="${GENSPARX_PODMAN_BRIDGE_HOST_PORT:-${GENSPARX_BRIDGE_PORT:-18790}}"
# Keep Podman default local-only unless explicitly overridden.
# Non-loopback binds require gateway.controlUi.allowedOrigins (security hardening).
GATEWAY_BIND="${GENSPARX_GATEWAY_BIND:-loopback}"

# Safe cwd for podman (gensparx is nologin; avoid inherited cwd from sudo)
cd "$EFFECTIVE_HOME" 2>/dev/null || cd /tmp 2>/dev/null || true

RUN_SETUP=false
if [[ "${1:-}" == "setup" || "${1:-}" == "onboard" ]]; then
  RUN_SETUP=true
  shift
fi

mkdir -p "$CONFIG_DIR" "$WORKSPACE_DIR"
# Subdirs the app may create at runtime (canvas, cron); create here so ownership is correct
mkdir -p "$CONFIG_DIR/canvas" "$CONFIG_DIR/cron"
chmod 700 "$CONFIG_DIR" "$WORKSPACE_DIR" 2>/dev/null || true

if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck source=/dev/null
  source "$ENV_FILE" 2>/dev/null || true
  set +a
fi

upsert_env_var() {
  local file="$1"
  local key="$2"
  local value="$3"
  local tmp
  tmp="$(mktemp)"
  if [[ -f "$file" ]]; then
    awk -v k="$key" -v v="$value" '
      BEGIN { found = 0 }
      $0 ~ ("^" k "=") { print k "=" v; found = 1; next }
      { print }
      END { if (!found) print k "=" v }
    ' "$file" >"$tmp"
  else
    printf '%s=%s\n' "$key" "$value" >"$tmp"
  fi
  mv "$tmp" "$file"
  chmod 600 "$file" 2>/dev/null || true
}

generate_token_hex_32() {
  if command -v openssl >/dev/null 2>&1; then
    openssl rand -hex 32
    return 0
  fi
  if command -v python3 >/dev/null 2>&1; then
    python3 - <<'PY'
import secrets
print(secrets.token_hex(32))
PY
    return 0
  fi
  if command -v od >/dev/null 2>&1; then
    od -An -N32 -tx1 /dev/urandom | tr -d " \n"
    return 0
  fi
  echo "Missing dependency: need openssl or python3 (or od) to generate GENSPARX_GATEWAY_TOKEN." >&2
  exit 1
}

if [[ -z "${GENSPARX_GATEWAY_TOKEN:-}" ]]; then
  export GENSPARX_GATEWAY_TOKEN="$(generate_token_hex_32)"
  mkdir -p "$(dirname "$ENV_FILE")"
  upsert_env_var "$ENV_FILE" "GENSPARX_GATEWAY_TOKEN" "$GENSPARX_GATEWAY_TOKEN"
  echo "Generated GENSPARX_GATEWAY_TOKEN and wrote it to $ENV_FILE." >&2
fi

# The gateway refuses to start unless gateway.mode=local is set in config.
# Keep this minimal; users can run the wizard later to configure channels/providers.
CONFIG_JSON="$CONFIG_DIR/gensparx.json"
if [[ ! -f "$CONFIG_JSON" ]]; then
  echo '{ gateway: { mode: "local" } }' >"$CONFIG_JSON"
  chmod 600 "$CONFIG_JSON" 2>/dev/null || true
  echo "Created $CONFIG_JSON (minimal gateway.mode=local)." >&2
fi

PODMAN_USERNS="${GENSPARX_PODMAN_USERNS:-keep-id}"
USERNS_ARGS=()
RUN_USER_ARGS=()
case "$PODMAN_USERNS" in
  ""|auto) ;;
  keep-id) USERNS_ARGS=(--userns=keep-id) ;;
  host) USERNS_ARGS=(--userns=host) ;;
  *)
    echo "Unsupported GENSPARX_PODMAN_USERNS=$PODMAN_USERNS (expected: keep-id, auto, host)." >&2
    exit 2
    ;;
esac

RUN_UID="$(id -u)"
RUN_GID="$(id -g)"
if [[ "$PODMAN_USERNS" == "keep-id" ]]; then
  RUN_USER_ARGS=(--user "${RUN_UID}:${RUN_GID}")
  echo "Starting container as uid=${RUN_UID} gid=${RUN_GID} (must match owner of $CONFIG_DIR)" >&2
else
  echo "Starting container without --user (GENSPARX_PODMAN_USERNS=$PODMAN_USERNS), mounts may require ownership fixes." >&2
fi

ENV_FILE_ARGS=()
[[ -f "$ENV_FILE" ]] && ENV_FILE_ARGS+=(--env-file "$ENV_FILE")

if [[ "$RUN_SETUP" == true ]]; then
  exec podman run --pull="$PODMAN_PULL" --rm -it \
    --init \
    "${USERNS_ARGS[@]}" "${RUN_USER_ARGS[@]}" \
    -e HOME=/home/node -e TERM=xterm-256color -e BROWSER=echo \
    -e GENSPARX_GATEWAY_TOKEN="$GENSPARX_GATEWAY_TOKEN" \
    -v "$CONFIG_DIR:/home/node/.gensparx:rw" \
    -v "$WORKSPACE_DIR:/home/node/.gensparx/workspace:rw" \
    "${ENV_FILE_ARGS[@]}" \
    "$GENSPARX_IMAGE" \
    node dist/index.js onboard "$@"
fi

podman run --pull="$PODMAN_PULL" -d --replace \
  --name "$CONTAINER_NAME" \
  --init \
  "${USERNS_ARGS[@]}" "${RUN_USER_ARGS[@]}" \
  -e HOME=/home/node -e TERM=xterm-256color \
  -e GENSPARX_GATEWAY_TOKEN="$GENSPARX_GATEWAY_TOKEN" \
  "${ENV_FILE_ARGS[@]}" \
  -v "$CONFIG_DIR:/home/node/.gensparx:rw" \
  -v "$WORKSPACE_DIR:/home/node/.gensparx/workspace:rw" \
  -p "${HOST_GATEWAY_PORT}:18789" \
  -p "${HOST_BRIDGE_PORT}:18790" \
  "$GENSPARX_IMAGE" \
  node dist/index.js gateway --bind "$GATEWAY_BIND" --port 18789

echo "Container $CONTAINER_NAME started. Dashboard: http://127.0.0.1:${HOST_GATEWAY_PORT}/"
echo "Logs: podman logs -f $CONTAINER_NAME"
echo "For auto-start/restarts, use: ./setup-podman.sh --quadlet (Quadlet + systemd user service)."
