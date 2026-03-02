set -euo pipefail
root=$(mktemp -d)
cp docker-setup.sh "$root/docker-setup.sh"
cat >"$root/Dockerfile" <<'EOF'
FROM scratch
EOF
cat >"$root/docker-compose.yml" <<'EOF'
services:
  gensparx-gateway:
    image: noop
  gensparx-cli:
    image: noop
EOF
mkdir -p "$root/bin"
cat >"$root/bin/docker" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
log="$DOCKER_STUB_LOG"
if [[ "${1:-}" == "compose" && "${2:-}" == "version" ]]; then
  exit 0
fi
if [[ "${1:-}" == "build" ]]; then
  echo "build $*" >>"$log"
  exit 0
fi
if [[ "${1:-}" == "compose" ]]; then
  echo "compose $*" >>"$log"
  exit 0
fi
echo "unknown $*" >>"$log"
exit 0
EOF
chmod +x "$root/bin/docker"
touch "$root/docker-stub.log"
export PATH="$root/bin:$PATH"
export DOCKER_STUB_LOG="$root/docker-stub.log"
export GENSPARX_GATEWAY_TOKEN="test-token"
export GENSPARX_CONFIG_DIR="$root/config"
export GENSPARX_WORKSPACE_DIR="$root/gensparx"
set +e
bash -x "$root/docker-setup.sh" >"$root/out.log" 2>"$root/err.log"
status=$?
set -e
echo "status=$status"
cat "$root/err.log"
