---
summary: "Gateway runtime on macOS (external launchd service)"
read_when:
  - Packaging Gensparx.app
  - Debugging the macOS gateway launchd service
  - Installing the gateway CLI for macOS
title: "Gateway on macOS"
---

# Gateway on macOS (external launchd)

Gensparx.app no longer bundles Node/Bun or the Gateway runtime. The macOS app
expects an **external** `gensparx` CLI install, does not spawn the Gateway as a
child process, and manages a per‑user launchd service to keep the Gateway
running (or attaches to an existing local Gateway if one is already running).

## Install the CLI (required for local mode)

You need Node 22+ on the Mac, then install `gensparx` globally:

```bash
npm install -g gensparx@<version>
```

The macOS app’s **Install CLI** button runs the same flow via npm/pnpm (bun not recommended for Gateway runtime).

## Launchd (Gateway as LaunchAgent)

Label:

- `ai.gensparx.gateway` (or `ai.gensparx.<profile>`; legacy `com.gensparx.*` may remain)

Plist location (per‑user):

- `~/Library/LaunchAgents/ai.gensparx.gateway.plist`
  (or `~/Library/LaunchAgents/ai.gensparx.<profile>.plist`)

Manager:

- The macOS app owns LaunchAgent install/update in Local mode.
- The CLI can also install it: `gensparx gateway install`.

Behavior:

- “gensparx Active” enables/disables the LaunchAgent.
- App quit does **not** stop the gateway (launchd keeps it alive).
- If a Gateway is already running on the configured port, the app attaches to
  it instead of starting a new one.

Logging:

- launchd stdout/err: `/tmp/gensparx/gensparx-gateway.log`

## Version compatibility

The macOS app checks the gateway version against its own version. If they’re
incompatible, update the global CLI to match the app version.

## Smoke check

```bash
gensparx --version

GENSPARX_SKIP_CHANNELS=1 \
GENSPARX_SKIP_CANVAS_HOST=1 \
gensparx gateway --port 18999 --bind loopback
```

Then:

```bash
gensparx gateway call health --url ws://127.0.0.1:18999 --timeout 3000
```
