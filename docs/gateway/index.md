---
summary: "Runbook for the Gateway service, lifecycle, and operations"
read_when:
  - Running or debugging the gateway process
title: "Gateway Runbook"
---

# Gateway runbook

Use this page for day-1 startup and day-2 operations of the Gateway service.

<CardGroup cols={2}>
  <Card title="Deep troubleshooting" icon="siren" href="/gateway/troubleshooting">
    Symptom-first diagnostics with exact command ladders and log signatures.
  </Card>
  <Card title="Configuration" icon="sliders" href="/gateway/configuration">
    Task-oriented setup guide + full configuration reference.
  </Card>
  <Card title="Secrets management" icon="key-round" href="/gateway/secrets">
    SecretRef contract, runtime snapshot behavior, and migrate/reload operations.
  </Card>
  <Card title="Secrets plan contract" icon="shield-check" href="/gateway/secrets-plan-contract">
    Exact `secrets apply` target/path rules and ref-only auth-profile behavior.
  </Card>
</CardGroup>

- The always-on process that owns the single Baileys/Telegram connection and the control/event plane.
- Replaces the legacy `gateway` command. CLI entry point: `gensparx gateway`.
- Runs until stopped; exits non-zero on fatal errors so the supervisor restarts it.

<Steps>
  <Step title="Start the Gateway">

```bash
gensparx gateway --port 18789
# for full debug/trace logs in stdio:
gensparx gateway --port 18789 --verbose
# if the port is busy, terminate listeners then start:
gensparx gateway --force
# dev loop (auto-reload on TS changes):
pnpm gateway:watch
```

  </Step>

  <Step title="Verify service health">

```bash
openclaw gateway status
openclaw status
openclaw logs --follow
```

Healthy baseline: `Runtime: running` and `RPC probe: ok`.

  </Step>

  <Step title="Validate channel readiness">

```bash
openclaw channels status --probe
```

  </Step>
</Steps>

<Note>
Gateway config reload watches the active config file path (resolved from profile/state defaults, or `OPENCLAW_CONFIG_PATH` when set).
Default mode is `gateway.reload.mode="hybrid"`.
</Note>

## Runtime model

- One always-on process for routing, control plane, and channel connections.
- Single multiplexed port for:
  - WebSocket control/RPC
  - HTTP APIs (OpenAI-compatible, Responses, tools invoke)
  - Control UI and hooks
- Default bind mode: `loopback`.
- Auth is required by default (`gateway.auth.token` / `gateway.auth.password`, or `OPENCLAW_GATEWAY_TOKEN` / `OPENCLAW_GATEWAY_PASSWORD`).

### Port and bind precedence

| Setting      | Resolution order                                              |
| ------------ | ------------------------------------------------------------- |
| Gateway port | `--port` → `OPENCLAW_GATEWAY_PORT` → `gateway.port` → `18789` |
| Bind mode    | CLI/override → `gateway.bind` → `loopback`                    |

### Hot reload modes

| `gateway.reload.mode` | Behavior                                   |
| --------------------- | ------------------------------------------ |
| `off`                 | No config reload                           |
| `hot`                 | Apply only hot-safe changes                |
| `restart`             | Restart on reload-required changes         |
| `hybrid` (default)    | Hot-apply when safe, restart when required |

## Operator command set

```bash
openclaw gateway status
openclaw gateway status --deep
openclaw gateway status --json
openclaw gateway install
openclaw gateway restart
openclaw gateway stop
openclaw secrets reload
openclaw logs --follow
openclaw doctor
```

## Remote access

- Tailscale/VPN preferred; otherwise SSH tunnel:
  ```bash
  ssh -N -L 18789:127.0.0.1:18789 user@host
  ```
- Clients then connect to `ws://127.0.0.1:18789` through the tunnel.
- If a token is configured, clients must include it in `connect.params.auth.token` even over the tunnel.

## Multiple gateways (same host)

Usually unnecessary: one Gateway can serve multiple messaging channels and agents. Use multiple Gateways only for redundancy or strict isolation (ex: rescue bot).

Supported if you isolate state + config and use unique ports. Full guide: [Multiple gateways](/gateway/multiple-gateways).

Service names are profile-aware:

- macOS: `bot.molt.<profile>` (legacy `com.GenSparx.*` may still exist)
- Linux: `GenSparx-gateway-<profile>.service`
- Windows: `GenSparx Gateway (<profile>)`

Install metadata is embedded in the service config:

- `OPENCLAW_SERVICE_MARKER=gensparx`
- `OPENCLAW_SERVICE_KIND=gateway`
- `OPENCLAW_SERVICE_VERSION=<version>`

