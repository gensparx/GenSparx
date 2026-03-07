---
summary: "Uninstall gensparx completely (CLI, service, state, workspace)"
read_when:
  - You want to remove gensparx from a machine
  - The gateway service is still running after uninstall
title: "Uninstall"
---

# Uninstall

Two paths:

- **Easy path** if `gensparx` is still installed.
- **Manual service removal** if the CLI is gone but the service is still running.

## Easy path (CLI still installed)

Recommended: use the built-in uninstaller:

```bash
gensparx uninstall
```

Non-interactive (automation / npx):

```bash
gensparx uninstall --all --yes --non-interactive
npx -y gensparx uninstall --all --yes --non-interactive
```

Manual steps (same result):

1. Stop the gateway service:

```bash
gensparx gateway stop
```

2. Uninstall the gateway service (launchd/systemd/schtasks):

```bash
gensparx gateway uninstall
```

3. Delete state + config:

```bash
rm -rf "${GENSPARX_STATE_DIR:-$HOME/.gensparx}"
```

If you set `GENSPARX_CONFIG_PATH` to a custom location outside the state dir, delete that file too.

4. Delete your workspace (optional, removes agent files):

```bash
rm -rf ~/.gensparx/workspace
```

5. Remove the CLI install (pick the one you used):

```bash
npm rm -g gensparx
pnpm remove -g gensparx
bun remove -g gensparx
```

6. If you installed the macOS app:

```bash
rm -rf /Applications/Gensparx.app
```

Notes:

- If you used profiles (`--profile` / `GENSPARX_PROFILE`), repeat step 3 for each state dir (defaults are `~/.gensparx-<profile>`).
- In remote mode, the state dir lives on the **gateway host**, so run steps 1-4 there too.

## Manual service removal (CLI not installed)

Use this if the gateway service keeps running but `gensparx` is missing.

### macOS (launchd)

Default label is `ai.gensparx.gateway` (or `ai.gensparx.<profile>`; legacy `com.gensparx.*` may still exist):

```bash
launchctl bootout gui/$UID/ai.gensparx.gateway
rm -f ~/Library/LaunchAgents/ai.gensparx.gateway.plist
```

If you used a profile, replace the label and plist name with `ai.gensparx.<profile>`. Remove any legacy `com.gensparx.*` plists if present.

### Linux (systemd user unit)

Default unit name is `gensparx-gateway.service` (or `gensparx-gateway-<profile>.service`):

```bash
systemctl --user disable --now gensparx-gateway.service
rm -f ~/.config/systemd/user/gensparx-gateway.service
systemctl --user daemon-reload
```

### Windows (Scheduled Task)

Default task name is `gensparx Gateway` (or `gensparx Gateway (<profile>)`).
The task script lives under your state dir.

```powershell
schtasks /Delete /F /TN "gensparx Gateway"
Remove-Item -Force "$env:USERPROFILE\.gensparx\gateway.cmd"
```

If you used a profile, delete the matching task name and `~\.gensparx-<profile>\gateway.cmd`.

## Normal install vs source checkout

### Normal install (install.sh / npm / pnpm / bun)

If you used `https://gensparx.com/install.sh` or `install.ps1`, the CLI was installed with `npm install -g gensparx@latest`.
Remove it with `npm rm -g gensparx` (or `pnpm remove -g` / `bun remove -g` if you installed that way).

### Source checkout (git clone)

If you run from a repo checkout (`git clone` + `gensparx ...` / `bun run gensparx ...`):

1. Uninstall the gateway service **before** deleting the repo (use the easy path above or manual service removal).
2. Delete the repo directory.
3. Remove state + workspace as shown above.
