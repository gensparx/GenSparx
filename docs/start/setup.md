---
summary: "Advanced setup and development workflows for Gensparx"
read_when:
  - Setting up a new machine
  - You want “latest + greatest” without breaking your personal setup
title: "Setup"
---

# Setup

<Note>
If you are setting up for the first time, start with [Getting Started](/start/getting-started).
For wizard details, see [Onboarding Wizard](/start/wizard).
</Note>

Last updated: 2026-01-01

## TL;DR

- **Tailoring lives outside the repo:** `~/.gensparx/workspace` (workspace) + `~/.gensparx/gensparx.json` (config).
- **Stable workflow:** install the macOS app; let it run the bundled Gateway.
- **Bleeding edge workflow:** run the Gateway yourself via `pnpm gateway:watch`, then let the macOS app attach in Local mode.

## Prereqs (from source)

- Node `>=22`
- `pnpm`
- Docker (optional; only for containerized setup/e2e — see [Docker](/install/docker))

## Tailoring strategy (so updates don’t hurt)

If you want “100% tailored to me” _and_ easy updates, keep your customization in:

- **Config:** `~/.gensparx/gensparx.json` (JSON/JSON5-ish)
- **Workspace:** `~/.gensparx/workspace` (skills, prompts, memories; make it a private git repo)

Bootstrap once:

```bash
gensparx setup
```

From inside this repo, use the local CLI entry:

```bash
gensparx setup
```

If you don’t have a global install yet, run it via `pnpm gensparx setup`.

## Run the Gateway from this repo

After `pnpm build`, you can run the packaged CLI directly:

```bash
node gensparx.mjs gateway --port 18789 --verbose
```

## Stable workflow (macOS app first)

1. Install + launch **Gensparx.app** (menu bar).
2. Complete the onboarding/permissions checklist (TCC prompts).
3. Ensure Gateway is **Local** and running (the app manages it).
4. Link surfaces (example: WhatsApp):

```bash
gensparx channels login
```

5. Sanity check:

```bash
gensparx health
```

If onboarding is not available in your build:

- Run `gensparx setup`, then `gensparx channels login`, then start the Gateway manually (`gensparx gateway`).

## Bleeding edge workflow (Gateway in a terminal)

Goal: work on the TypeScript Gateway, get hot reload, keep the macOS app UI attached.

### 0) (Optional) Run the macOS app from source too

If you also want the macOS app on the bleeding edge:

```bash
./scripts/restart-mac.sh
```

### 1) Start the dev Gateway

```bash
pnpm install
pnpm gateway:watch
```

`gateway:watch` runs the gateway in watch mode and reloads on TypeScript changes.

### 2) Point the macOS app at your running Gateway

In **Gensparx.app**:

- Connection Mode: **Local**
  The app will attach to the running gateway on the configured port.

### 3) Verify

- In-app Gateway status should read **“Using existing gateway …”**
- Or via CLI:

```bash
gensparx health
```

### Common footguns

- **Wrong port:** Gateway WS defaults to `ws://127.0.0.1:18789`; keep app + CLI on the same port.
- **Where state lives:**
  - Credentials: `~/.gensparx/credentials/`
  - Sessions: `~/.gensparx/agents/<agentId>/sessions/`
  - Logs: `/tmp/gensparx/`

## Credential storage map

Use this when debugging auth or deciding what to back up:

- **WhatsApp**: `~/.gensparx/credentials/whatsapp/<accountId>/creds.json`
- **Telegram bot token**: config/env or `channels.telegram.tokenFile`
- **Discord bot token**: config/env or SecretRef (env/file/exec providers)
- **Slack tokens**: config/env (`channels.slack.*`)
- **Pairing allowlists**:
  - `~/.gensparx/credentials/<channel>-allowFrom.json` (default account)
  - `~/.gensparx/credentials/<channel>-<accountId>-allowFrom.json` (non-default accounts)
- **Model auth profiles**: `~/.gensparx/agents/<agentId>/agent/auth-profiles.json`
- **File-backed secrets payload (optional)**: `~/.gensparx/secrets.json`
- **Legacy OAuth import**: `~/.gensparx/credentials/oauth.json`
  More detail: [Security](/gateway/security#credential-storage-map).

## Updating (without wrecking your setup)

- Keep `~/.gensparx/workspace` and `~/.gensparx/` as “your stuff”; don’t put personal prompts/config into the `gensparx` repo.
- Updating source: `git pull` + `pnpm install` (when lockfile changed) + keep using `pnpm gateway:watch`.

## Linux (systemd user service)

Linux installs use a systemd **user** service. By default, systemd stops user
services on logout/idle, which kills the Gateway. Onboarding attempts to enable
lingering for you (may prompt for sudo). If it’s still off, run:

```bash
sudo loginctl enable-linger $USER
```

For always-on or multi-user servers, consider a **system** service instead of a
user service (no lingering needed). See [Gateway runbook](/gateway) for the systemd notes.

## Related docs

- [Gateway runbook](/gateway) (flags, supervision, ports)
- [Gateway configuration](/gateway/configuration) (config schema + examples)
- [Discord](/channels/discord) and [Telegram](/channels/telegram) (reply tags + replyToMode settings)
- [gensparx assistant setup](/start/gensparx)
- [macOS app](/platforms/macos) (gateway lifecycle)