Rescue-Bot Pattern: keep a second Gateway isolated with its own profile, state dir, workspace, and base port spacing. Full guide: [Rescue-bot guide](/gateway/multiple-gateways#rescue-bot-guide).

### Dev profile (`--dev`)

Fast path: run a fully-isolated dev instance (config/state/workspace) without touching your primary setup.

```bash
gensparx --dev setup
gensparx --dev gateway --allow-unconfigured
# then target the dev instance:
gensparx --dev status
gensparx --dev health
```

Then connect clients to `ws://127.0.0.1:18789` locally.

<Warning>
If gateway auth is configured, clients still must send auth (`token`/`password`) even over SSH tunnels.
</Warning>

See: [Remote Gateway](/gateway/remote), [Authentication](/gateway/authentication), [Tailscale](/gateway/tailscale).

## Supervision and service lifecycle

Use supervised runs for production-like reliability.

<Tabs>
  <Tab title="macOS (launchd)">

```bash
openclaw gateway install
openclaw gateway status
openclaw gateway restart
openclaw gateway stop
```

LaunchAgent labels are `ai.openclaw.gateway` (default) or `ai.openclaw.<profile>` (named profile). `openclaw doctor` audits and repairs service config drift.

  </Tab>

  <Tab title="Linux (systemd user)">

```bash
openclaw gateway install
systemctl --user enable --now openclaw-gateway[-<profile>].service
openclaw gateway status
```

For persistence after logout, enable lingering:

```bash
sudo loginctl enable-linger <user>
```

  </Tab>

  <Tab title="Linux (system service)">

Use a system unit for multi-user/always-on hosts.

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now openclaw-gateway[-<profile>].service
```

  </Tab>
</Tabs>

## Multiple gateways on one host

Most setups should run **one** Gateway.
Use multiple only for strict isolation/redundancy (for example a rescue profile).

Checklist per instance:

- unique `gateway.port`
- unique `OPENCLAW_CONFIG_PATH`
- unique `OPENCLAW_STATE_DIR`
- unique `agents.defaults.workspace`
- separate WhatsApp numbers (if using WA)

Service install per profile:

```bash
gensparx --profile main gateway install
gensparx --profile rescue gateway install
```

Example:

```bash
OPENCLAW_CONFIG_PATH=~/.openclaw/a.json OPENCLAW_STATE_DIR=~/.openclaw-a gensparx gateway --port 19001
OPENCLAW_CONFIG_PATH=~/.openclaw/b.json OPENCLAW_STATE_DIR=~/.openclaw-b gensparx gateway --port 19002
```

See: [Multiple gateways](/gateway/multiple-gateways).

- Full docs: [Gateway protocol](/gateway/protocol) and [Bridge protocol (legacy)](/gateway/bridge-protocol).
- Mandatory first frame from client: `req {type:"req", id, method:"connect", params:{minProtocol,maxProtocol,client:{id,displayName?,version,platform,deviceFamily?,modelIdentifier?,mode,instanceId?}, caps, auth?, locale?, userAgent? } }`.
- Gateway replies `res {type:"res", id, ok:true, payload:hello-ok }` (or `ok:false` with an error, then closes).
- After handshake:
  - Requests: `{type:"req", id, method, params}` → `{type:"res", id, ok, payload|error}`
  - Events: `{type:"event", event, payload, seq?, stateVersion?}`
- Structured presence entries: `{host, ip, version, platform?, deviceFamily?, modelIdentifier?, mode, lastInputSeconds?, ts, reason?, tags?[], instanceId? }` (for WS clients, `instanceId` comes from `connect.client.instanceId`).
- `agent` responses are two-stage: first `res` ack `{runId,status:"accepted"}`, then a final `res` `{runId,status:"ok"|"error",summary}` after the run finishes; streamed output arrives as `event:"agent"`.

## Methods (initial set)

- `health` — full health snapshot (same shape as `gensparx health --json`).
- `status` — short summary.
- `system-presence` — current presence list.
- `system-event` — post a presence/system note (structured).
- `send` — send a message via the active channel(s).
- `agent` — run an agent turn (streams events back on same connection).
- `node.list` — list paired + currently-connected nodes (includes `caps`, `deviceFamily`, `modelIdentifier`, `paired`, `connected`, and advertised `commands`).
- `node.describe` — describe a node (capabilities + supported `node.invoke` commands; works for paired nodes and for currently-connected unpaired nodes).
- `node.invoke` — invoke a command on a node (e.g. `canvas.*`, `camera.*`).
- `node.pair.*` — pairing lifecycle (`request`, `list`, `approve`, `reject`, `verify`).

See also: [Presence](/concepts/presence) for how presence is produced/deduped and why a stable `client.instanceId` matters.

## Events

- `agent` — streamed tool/output events from the agent run (seq-tagged).
- `presence` — presence updates (deltas with stateVersion) pushed to all connected clients.
- `tick` — periodic keepalive/no-op to confirm liveness.
- `shutdown` — Gateway is exiting; payload includes `reason` and optional `restartExpectedMs`. Clients should reconnect.

## WebChat integration

- WebChat is a native SwiftUI UI that talks directly to the Gateway WebSocket for history, sends, abort, and events.
- Remote use goes through the same SSH/Tailscale tunnel; if a gateway token is configured, the client includes it during `connect`.
- macOS app connects via a single WS (shared connection); it hydrates presence from the initial snapshot and listens for `presence` events to update the UI.

## Typing and validation

- Server validates every inbound frame with AJV against JSON Schema emitted from the protocol definitions.
- Clients (TS/Swift) consume generated types (TS directly; Swift via the repo’s generator).
- Protocol definitions are the source of truth; regenerate schema/models with:
  - `pnpm protocol:gen`
  - `pnpm protocol:gen:swift`

## Connection snapshot

- `hello-ok` includes a `snapshot` with `presence`, `health`, `stateVersion`, and `uptimeMs` plus `policy {maxPayload,maxBufferedBytes,tickIntervalMs}` so clients can render immediately without extra requests.
- `health`/`system-presence` remain available for manual refresh, but are not required at connect time.

## Error codes (res.error shape)

- Errors use `{ code, message, details?, retryable?, retryAfterMs? }`.
- Standard codes:
  - `NOT_LINKED` — WhatsApp not authenticated.
  - `AGENT_TIMEOUT` — agent did not respond within the configured deadline.
  - `INVALID_REQUEST` — schema/param validation failed.
  - `UNAVAILABLE` — Gateway is shutting down or a dependency is unavailable.

## Keepalive behavior

- `tick` events (or WS ping/pong) are emitted periodically so clients know the Gateway is alive even when no traffic occurs.
- Send/agent acknowledgements remain separate responses; do not overload ticks for sends.

## Replay / gaps

- Events are not replayed. Clients detect seq gaps and should refresh (`health` + `system-presence`) before continuing. WebChat and macOS clients now auto-refresh on gap.

## Supervision (macOS example)

- Use launchd to keep the service alive:
  - Program: path to `gensparx`
  - Arguments: `gateway`
  - KeepAlive: true
  - StandardOut/Err: file paths or `syslog`
- On failure, launchd restarts; fatal misconfig should keep exiting so the operator notices.
- LaunchAgents are per-user and require a logged-in session; for headless setups use a custom LaunchDaemon (not shipped).
  - `gensparx gateway install` writes `~/Library/LaunchAgents/bot.molt.gateway.plist`
    (or `bot.molt.<profile>.plist`; legacy `com.GenSparx.*` is cleaned up).
  - `gensparx doctor` audits the LaunchAgent config and can update it to current defaults.

## Gateway service management (CLI)

Use the Gateway CLI for install/start/stop/restart/status:

```bash
gensparx gateway status
gensparx gateway install
gensparx gateway stop
gensparx gateway restart
gensparx logs --follow
```

Defaults include isolated state/config and base gateway port `19001`.

- `gateway status` probes the Gateway RPC by default using the service’s resolved port/config (override with `--url`).
- `gateway status --deep` adds system-level scans (LaunchDaemons/system units).
- `gateway status --no-probe` skips the RPC probe (useful when networking is down).
- `gateway status --json` is stable for scripts.
- `gateway status` reports **supervisor runtime** (launchd/systemd running) separately from **RPC reachability** (WS connect + status RPC).
- `gateway status` prints config path + probe target to avoid “localhost vs LAN bind” confusion and profile mismatches.
- `gateway status` includes the last gateway error line when the service looks running but the port is closed.
- `logs` tails the Gateway file log via RPC (no manual `tail`/`grep` needed).
- If other gateway-like services are detected, the CLI warns unless they are GenSparx profile services.
  We still recommend **one gateway per machine** for most setups; use isolated profiles/ports for redundancy or a rescue bot. See [Multiple gateways](/gateway/multiple-gateways).
  - Cleanup: `gensparx gateway uninstall` (current service) and `gensparx doctor` (legacy migrations).
- `gateway install` is a no-op when already installed; use `gensparx gateway install --force` to reinstall (profile/env/path changes).

- First client frame must be `connect`.
- Gateway returns `hello-ok` snapshot (`presence`, `health`, `stateVersion`, `uptimeMs`, limits/policy).
- Requests: `req(method, params)` → `res(ok/payload|error)`.
- Common events: `connect.challenge`, `agent`, `chat`, `presence`, `tick`, `health`, `heartbeat`, `shutdown`.

- GenSparx.app can bundle a Node-based gateway relay and install a per-user LaunchAgent labeled
  `bot.molt.gateway` (or `bot.molt.<profile>`; legacy `com.GenSparx.*` labels still unload cleanly).
- To stop it cleanly, use `gensparx gateway stop` (or `launchctl bootout gui/$UID/bot.molt.gateway`).
- To restart, use `gensparx gateway restart` (or `launchctl kickstart -k gui/$UID/bot.molt.gateway`).
  - `launchctl` only works if the LaunchAgent is installed; otherwise use `gensparx gateway install` first.
  - Replace the label with `bot.molt.<profile>` when running a named profile.

1. Immediate accepted ack (`status:"accepted"`)
2. Final completion response (`status:"ok"|"error"`), with streamed `agent` events in between.

GenSparx installs a **systemd user service** by default on Linux/WSL2. We
recommend user services for single-user machines (simpler env, per-user config).
Use a **system service** for multi-user or always-on servers (no lingering
required, shared supervision).

`gensparx gateway install` writes the user unit. `gensparx doctor` audits the
unit and can update it to match the current recommended defaults.

Create `~/.config/systemd/user/GenSparx-gateway[-<profile>].service`:

```
[Unit]
Description=GenSparx Gateway (profile: <profile>, v<version>)
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/GenSparx gateway --port 18789
Restart=always
RestartSec=5
Environment=OPENCLAW_GATEWAY_TOKEN=
WorkingDirectory=/home/youruser

[Install]
WantedBy=default.target
```

Enable lingering (required so the user service survives logout/idle):

```
sudo loginctl enable-linger youruser
```

Onboarding runs this on Linux/WSL2 (may prompt for sudo; writes `/var/lib/systemd/linger`).
Then enable the service:

```
systemctl --user enable --now GenSparx-gateway[-<profile>].service
```

**Alternative (system service)** - for always-on or multi-user servers, you can
install a systemd **system** unit instead of a user unit (no lingering needed).
Create `/etc/systemd/system/GenSparx-gateway[-<profile>].service` (copy the unit above,
switch `WantedBy=multi-user.target`, set `User=` + `WorkingDirectory=`), then:

```
sudo systemctl daemon-reload
sudo systemctl enable --now GenSparx-gateway[-<profile>].service
```

## Windows (WSL2)

Windows installs should use **WSL2** and follow the Linux systemd section above.

## Operational checks

### Liveness

- Open WS and send `connect`.
- Expect `hello-ok` response with snapshot.

### Readiness

```bash
openclaw gateway status
openclaw channels status --probe
openclaw health
```

### Gap recovery

Events are not replayed. On sequence gaps, refresh state (`health`, `system-presence`) before continuing.

## Common failure signatures

| Signature                                                      | Likely issue                             |
| -------------------------------------------------------------- | ---------------------------------------- |
| `refusing to bind gateway ... without auth`                    | Non-loopback bind without token/password |
| `another gateway instance is already listening` / `EADDRINUSE` | Port conflict                            |
| `Gateway start blocked: set gateway.mode=local`                | Config set to remote mode                |
| `unauthorized` during connect                                  | Auth mismatch between client and gateway |

For full diagnosis ladders, use [Gateway Troubleshooting](/gateway/troubleshooting).

## Safety guarantees

- Gateway protocol clients fail fast when Gateway is unavailable (no implicit direct-channel fallback).
- Invalid/non-connect first frames are rejected and closed.
- Graceful shutdown emits `shutdown` event before socket close.

---

- `gensparx gateway health|status` — request health/status over the Gateway WS.
- `gensparx message send --target <num> --message "hi" [--media ...]` — send via Gateway (idempotent for WhatsApp).
- `gensparx agent --message "hi" --to <num>` — run an agent turn (waits for final by default).
- `gensparx gateway call <method> --params '{"k":"v"}'` — raw method invoker for debugging.
- `gensparx gateway stop|restart` — stop/restart the supervised gateway service (launchd/systemd).
- Gateway helper subcommands assume a running gateway on `--url`; they no longer auto-spawn one.

## Migration guidance

- Retire uses of `gensparx gateway` and the legacy TCP control port.
- Update clients to speak the WS protocol with mandatory connect and structured presence.




