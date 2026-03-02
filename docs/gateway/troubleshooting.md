---
summary: "Quick troubleshooting guide for common GenSparx failures"
read_when:
  - The troubleshooting hub pointed you here for deeper diagnosis
  - You need stable symptom based runbook sections with exact commands
title: "Troubleshooting"
---

# Gateway troubleshooting

When GenSparx misbehaves, here's how to fix it.

## Command ladder

Provider-specific shortcuts: [/channels/troubleshooting](/channels/troubleshooting)

## Status & Diagnostics

Quick triage commands (in order):

| Command                            | What it tells you                                                                                      | When to use it                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `gensparx status`                  | Local summary: OS + update, gateway reachability/mode, service, agents/sessions, provider config state | First check, quick overview                       |
| `gensparx status --all`            | Full local diagnosis (read-only, pasteable, safe-ish) incl. log tail                                   | When you need to share a debug report             |
| `gensparx status --deep`           | Runs gateway health checks (incl. provider probes; requires reachable gateway)                         | When “configured” doesn’t mean “working”          |
| `gensparx gateway probe`           | Gateway discovery + reachability (local + remote targets)                                              | When you suspect you’re probing the wrong gateway |
| `gensparx channels status --probe` | Asks the running gateway for channel status (and optionally probes)                                    | When gateway is reachable but channels misbehave  |
| `gensparx gateway status`          | Supervisor state (launchd/systemd/schtasks), runtime PID/exit, last gateway error                      | When the service “looks loaded” but nothing runs  |
| `gensparx logs --follow`           | Live logs (best signal for runtime issues)                                                             | When you need the actual failure reason           |

**Sharing output:** prefer `gensparx status --all` (it redacts tokens). If you paste `gensparx status`, consider setting `OPENCLAW_SHOW_SECRETS=0` first (token previews).

See also: [Health checks](/gateway/health) and [Logging](/logging).

## Common Issues

### No API key found for provider "anthropic"

This means the **agent’s auth store is empty** or missing Anthropic credentials.
Auth is **per agent**, so a new agent won’t inherit the main agent’s keys.

Fix options:

- Re-run onboarding and choose **Anthropic** for that agent.
- Or paste a setup-token on the **gateway host**:
  ```bash
  gensparx models auth setup-token --provider anthropic
  ```
- Or copy `auth-profiles.json` from the main agent dir to the new agent dir.

Verify:

```bash
gensparx models status
```

### OAuth token refresh failed (Anthropic Claude subscription)

This means the stored Anthropic OAuth token expired and the refresh failed.
If you’re on a Claude subscription (no API key), the most reliable fix is to
switch to a **Claude Code setup-token** and paste it on the **gateway host**.

**Recommended (setup-token):**

```bash
# Run on the gateway host (paste the setup-token)
gensparx models auth setup-token --provider anthropic
gensparx models status
```

If you generated the token elsewhere:

```bash
gensparx models auth paste-token --provider anthropic
gensparx models status
```

More detail: [Anthropic](/providers/anthropic) and [OAuth](/concepts/oauth).

### Control UI fails on HTTP ("device identity required" / "connect failed")

If you open the dashboard over plain HTTP (e.g. `http://<lan-ip>:18789/` or
`http://<tailscale-ip>:18789/`), the browser runs in a **non-secure context** and
blocks WebCrypto, so device identity can’t be generated.

**Fix:**

