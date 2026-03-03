# GenSparx - Personal AI Assistant

<p align="center">
  <img src="https://raw.githubusercontent.com/gensparx/GenSparx/main/docs/assets/gensparx-logo-text.png" alt="GenSparx" width="500">
</p>

<p align="center">
  <strong>Your personal multi-channel AI assistant.</strong>
</p>

<p align="center">
  <a href="https://github.com/gensparx/GenSparx/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/gensparx/GenSparx/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/gensparx/GenSparx/releases"><img src="https://img.shields.io/github/v/release/gensparx/GenSparx?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://github.com/gensparx/GenSparx"><img src="https://img.shields.io/github/stars/gensparx/GenSparx?style=for-the-badge" alt="GitHub stars"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

---

**GenSparx** is a _personal AI assistant_ you run on your own devices. It answers you on the channels you already use (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, WebChat), plus extension channels like BlueBubbles, Matrix, Zalo, and Zalo Personal. It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane - the product is the assistant.

If you want a personal, single-user assistant that feels local, fast, and always-on, this is it.

---

## 🔗 Quick Links

[Repo](https://github.com/gensparx/GenSparx) · [Website](https://gensparx.com) · [Docs](https://docs.gensparx.com) · [Getting Started](https://docs.gensparx.com/start/getting-started) · [Updating](https://docs.gensparx.com/install/updating) · [Showcase](https://docs.gensparx.com/start/showcase) · [FAQ](https://docs.gensparx.com/start/faq) · [Wizard](https://docs.gensparx.com/start/wizard) · [Docker](https://docs.gensparx.com/install/docker)

---

## 📦 Install (Recommended)

Runtime: **Node ≥22**.

```bash
npm install -g gensparx@latest
# or: pnpm add -g gensparx@latest

gensparx onboard --install-daemon
```

The wizard installs the Gateway daemon (launchd/systemd user service) so it stays running.

Preferred setup: run the onboarding wizard (`gensparx onboard`). It walks through gateway, workspace, channels, and skills. The CLI wizard is the recommended path and works on **macOS, Linux, and Windows (via WSL2; strongly recommended)**. Works with npm, pnpm, or bun.

New install? Start here: [Getting started](https://docs.gensparx.com/start/getting-started)

---

## ⚡ Quick Start (TL;DR)

Runtime: **Node ≥22**.

Full beginner guide (auth, pairing, channels): [Getting started](https://docs.gensparx.com/start/getting-started)

```bash
gensparx onboard --install-daemon

gensparx gateway --port 18789 --verbose

# Send a message
gensparx message send --to +1234567890 --message "Hello from GenSparx"

# Talk to the assistant (optionally deliver back to any connected channel: WhatsApp/Telegram/Slack/Discord/Google Chat/Signal/iMessage/BlueBubbles/Microsoft Teams/Matrix/Zalo/Zalo Personal/WebChat)
gensparx agent --message "Ship checklist" --thinking high
```

Upgrading? [Updating guide](https://docs.gensparx.com/install/updating) (and run `gensparx doctor`).

---

## 🤖 Models (Selection + Auth)

- Models config + CLI: [Models](https://docs.gensparx.com/concepts/models)
- Auth profile rotation (OAuth vs API keys) + fallbacks: [Model failover](https://docs.gensparx.com/concepts/model-failover)

---

## 🏗️ From Source (Development)

Prefer `pnpm` for builds from source. Bun is optional for running TypeScript directly.

```bash
git clone https://github.com/gensparx/GenSparx.git
cd gensparx

pnpm install
pnpm ui:build # auto-installs UI deps on first run
pnpm build

pnpm gensparx onboard --install-daemon

# Dev loop (auto-reload on TS changes)
pnpm gateway:watch
```

Note: `pnpm gensparx ...` runs TypeScript directly (via `tsx`). `pnpm build` produces `dist/` for running via Node / the packaged `gensparx` binary.

---

## 🔄 Development Channels

- **stable**: tagged releases (`vYYYY.M.D` or `vYYYY.M.D-<patch>`), npm dist-tag `latest`.
- **beta**: prerelease tags (`vYYYY.M.D-beta.N`), npm dist-tag `beta` (macOS app may be missing).
- **dev**: moving head of `main`, npm dist-tag `dev` (when published).

Switch channels (git + npm): `gensparx update --channel stable|beta|dev`.  
Details: [Development channels](https://docs.gensparx.com/install/development-channels).

---

## 🔒 Security Defaults (DM Access)

GenSparx connects to real messaging surfaces. Treat inbound DMs as **untrusted input**.

Full security guide: [Security](https://docs.gensparx.com/gateway/security)

Default behavior on Telegram/WhatsApp/Signal/iMessage/Microsoft Teams/Discord/Google Chat/Slack:

- **DM pairing** (`dmPolicy="pairing"` / `channels.discord.dm.policy="pairing"` / `channels.slack.dm.policy="pairing"`): unknown senders receive a short pairing code and the bot does not process their message.
- Approve with: `gensparx pairing approve <channel> <code>` (then the sender is added to a local allowlist store).
- Public inbound DMs require an explicit opt-in: set `dmPolicy="open"` and include `"*"` in the channel allowlist (`allowFrom` / `channels.discord.dm.allowFrom` / `channels.slack.dm.allowFrom`).

Run `gensparx doctor` to surface risky/misconfigured DM policies.

---

## ✨ Highlights

- **[Local-first Gateway](https://docs.gensparx.com/gateway)** — single control plane for sessions, channels, tools, and events.
- **[Multi-channel inbox](https://docs.gensparx.com/channels)** — WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, BlueBubbles (iMessage), iMessage (legacy), Microsoft Teams, Matrix, Zalo, Zalo Personal, WebChat, macOS, iOS/Android.
- **[Multi-agent routing](https://docs.gensparx.com/gateway/configuration)** — route inbound channels/accounts/peers to isolated agents (workspaces + per-agent sessions).
- **[Voice Wake](https://docs.gensparx.com/nodes/voicewake) + [Talk Mode](https://docs.gensparx.com/nodes/talk)** — always-on speech for macOS/iOS/Android with ElevenLabs.
- **[Live Canvas](https://docs.gensparx.com/platforms/mac/canvas)** — agent-driven visual workspace with [A2UI](https://docs.gensparx.com/platforms/mac/canvas#canvas-a2ui).
- **[First-class tools](https://docs.gensparx.com/tools)** — browser, canvas, nodes, cron, sessions, and Discord/Slack actions.
- **[Companion apps](https://docs.gensparx.com/platforms/macos)** — macOS menu bar app + iOS/Android [nodes](https://docs.gensparx.com/nodes).
- **[Onboarding](https://docs.gensparx.com/start/wizard) + [skills](https://docs.gensparx.com/tools/skills)** — wizard-driven setup with bundled/managed/workspace skills.

---

## 🗺️ How It Works (Short)

```
WhatsApp / Telegram / Slack / Discord / Google Chat / Signal / iMessage / BlueBubbles / Microsoft Teams / Matrix / Zalo / Zalo Personal / WebChat
               │
               ▼
┌───────────────────────────────┐
│            Gateway            │
│       (control plane)         │
│     ws://127.0.0.1:18789      │
└──────────────┬────────────────┘
               │
               ├─ Pi agent (RPC)
               ├─ CLI (gensparx …)
               ├─ WebChat UI
               ├─ macOS app
               └─ iOS / Android nodes
```

---

## 🔑 Key Subsystems

- **[Gateway WebSocket network](https://docs.gensparx.com/concepts/architecture)** — single WS control plane for clients, tools, and events (plus ops: [Gateway runbook](https://docs.gensparx.com/gateway)).
- **[Tailscale exposure](https://docs.gensparx.com/gateway/tailscale)** — Serve/Funnel for the Gateway dashboard + WS (remote access: [Remote](https://docs.gensparx.com/gateway/remote)).
- **[Browser control](https://docs.gensparx.com/tools/browser)** — gensparx‑managed Chrome/Chromium with CDP control.
- **[Canvas + A2UI](https://docs.gensparx.com/platforms/mac/canvas)** — agent‑driven visual workspace (A2UI host: [Canvas/A2UI](https://docs.gensparx.com/platforms/mac/canvas#canvas-a2ui)).
- **[Voice Wake](https://docs.gensparx.com/nodes/voicewake) + [Talk Mode](https://docs.gensparx.com/nodes/talk)** — always‑on speech and continuous conversation.
- **[Nodes](https://docs.gensparx.com/nodes)** — Canvas, camera snap/clip, screen record, `location.get`, notifications, plus macOS‑only `system.run`/`system.notify`.

---

## 💬 Chat Commands

Send these in WhatsApp/Telegram/Slack/Google Chat/Microsoft Teams/WebChat (group commands are owner-only):

| Command                       | Description                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| `/status`                     | compact session status (model + tokens, cost when available)         |
| `/new` or `/reset`            | reset the session                                                    |
| `/compact`                    | compact session context (summary)                                    |
| `/think <level>`              | off\|minimal\|low\|medium\|high\|xhigh (GPT-5.2 + Codex models only) |
| `/verbose on\|off`            | toggle verbose mode                                                  |
| `/usage off\|tokens\|full`    | per-response usage footer                                            |
| `/restart`                    | restart the gateway (owner-only in groups)                           |
| `/activation mention\|always` | group activation toggle (groups only)                                |

---

## ⚙️ Configuration

Minimal `~/.gensparx/gensparx.json` (model + defaults):

```json5
{
  agent: {
    model: "anthropic/claude-opus-4-6",
  },
}
```

[Full configuration reference (all keys + examples).](https://docs.gensparx.com/gateway/configuration)

---

## 🌐 Channel Setup

### [WhatsApp](https://docs.gensparx.com/channels/whatsapp)

- Link the device: `pnpm gensparx channels login` (stores creds in `~/.gensparx/credentials`).
- Allowlist who can talk to the assistant via `channels.whatsapp.allowFrom`.
- If `channels.whatsapp.groups` is set, it becomes a group allowlist; include `"*"` to allow all.

### [Telegram](https://docs.gensparx.com/channels/telegram)

- Set `TELEGRAM_BOT_TOKEN` or `channels.telegram.botToken` (env wins).
- Optional: set `channels.telegram.groups` (with `channels.telegram.groups."*".requireMention`); when set, it is a group allowlist (include `"*"` to allow all). Also `channels.telegram.allowFrom` or `channels.telegram.webhookUrl` + `channels.telegram.webhookSecret` as needed.

```json5
{
  channels: {
    telegram: {
      botToken: "123456:ABCDEF",
    },
  },
}
```

### [Slack](https://docs.gensparx.com/channels/slack)

- Set `SLACK_BOT_TOKEN` + `SLACK_APP_TOKEN` (or `channels.slack.botToken` + `channels.slack.appToken`).

### [Discord](https://docs.gensparx.com/channels/discord)

- Set `DISCORD_BOT_TOKEN` or `channels.discord.token` (env wins).
- Optional: set `commands.native`, `commands.text`, or `commands.useAccessGroups`, plus `channels.discord.allowFrom`, `channels.discord.guilds`, or `channels.discord.mediaMaxMb` as needed.

```json5
{
  channels: {
    discord: {
      token: "1234abcd",
    },
  },
}
```

### [Signal](https://docs.gensparx.com/channels/signal)

- Requires `signal-cli` and a `channels.signal` config section.

### [BlueBubbles (iMessage)](https://docs.gensparx.com/channels/bluebubbles)

- **Recommended** iMessage integration.
- Configure `channels.bluebubbles.serverUrl` + `channels.bluebubbles.password` and a webhook (`channels.bluebubbles.webhookPath`).
- The BlueBubbles server runs on macOS; the Gateway can run on macOS or elsewhere.

### [iMessage (legacy)](https://docs.gensparx.com/channels/imessage)

- Legacy macOS-only integration via `imsg` (Messages must be signed in).
- If `channels.imessage.groups` is set, it becomes a group allowlist; include `"*"` to allow all.

### [Microsoft Teams](https://docs.gensparx.com/channels/msteams)

- Configure a Teams app + Bot Framework, then add a `msteams` config section.
- Allowlist who can talk via `msteams.allowFrom`; group access via `msteams.groupAllowFrom` or `msteams.groupPolicy: "open"`.

### [WebChat](https://docs.gensparx.com/web/webchat)

- Uses the Gateway WebSocket; no separate WebChat port/config.

Browser control (optional):

```json5
{
  browser: {
    enabled: true,
    color: "#FF4500",
  },
}
```

---

## 🌍 Tailscale Access (Gateway Dashboard)

GenSparx can auto-configure Tailscale **Serve** (tailnet-only) or **Funnel** (public) while the Gateway stays bound to loopback. Configure `gateway.tailscale.mode`:

- `off`: no Tailscale automation (default).
- `serve`: tailnet-only HTTPS via `tailscale serve` (uses Tailscale identity headers by default).
- `funnel`: public HTTPS via `tailscale funnel` (requires shared password auth).

Notes:

- `gateway.bind` must stay `loopback` when Serve/Funnel is enabled (GenSparx enforces this).
- Serve can be forced to require a password by setting `gateway.auth.mode: "password"` or `gateway.auth.allowTailscale: false`.
- Funnel refuses to start unless `gateway.auth.mode: "password"` is set.
- Optional: `gateway.tailscale.resetOnExit` to undo Serve/Funnel on shutdown.

Details: [Tailscale guide](https://docs.gensparx.com/gateway/tailscale) · [Web surfaces](https://docs.gensparx.com/web)

---

## 🖥️ Remote Gateway (Linux is great)

It's perfectly fine to run the Gateway on a small Linux instance. Clients (macOS app, CLI, WebChat) can connect over **Tailscale Serve/Funnel** or **SSH tunnels**, and you can still pair device nodes (macOS/iOS/Android) to execute device‑local actions when needed.

- **Gateway host** runs the exec tool and channel connections by default.
- **Device nodes** run device‑local actions (`system.run`, camera, screen recording, notifications) via `node.invoke`.

In short: exec runs where the Gateway lives; device actions run where the device lives.

Details: [Remote access](https://docs.gensparx.com/gateway/remote) · [Nodes](https://docs.gensparx.com/nodes) · [Security](https://docs.gensparx.com/gateway/security)

---

## 🍎 macOS Permissions via the Gateway Protocol

The macOS app can run in **node mode** and advertises its capabilities + permission map over the Gateway WebSocket (`node.list` / `node.describe`). Clients can then execute local actions via `node.invoke`:

- `system.run` runs a local command and returns stdout/stderr/exit code; set `needsScreenRecording: true` to require screen-recording permission (otherwise you'll get `PERMISSION_MISSING`).
- `system.notify` posts a user notification and fails if notifications are denied.
- `canvas.*`, `camera.*`, `screen.record`, and `location.get` are also routed via `node.invoke` and follow TCC permission status.

Elevated bash (host permissions) is separate from macOS TCC:

- Use `/elevated on|off` to toggle per‑session elevated access when enabled + allowlisted.
- Gateway persists the per‑session toggle via `sessions.patch` (WS method) alongside `thinkingLevel`, `verboseLevel`, `model`, `sendPolicy`, and `groupActivation`.

Details: [Nodes](https://docs.gensparx.com/nodes) · [macOS app](https://docs.gensparx.com/platforms/macos) · [Gateway protocol](https://docs.gensparx.com/concepts/architecture)

---

## 🤝 Agent to Agent (sessions\_\* Tools)

- Use these to coordinate work across sessions without jumping between chat surfaces.
- `sessions_list` — discover active sessions (agents) and their metadata.
- `sessions_history` — fetch transcript logs for a session.
- `sessions_send` — message another session; optional reply‑back ping‑pong + announce step (`REPLY_SKIP`, `ANNOUNCE_SKIP`).

Details: [Session tools](https://docs.gensparx.com/concepts/session-tool)

---

## 🧠 Skills Registry (ClawHub)

ClawHub is a minimal skill registry. With ClawHub enabled, the agent can search for skills automatically and pull in new ones as needed.

[ClawHub](https://clawhub.com)

---

## 📱 Apps (Optional)

The Gateway alone delivers a great experience. All apps are optional and add extra features.

If you plan to build/run companion apps, follow the platform runbooks below.

### macOS (GenSparx.app) (optional)

- Menu bar control for the Gateway and health.
- Voice Wake + push-to-talk overlay.
- WebChat + debug tools.
- Remote gateway control over SSH.

Note: signed builds required for macOS permissions to stick across rebuilds (see `docs/mac/permissions.md`).

### iOS node (optional)

- Pairs as a node via the Bridge.
- Voice trigger forwarding + Canvas surface.
- Controlled via `gensparx nodes …`.

Runbook: [iOS connect](https://docs.gensparx.com/platforms/ios).

### Android node (optional)

- Pairs via the same Bridge + pairing flow as iOS.
- Exposes Canvas, Camera, and Screen capture commands.
- Runbook: [Android connect](https://docs.gensparx.com/platforms/android).

---

## 🔐 Security Model (Important)

- **Default:** tools run on the host for the **main** session, so the agent has full access when it's just you.
- **Group/channel safety:** set `agents.defaults.sandbox.mode: "non-main"` to run **non‑main sessions** (groups/channels) inside per‑session Docker sandboxes; bash then runs in Docker for those sessions.
- **Sandbox defaults:** allowlist `bash`, `process`, `read`, `write`, `edit`, `sessions_list`, `sessions_history`, `sessions_send`, `sessions_spawn`; denylist `browser`, `canvas`, `nodes`, `cron`, `discord`, `gateway`.

Details: [Security guide](https://docs.gensparx.com/gateway/security) · [Docker + sandboxing](https://docs.gensparx.com/install/docker) · [Sandbox config](https://docs.gensparx.com/gateway/configuration)

---

## 🗂️ Agent Workspace + Skills

- Workspace root: `~/.gensparx/workspace` (configurable via `agents.defaults.workspace`).
- Injected prompt files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`.
- Skills: `~/.gensparx/workspace/skills/<skill>/SKILL.md`.

---

## 🏭 Everything We Built So Far

### Core Platform

- [Gateway WS control plane](https://docs.gensparx.com/gateway) with sessions, presence, config, cron, webhooks, [Control UI](https://docs.gensparx.com/web), and [Canvas host](https://docs.gensparx.com/platforms/mac/canvas#canvas-a2ui).
- [CLI surface](https://docs.gensparx.com/tools/agent-send): gateway, agent, send, [wizard](https://docs.gensparx.com/start/wizard), and [doctor](https://docs.gensparx.com/gateway/doctor).
- [Pi agent runtime](https://docs.gensparx.com/concepts/agent) in RPC mode with tool streaming and block streaming.
- [Session model](https://docs.gensparx.com/concepts/session): `main` for direct chats, group isolation, activation modes, queue modes, reply-back. Group rules: [Groups](https://docs.gensparx.com/concepts/groups).
- [Media pipeline](https://docs.gensparx.com/nodes/images): images/audio/video, transcription hooks, size caps, temp file lifecycle. Audio details: [Audio](https://docs.gensparx.com/nodes/audio).

### Channels

- [Channels](https://docs.gensparx.com/channels): [WhatsApp](https://docs.gensparx.com/channels/whatsapp) (Baileys), [Telegram](https://docs.gensparx.com/channels/telegram) (grammY), [Slack](https://docs.gensparx.com/channels/slack) (Bolt), [Discord](https://docs.gensparx.com/channels/discord) (discord.js), [Google Chat](https://docs.gensparx.com/channels/googlechat) (Chat API), [Signal](https://docs.gensparx.com/channels/signal) (signal-cli), [BlueBubbles](https://docs.gensparx.com/channels/bluebubbles) (iMessage, recommended), [iMessage](https://docs.gensparx.com/channels/imessage) (legacy imsg), [Microsoft Teams](https://docs.gensparx.com/channels/msteams) (extension), [Matrix](https://docs.gensparx.com/channels/matrix) (extension), [Zalo](https://docs.gensparx.com/channels/zalo) (extension), [Zalo Personal](https://docs.gensparx.com/channels/zalouser) (extension), [WebChat](https://docs.gensparx.com/web/webchat).
- [Group routing](https://docs.gensparx.com/concepts/group-messages): mention gating, reply tags, per-channel chunking and routing. Channel rules: [Channels](https://docs.gensparx.com/channels).

### Apps + Nodes

- [macOS app](https://docs.gensparx.com/platforms/macos): menu bar control plane, [Voice Wake](https://docs.gensparx.com/nodes/voicewake)/PTT, [Talk Mode](https://docs.gensparx.com/nodes/talk) overlay, [WebChat](https://docs.gensparx.com/web/webchat), debug tools, [remote gateway](https://docs.gensparx.com/gateway/remote) control.
- [iOS node](https://docs.gensparx.com/platforms/ios): [Canvas](https://docs.gensparx.com/platforms/mac/canvas), [Voice Wake](https://docs.gensparx.com/nodes/voicewake), [Talk Mode](https://docs.gensparx.com/nodes/talk), camera, screen recording, Bonjour pairing.
- [Android node](https://docs.gensparx.com/platforms/android): [Canvas](https://docs.gensparx.com/platforms/mac/canvas), [Talk Mode](https://docs.gensparx.com/nodes/talk), camera, screen recording, optional SMS.
- [macOS node mode](https://docs.gensparx.com/nodes): system.run/notify + canvas/camera exposure.

### Tools + Automation

- [Browser control](https://docs.gensparx.com/tools/browser): dedicated gensparx Chrome/Chromium, snapshots, actions, uploads, profiles.
- [Canvas](https://docs.gensparx.com/platforms/mac/canvas): [A2UI](https://docs.gensparx.com/platforms/mac/canvas#canvas-a2ui) push/reset, eval, snapshot.
- [Nodes](https://docs.gensparx.com/nodes): camera snap/clip, screen record, [location.get](https://docs.gensparx.com/nodes/location-command), notifications.
- [Cron + wakeups](https://docs.gensparx.com/automation/cron-jobs); [webhooks](https://docs.gensparx.com/automation/webhook); [Gmail Pub/Sub](https://docs.gensparx.com/automation/gmail-pubsub).
- [Skills platform](https://docs.gensparx.com/tools/skills): bundled, managed, and workspace skills with install gating + UI.

### Runtime + Safety

- [Channel routing](https://docs.gensparx.com/concepts/channel-routing), [retry policy](https://docs.gensparx.com/concepts/retry), and [streaming/chunking](https://docs.gensparx.com/concepts/streaming).
- [Presence](https://docs.gensparx.com/concepts/presence), [typing indicators](https://docs.gensparx.com/concepts/typing-indicators), and [usage tracking](https://docs.gensparx.com/concepts/usage-tracking).
- [Models](https://docs.gensparx.com/concepts/models), [model failover](https://docs.gensparx.com/concepts/model-failover), and [session pruning](https://docs.gensparx.com/concepts/session-pruning).
- [Security](https://docs.gensparx.com/gateway/security) and [troubleshooting](https://docs.gensparx.com/channels/troubleshooting).

### Ops + Packaging

- [Control UI](https://docs.gensparx.com/web) + [WebChat](https://docs.gensparx.com/web/webchat) served directly from the Gateway.
- [Tailscale Serve/Funnel](https://docs.gensparx.com/gateway/tailscale) or [SSH tunnels](https://docs.gensparx.com/gateway/remote) with token/password auth.
- [Nix mode](https://docs.gensparx.com/install/nix) for declarative config; [Docker](https://docs.gensparx.com/install/docker)-based installs.
- [Doctor](https://docs.gensparx.com/gateway/doctor) migrations, [logging](https://docs.gensparx.com/logging).

---

## 📚 Documentation

Use these when you're past the onboarding flow and want the deeper reference.

- [Start with the docs index for navigation and "what's where."](https://docs.gensparx.com)
- [Read the architecture overview for the gateway + protocol model.](https://docs.gensparx.com/concepts/architecture)
- [Use the full configuration reference when you need every key and example.](https://docs.gensparx.com/gateway/configuration)
- [Run the Gateway by the book with the operational runbook.](https://docs.gensparx.com/gateway)
- [Learn how the Control UI/Web surfaces work and how to expose them safely.](https://docs.gensparx.com/web)
- [Understand remote access over SSH tunnels or tailnets.](https://docs.gensparx.com/gateway/remote)
- [Follow the onboarding wizard flow for a guided setup.](https://docs.gensparx.com/start/wizard)
- [Wire external triggers via the webhook surface.](https://docs.gensparx.com/automation/webhook)
- [Set up Gmail Pub/Sub triggers.](https://docs.gensparx.com/automation/gmail-pubsub)
- [Learn the macOS menu bar companion details.](https://docs.gensparx.com/platforms/mac/menu-bar)
- Platform guides: [Windows (WSL2)](https://docs.gensparx.com/platforms/windows), [Linux](https://docs.gensparx.com/platforms/linux), [macOS](https://docs.gensparx.com/platforms/macos), [iOS](https://docs.gensparx.com/platforms/ios), [Android](https://docs.gensparx.com/platforms/android)
- [Debug common failures with the troubleshooting guide.](https://docs.gensparx.com/channels/troubleshooting)
- [Review security guidance before exposing anything.](https://docs.gensparx.com/gateway/security)

### Advanced Docs (Discovery + Control)

- [Discovery + transports](https://docs.gensparx.com/gateway/discovery)
- [Bonjour/mDNS](https://docs.gensparx.com/gateway/bonjour)
- [Gateway pairing](https://docs.gensparx.com/gateway/pairing)
- [Remote gateway README](https://docs.gensparx.com/gateway/remote-gateway-readme)
- [Control UI](https://docs.gensparx.com/web/control-ui)
- [Dashboard](https://docs.gensparx.com/web/dashboard)

### Operations & Troubleshooting

- [Health checks](https://docs.gensparx.com/gateway/health)
- [Gateway lock](https://docs.gensparx.com/gateway/gateway-lock)
- [Background process](https://docs.gensparx.com/gateway/background-process)
- [Browser troubleshooting (Linux)](https://docs.gensparx.com/tools/browser-linux-troubleshooting)
- [Logging](https://docs.gensparx.com/logging)

### Deep Dives

- [Agent loop](https://docs.gensparx.com/concepts/agent-loop)
- [Presence](https://docs.gensparx.com/concepts/presence)
- [TypeBox schemas](https://docs.gensparx.com/concepts/typebox)
- [RPC adapters](https://docs.gensparx.com/reference/rpc)
- [Queue](https://docs.gensparx.com/concepts/queue)

### Workspace & Skills

- [Skills config](https://docs.gensparx.com/tools/skills-config)
- [Default AGENTS](https://docs.gensparx.com/reference/AGENTS.default)
- [Templates: AGENTS](https://docs.gensparx.com/reference/templates/AGENTS)
- [Templates: BOOTSTRAP](https://docs.gensparx.com/reference/templates/BOOTSTRAP)
- [Templates: IDENTITY](https://docs.gensparx.com/reference/templates/IDENTITY)
- [Templates: SOUL](https://docs.gensparx.com/reference/templates/SOUL)
- [Templates: TOOLS](https://docs.gensparx.com/reference/templates/TOOLS)
- [Templates: USER](https://docs.gensparx.com/reference/templates/USER)

### Platform Internals

- [macOS dev setup](https://docs.gensparx.com/platforms/mac/dev-setup)
- [macOS menu bar](https://docs.gensparx.com/platforms/mac/menu-bar)
- [macOS voice wake](https://docs.gensparx.com/platforms/mac/voicewake)
- [iOS node](https://docs.gensparx.com/platforms/ios)
- [Android node](https://docs.gensparx.com/platforms/android)
- [Windows (WSL2)](https://docs.gensparx.com/platforms/windows)
- [Linux app](https://docs.gensparx.com/platforms/linux)

### Email Hooks (Gmail)

- [docs.gensparx.com/gmail-pubsub](https://docs.gensparx.com/automation/gmail-pubsub)