- Prefer HTTPS via [Tailscale Serve](/gateway/tailscale).
- Or open locally on the gateway host: `http://127.0.0.1:18789/`.
- If you must stay on HTTP, enable `gateway.controlUi.allowInsecureAuth: true` and
  use a gateway token (token-only; no device identity/pairing). See
  [Control UI](/web/control-ui#insecure-http).

### CI Secrets Scan Failed

This means `detect-secrets` found new candidates not yet in the baseline.
Follow [Secret scanning](/gateway/security#secret-scanning-detect-secrets).

### Service Installed but Nothing is Running

If the gateway service is installed but the process exits immediately, the service
can appear “loaded” while nothing is running.

**Check:**

```bash
gensparx gateway status
gensparx doctor
```

Doctor/service will show runtime state (PID/last exit) and log hints.

**Logs:**

- Preferred: `gensparx logs --follow`
- File logs (always): `/tmp/GenSparx/GenSparx-YYYY-MM-DD.log` (or your configured `logging.file`)
- macOS LaunchAgent (if installed): `$OPENCLAW_STATE_DIR/logs/gateway.log` and `gateway.err.log`
- Linux systemd (if installed): `journalctl --user -u GenSparx-gateway[-<profile>].service -n 200 --no-pager`
- Windows: `schtasks /Query /TN "GenSparx Gateway (<profile>)" /V /FO LIST`

**Enable more logging:**

- Bump file log detail (persisted JSONL):
  ```json
  { "logging": { "level": "debug" } }
  ```
- Bump console verbosity (TTY output only):
  ```json
  { "logging": { "consoleLevel": "debug", "consoleStyle": "pretty" } }
  ```
- Quick tip: `--verbose` affects **console** output only. File logs remain controlled by `logging.level`.

See [/logging](/logging) for a full overview of formats, config, and access.

### "Gateway start blocked: set gateway.mode=local"

This means the config exists but `gateway.mode` is unset (or not `local`), so the
Gateway refuses to start.

**Fix (recommended):**

- Run the wizard and set the Gateway run mode to **Local**:
  ```bash
  gensparx configure
  ```
- Or set it directly:
  ```bash
  gensparx config set gateway.mode local
  ```

**If you meant to run a remote Gateway instead:**

- Set a remote URL and keep `gateway.mode=remote`:
  ```bash
  gensparx config set gateway.mode remote
  gensparx config set gateway.remote.url "wss://gateway.example.com"
  ```

**Ad-hoc/dev only:** pass `--allow-unconfigured` to start the gateway without
`gateway.mode=local`.

**No config file yet?** Run `gensparx setup` to create a starter config, then rerun
the gateway.

### Service Environment (PATH + runtime)

The gateway service runs with a **minimal PATH** to avoid shell/manager cruft:

- macOS: `/opt/homebrew/bin`, `/usr/local/bin`, `/usr/bin`, `/bin`
- Linux: `/usr/local/bin`, `/usr/bin`, `/bin`

This intentionally excludes version managers (nvm/fnm/volta/asdf) and package
managers (pnpm/npm) because the service does not load your shell init. Runtime
variables like `DISPLAY` should live in `~/.openclaw/.env` (loaded early by the
gateway).
Exec runs on `host=gateway` merge your login-shell `PATH` into the exec environment,
so missing tools usually mean your shell init isn’t exporting them (or set
`tools.exec.pathPrepend`). See [/tools/exec](/tools/exec).

WhatsApp + Telegram channels require **Node**; Bun is unsupported. If your
service was installed with Bun or a version-managed Node path, run `gensparx doctor`
to migrate to a system Node install.

### Skill missing API key in sandbox

**Symptom:** Skill works on host but fails in sandbox with missing API key.

**Why:** sandboxed exec runs inside Docker and does **not** inherit host `process.env`.

**Fix:**

- set `agents.defaults.sandbox.docker.env` (or per-agent `agents.list[].sandbox.docker.env`)
- or bake the key into your custom sandbox image
- then run `gensparx sandbox recreate --agent <id>` (or `--all`)

### Service Running but Port Not Listening

If the service reports **running** but nothing is listening on the gateway port,
the Gateway likely refused to bind.

**What "running" means here**

- `Runtime: running` means your supervisor (launchd/systemd/schtasks) thinks the process is alive.
- `RPC probe` means the CLI could actually connect to the gateway WebSocket and call `status`.
- Always trust `Probe target:` + `Config (service):` as the “what did we actually try?” lines.

**Check:**

- `gateway.mode` must be `local` for `gensparx gateway` and the service.
- If you set `gateway.mode=remote`, the **CLI defaults** to a remote URL. The service can still be running locally, but your CLI may be probing the wrong place. Use `gensparx gateway status` to see the service’s resolved port + probe target (or pass `--url`).
- `gensparx gateway status` and `gensparx doctor` surface the **last gateway error** from logs when the service looks running but the port is closed.
- Non-loopback binds (`lan`/`tailnet`/`custom`, or `auto` when loopback is unavailable) require auth:
  `gateway.auth.token` (or `OPENCLAW_GATEWAY_TOKEN`).
- `gateway.remote.token` is for remote CLI calls only; it does **not** enable local auth.
- `gateway.token` is ignored; use `gateway.auth.token`.

**If `gensparx gateway status` shows a config mismatch**

- `Config (cli): ...` and `Config (service): ...` should normally match.
- If they don’t, you’re almost certainly editing one config while the service is running another.
- Fix: rerun `gensparx gateway install --force` from the same `--profile` / `OPENCLAW_STATE_DIR` you want the service to use.

**If `gensparx gateway status` reports service config issues**

- The supervisor config (launchd/systemd/schtasks) is missing current defaults.
- Fix: run `gensparx doctor` to update it (or `gensparx gateway install --force` for a full rewrite).

**If `Last gateway error:` mentions “refusing to bind … without auth”**

- You set `gateway.bind` to a non-loopback mode (`lan`/`tailnet`/`custom`, or `auto` when loopback is unavailable) but didn’t configure auth.
- Fix: set `gateway.auth.mode` + `gateway.auth.token` (or export `OPENCLAW_GATEWAY_TOKEN`) and restart the service.

**If `gensparx gateway status` says `bind=tailnet` but no tailnet interface was found**

- The gateway tried to bind to a Tailscale IP (100.64.0.0/10) but none were detected on the host.
- Fix: bring up Tailscale on that machine (or change `gateway.bind` to `loopback`/`lan`).

**If `Probe note:` says the probe uses loopback**

- That’s expected for `bind=lan`: the gateway listens on `0.0.0.0` (all interfaces), and loopback should still connect locally.
- For remote clients, use a real LAN IP (not `0.0.0.0`) plus the port, and ensure auth is configured.

### Address Already in Use (Port 18789)

This means something is already listening on the gateway port.

**Check:**

```bash
gensparx gateway status
```

It will show the listener(s) and likely causes (gateway already running, SSH tunnel).
If needed, stop the service or pick a different port.

### Extra Workspace Folders Detected

If you upgraded from older installs, you might still have `~/GenSparx` on disk.
Multiple workspace directories can cause confusing auth or state drift because
only one workspace is active.

**Fix:** keep a single active workspace and archive/remove the rest. See
[Agent workspace](/concepts/agent-workspace#extra-workspace-folders).

### Main chat running in a sandbox workspace

Symptoms: `pwd` or file tools show `~/.openclaw/sandboxes/...` even though you
expected the host workspace.

**Why:** `agents.defaults.sandbox.mode: "non-main"` keys off `session.mainKey` (default `"main"`).
Group/channel sessions use their own keys, so they are treated as non-main and
get sandbox workspaces.

**Fix options:**

- If you want host workspaces for an agent: set `agents.list[].sandbox.mode: "off"`.
- If you want host workspace access inside sandbox: set `workspaceAccess: "rw"` for that agent.

### "Agent was aborted"

The agent was interrupted mid-response.

**Causes:**

- User sent `stop`, `abort`, `esc`, `wait`, or `exit`
- Timeout exceeded
- Process crashed

**Fix:** Just send another message. The session continues.

### "Agent failed before reply: Unknown model: anthropic/claude-haiku-3-5"

GenSparx intentionally rejects **older/insecure models** (especially those more
vulnerable to prompt injection). If you see this error, the model name is no
longer supported.

**Fix:**

- Pick a **latest** model for the provider and update your config or model alias.
- If you’re unsure which models are available, run `gensparx models list` or
  `gensparx models scan` and choose a supported one.
- Check gateway logs for the detailed failure reason.

See also: [Models CLI](/cli/models) and [Model providers](/concepts/model-providers).

### Messages Not Triggering

**Check 1:** Is the sender allowlisted?

```bash
gensparx status
```

Look for `AllowFrom: ...` in the output.

**Check 2:** For group chats, is mention required?

```bash
# The message must match mentionPatterns or explicit mentions; defaults live in channel groups/guilds.
# Multi-agent: `agents.list[].groupChat.mentionPatterns` overrides global patterns.
grep -n "agents\\|groupChat\\|mentionPatterns\\|channels\\.whatsapp\\.groups\\|channels\\.telegram\\.groups\\|channels\\.imessage\\.groups\\|channels\\.discord\\.guilds" \
  "${OPENCLAW_CONFIG_PATH:-\$HOME/.openclaw/openclaw.json}"
```

**Check 3:** Check the logs

```bash
gensparx logs --follow
# or if you want quick filters:
tail -f "$(ls -t /tmp/GenSparx/GenSparx-*.log | head -1)" | grep "blocked\\|skip\\|unauthorized"
```

Expected healthy signals:

- `openclaw gateway status` shows `Runtime: running` and `RPC probe: ok`.
- `openclaw doctor` reports no blocking config/service issues.
- `openclaw channels status --probe` shows connected/ready channels.

## No replies

If channels are up but nothing answers, check routing and policy before reconnecting anything.

```bash
gensparx pairing list <channel>
```

Pending DM pairing requests are capped at **3 per channel** by default. If the list is full, new requests won’t generate a code until one is approved or expires.

**Check 2:** Did the request get created but no reply was sent?

```bash
gensparx logs --follow | grep "pairing request"
```

**Check 3:** Confirm `dmPolicy` isn’t `open`/`allowlist` for that channel.

### Image + Mention Not Working

Known issue: When you send an image with ONLY a mention (no other text), WhatsApp sometimes doesn't include the mention metadata.

**Workaround:** Add some text with the mention:

- ❌ `@gensparx` + image
- ✅ `@gensparx check this` + image

### Session Not Resuming

**Check 1:** Is the session file there?

```bash
ls -la ~/.openclaw/agents/<agentId>/sessions/
```

**Check 2:** Is the reset window too short?

```json
{
  "session": {
    "reset": {
      "mode": "daily",
      "atHour": 4,
      "idleMinutes": 10080 // 7 days
    }
  }
}
```

**Check 3:** Did someone send `/new`, `/reset`, or a reset trigger?

### Agent Timing Out

Default timeout is 30 minutes. For long tasks:

```json
{
  "reply": {
    "timeoutSeconds": 3600 // 1 hour
  }
}
```

Or use the `process` tool to background long commands.

### WhatsApp Disconnected

```bash
# Check local status (creds, sessions, queued events)
gensparx status
# Probe the running gateway + channels (WA connect + Telegram + Discord APIs)
gensparx status --deep

# View recent connection events
gensparx logs --limit 200 | grep "connection\\|disconnect\\|logout"
```

Look for:

```bash
gensparx gateway --verbose
```

Common signatures:

```bash
gensparx channels logout
trash "${OPENCLAW_STATE_DIR:-\$HOME/.openclaw}/credentials" # if logout can't cleanly remove everything
gensparx channels login --verbose       # re-scan QR
```

Related:

- [/channels/troubleshooting](/channels/troubleshooting)
- [/channels/pairing](/channels/pairing)
- [/channels/groups](/channels/groups)

## Dashboard control ui connectivity

**Check 2:** Is it too large?

- Images: max 6MB
- Audio/Video: max 16MB
- Documents: max 100MB

**Check 3:** Check media logs

```bash
grep "media\\|fetch\\|download" "$(ls -t /tmp/GenSparx/GenSparx-*.log | head -1)" | tail -20
```

### High Memory Usage

GenSparx keeps conversation history in memory.

**Fix:** Restart periodically or set session limits:

```json
{
  "session": {
    "historyLimit": 100 // Max messages to keep
  }
}
```

## Common troubleshooting

### “Gateway won’t start — configuration invalid”

GenSparx now refuses to start when the config contains unknown keys, malformed values, or invalid types.
This is intentional for safety.

Fix it with Doctor:

```bash
gensparx doctor
gensparx doctor --fix
```

Notes:

- `gensparx doctor` reports every invalid entry.
- `gensparx doctor --fix` applies migrations/repairs and rewrites the config.
- Diagnostic commands like `gensparx logs`, `gensparx health`, `gensparx status`, `gensparx gateway status`, and `gensparx gateway probe` still run even if the config is invalid.

### “All models failed” — what should I check first?

- **Credentials** present for the provider(s) being tried (auth profiles + env vars).
- **Model routing**: confirm `agents.defaults.model.primary` and fallbacks are models you can access.
- **Gateway logs** in `/tmp/GenSparx/…` for the exact provider error.
- **Model status**: use `/model status` (chat) or `gensparx models status` (CLI).

### I’m running on my personal WhatsApp number — why is self-chat weird?

Enable self-chat mode and allowlist your own number:

```json5
{
  channels: {
    whatsapp: {
      selfChatMode: true,
      dmPolicy: "allowlist",
      allowFrom: ["+15555550123"],
    },
  },
}
```

See [WhatsApp setup](/channels/whatsapp).

### WhatsApp logged me out. How do I re‑auth?

Run the login command again and scan the QR code:

```bash
gensparx channels login
```

### Build errors on `main` — what’s the standard fix path?

1. `git pull origin main && pnpm install`
2. `gensparx doctor`
3. Check GitHub issues or Discord
4. Temporary workaround: check out an older commit

### npm install fails (allow-build-scripts / missing tar or yargs). What now?

If you’re running from source, use the repo’s package manager: **pnpm** (preferred).
The repo declares `packageManager: "pnpm@…"`.

Typical recovery:

```bash
git status   # ensure you’re in the repo root
pnpm install
pnpm build
gensparx doctor
gensparx gateway restart
```

Why: pnpm is the configured package manager for this repo.

### How do I switch between git installs and npm installs?

Use the **website installer** and select the install method with a flag. It
upgrades in place and rewrites the gateway service to point at the new install.

Switch **to git install**:

```bash
curl -fsSL https://gensparx.com/install.sh | bash -s -- --install-method git --no-onboard
```

Switch **to npm global**:

```bash
curl -fsSL https://gensparx.com/install.sh | bash
```

Notes:

- The git flow only rebases if the repo is clean. Commit or stash changes first.
- After switching, run:
  ```bash
  gensparx doctor
  gensparx gateway restart
  ```

### Telegram block streaming isn’t splitting text between tool calls. Why?

Block streaming only sends **completed text blocks**. Common reasons you see a single message:

- `agents.defaults.blockStreamingDefault` is still `"off"`.
- `channels.telegram.blockStreaming` is set to `false`.
- `channels.telegram.streamMode` is `partial` or `block` **and draft streaming is active**
  (private chat + topics). Draft streaming disables block streaming in that case.
- Your `minChars` / coalesce settings are too high, so chunks get merged.
- The model emits one large text block (no mid‑reply flush points).

Fix checklist:

1. Put block streaming settings under `agents.defaults`, not the root.
2. Set `channels.telegram.streamMode: "off"` if you want real multi‑message block replies.
3. Use smaller chunk/coalesce thresholds while debugging.

See [Streaming](/concepts/streaming).

### Discord doesn’t reply in my server even with `requireMention: false`. Why?

`requireMention` only controls mention‑gating **after** the channel passes allowlists.
By default `channels.discord.groupPolicy` is **allowlist**, so guilds must be explicitly enabled.
If you set `channels.discord.guilds.<guildId>.channels`, only the listed channels are allowed; omit it to allow all channels in the guild.

Fix checklist:

1. Set `channels.discord.groupPolicy: "open"` **or** add a guild allowlist entry (and optionally a channel allowlist).
2. Use **numeric channel IDs** in `channels.discord.guilds.<guildId>.channels`.
3. Put `requireMention: false` **under** `channels.discord.guilds` (global or per‑channel).
   Top‑level `channels.discord.requireMention` is not a supported key.
4. Ensure the bot has **Message Content Intent** and channel permissions.
5. Run `gensparx channels status --probe` for audit hints.

Docs: [Discord](/channels/discord), [Channels troubleshooting](/channels/troubleshooting).

### Cloud Code Assist API error: invalid tool schema (400). What now?

This is almost always a **tool schema compatibility** issue. The Cloud Code Assist
endpoint accepts a strict subset of JSON Schema. GenSparx scrubs/normalizes tool
schemas in current `main`, but the fix is not in the last release yet (as of
January 13, 2026).

Fix checklist:

1. **Update GenSparx**:
   - If you can run from source, pull `main` and restart the gateway.
   - Otherwise, wait for the next release that includes the schema scrubber.
2. Avoid unsupported keywords like `anyOf/oneOf/allOf`, `patternProperties`,
   `additionalProperties`, `minLength`, `maxLength`, `format`, etc.
3. If you define custom tools, keep the top‑level schema as `type: "object"` with
   `properties` and simple enums.

See [Tools](/tools) and [TypeBox schemas](/concepts/typebox).

## macOS Specific Issues

### App Crashes when Granting Permissions (Speech/Mic)

If the app disappears or shows "Abort trap 6" when you click "Allow" on a privacy prompt:

**Fix 1: Reset TCC Cache**

```bash
tccutil reset All bot.molt.mac.debug
```

**Fix 2: Force New Bundle ID**
If resetting doesn't work, change the `BUNDLE_ID` in [`scripts/package-mac-app.sh`](https://github.com/GenSparx/GenSparx/blob/main/scripts/package-mac-app.sh) (e.g., add a `.test` suffix) and rebuild. This forces macOS to treat it as a new app.

### Gateway stuck on "Starting..."

The app connects to a local gateway on port `18789`. If it stays stuck:

**Fix 1: Stop the supervisor (preferred)**
If the gateway is supervised by launchd, killing the PID will just respawn it. Stop the supervisor first:

```bash
gensparx gateway status
gensparx gateway stop
# Or: launchctl bootout gui/$UID/bot.molt.gateway (replace with bot.molt.<profile>; legacy com.GenSparx.* still works)
```

Look for:

- Correct probe URL and dashboard URL.
- Auth mode/token mismatch between client and gateway.
- HTTP usage where device identity is required.

Common signatures:

- `device identity required` → non-secure context or missing device auth.
- `device nonce required` / `device nonce mismatch` → client is not completing the
  challenge-based device auth flow (`connect.challenge` + `device.nonce`).
- `device signature invalid` / `device signature expired` → client signed the wrong
  payload (or stale timestamp) for the current handshake.
- `unauthorized` / reconnect loop → token/password mismatch.
- `gateway connect failed:` → wrong host/port/url target.

**Fix 3: Check the CLI install**
Ensure the global `gensparx` CLI is installed and matches the app version:

```bash
gensparx --version
npm install -g gensparx@<version>
```

## Debug Mode

Get verbose logging:

```bash
# Turn on trace logging in config:
#   ${OPENCLAW_CONFIG_PATH:-\$HOME/.openclaw/openclaw.json} -> { logging: { level: "trace" } }
#
# Then run verbose commands to mirror debug output to stdout:
gensparx gateway --verbose
gensparx channels login --verbose
```

## Log Locations

| Log                               | Location                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gateway file logs (structured)    | `/tmp/GenSparx/GenSparx-YYYY-MM-DD.log` (or `logging.file`)                                                                                                                                                                                                                                                                 |
| Gateway service logs (supervisor) | macOS: `$OPENCLAW_STATE_DIR/logs/gateway.log` + `gateway.err.log` (default: `~/.openclaw/logs/...`; profiles use `~/.openclaw-<profile>/logs/...`)<br />Linux: `journalctl --user -u GenSparx-gateway[-<profile>].service -n 200 --no-pager`<br />Windows: `schtasks /Query /TN "GenSparx Gateway (<profile>)" /V /FO LIST` |
| Session files                     | `$OPENCLAW_STATE_DIR/agents/<agentId>/sessions/`                                                                                                                                                                                                                                                                            |
| Media cache                       | `$OPENCLAW_STATE_DIR/media/`                                                                                                                                                                                                                                                                                                |
| Credentials                       | `$OPENCLAW_STATE_DIR/credentials/`                                                                                                                                                                                                                                                                                          |

## Health Check

```bash
# Supervisor + probe target + config paths
gensparx gateway status
# Include system-level scans (legacy/extra services, port listeners)
gensparx gateway status --deep

# Is the gateway reachable?
gensparx health --json
# If it fails, rerun with connection details:
gensparx health --verbose

1. waits for `connect.challenge`
2. signs the challenge-bound payload
3. sends `connect.params.device.nonce` with the same challenge nonce

# Recent activity (RPC log tail)
gensparx logs --follow
# Fallback if RPC is down
tail -20 /tmp/GenSparx/GenSparx-*.log
```

Look for:

- `Runtime: stopped` with exit hints.
- Service config mismatch (`Config (cli)` vs `Config (service)`).
- Port/listener conflicts.

Common signatures:

- `Gateway start blocked: set gateway.mode=local` → local gateway mode is not enabled. Fix: set `gateway.mode="local"` in your config (or run `openclaw configure`). If you are running OpenClaw via Podman using the dedicated `openclaw` user, the config lives at `~openclaw/.openclaw/openclaw.json`.
- `refusing to bind gateway ... without auth` → non-loopback bind without token/password.
- `another gateway instance is already listening` / `EADDRINUSE` → port conflict.

Related:

- [/gateway/background-process](/gateway/background-process)
- [/gateway/configuration](/gateway/configuration)
- [/gateway/doctor](/gateway/doctor)

## Channel connected messages not flowing

If channel state is connected but message flow is dead, focus on policy, permissions, and channel specific delivery rules.

```bash
gensparx gateway stop
# If you installed a service and want a clean install:
# gensparx gateway uninstall

trash "${OPENCLAW_STATE_DIR:-\$HOME/.openclaw}"
gensparx channels login         # re-pair WhatsApp
gensparx gateway restart           # or: gensparx gateway
```

Look for:

- DM policy (`pairing`, `allowlist`, `open`, `disabled`).
- Group allowlist and mention requirements.
- Missing channel API permissions/scopes.

1. Check logs first: `/tmp/GenSparx/` (default: `GenSparx-YYYY-MM-DD.log`, or your configured `logging.file`)
2. Search existing issues on GitHub
3. Open a new issue with:
   - GenSparx version
   - Relevant log snippets
   - Steps to reproduce
   - Your config (redact secrets!)

- `mention required` → message ignored by group mention policy.
- `pairing` / pending approval traces → sender is not approved.
- `missing_scope`, `not_in_channel`, `Forbidden`, `401/403` → channel auth/permissions issue.

Related:

- [/channels/troubleshooting](/channels/troubleshooting)
- [/channels/whatsapp](/channels/whatsapp)
- [/channels/telegram](/channels/telegram)
- [/channels/discord](/channels/discord)

## Cron and heartbeat delivery

If cron or heartbeat did not run or did not deliver, verify scheduler state first, then delivery target.

```bash
openclaw cron status
openclaw cron list
openclaw cron runs --id <jobId> --limit 20
openclaw system heartbeat last
openclaw logs --follow
```

Look for:

- Cron enabled and next wake present.
- Job run history status (`ok`, `skipped`, `error`).
- Heartbeat skip reasons (`quiet-hours`, `requests-in-flight`, `alerts-disabled`).

Common signatures:

- `cron: scheduler disabled; jobs will not run automatically` → cron disabled.
- `cron: timer tick failed` → scheduler tick failed; check file/log/runtime errors.
- `heartbeat skipped` with `reason=quiet-hours` → outside active hours window.
- `heartbeat: unknown accountId` → invalid account id for heartbeat delivery target.
- `heartbeat skipped` with `reason=dm-blocked` → heartbeat target resolved to a DM-style destination while `agents.defaults.heartbeat.directPolicy` (or per-agent override) is set to `block`.

Related:

- [/automation/troubleshooting](/automation/troubleshooting)
- [/automation/cron-jobs](/automation/cron-jobs)
- [/gateway/heartbeat](/gateway/heartbeat)

## Node paired tool fails

If a node is paired but tools fail, isolate foreground, permission, and approval state.

```bash
openclaw nodes status
openclaw nodes describe --node <idOrNameOrIp>
openclaw approvals get --node <idOrNameOrIp>
openclaw logs --follow
openclaw status
```

**Full guide:** See [browser-linux-troubleshooting](/tools/browser-linux-troubleshooting)




