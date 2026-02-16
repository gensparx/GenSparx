---
summary: "Uninstall GenSparx completely (CLI, service, state, workspace)"
read_when:
  - You want to remove GenSparx from a machine
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
rm -rf "${OPENCLAW_STATE_DIR:-\$HOME/.openclaw}"
```

If you set `OPENCLAW_CONFIG_PATH` to a custom location outside the state dir, delete that file too.

4. Delete your workspace (optional, removes agent files):

```bash
rm -rf ~/.openclaw/workspace
```

5. Remove the CLI install (pick the one you used):

```bash
npm rm -g gensparx
pnpm remove -g gensparx
bun remove -g gensparx
```

6. If you installed the macOS app:

```bash
rm -rf /Applications/GenSparx.app
```

Notes:

- If you used profiles (`--profile` / `OPENCLAW_PROFILE`), repeat step 3 for each state dir (defaults are `~/.openclaw-<profile>`).
- In remote mode, the state dir lives on the **gateway host**, so run steps 1-4 there too.

## Manual service removal (CLI not installed)

Use this if the gateway service keeps running but `gensparx` is missing.

### macOS (launchd)

Default label is `bot.molt.gateway` (or `bot.molt.<profile>`; legacy `com.GenSparx.*` may still exist):

```bash
launchctl bootout gui/$UID/bot.molt.gateway
rm -f ~/Library/LaunchAgents/bot.molt.gateway.plist
```

If you used a profile, replace the label and plist name with `bot.molt.<profile>`. Remove any legacy `com.GenSparx.*` plists if present.

### Linux (systemd user unit)

Default unit name is `GenSparx-gateway.service` (or `GenSparx-gateway-<profile>.service`):

```bash
systemctl --user disable --now GenSparx-gateway.service
rm -f ~/.config/systemd/user/GenSparx-gateway.service
systemctl --user daemon-reload
```

### Windows (Scheduled Task)

Default task name is `GenSparx Gateway` (or `GenSparx Gateway (<profile>)`).
The task script lives under your state dir.

```powershell
schtasks /Delete /F /TN "GenSparx Gateway"
Remove-Item -Force "$env:USERPROFILE\.GenSparx\gateway.cmd"
```

If you used a profile, delete the matching task name and `~\.openclaw-<profile>\gateway.cmd`.

## Normal install vs source checkout

### Normal install (install.sh / npm / pnpm / bun)

If you used `https://gensparx.com/install.sh` or `install.ps1`, the CLI was installed with `npm install -g gensparx@latest`.
Remove it with `npm rm -g gensparx` (or `pnpm remove -g` / `bun remove -g` if you installed that way).

### Source checkout (git clone)

If you run from a repo checkout (`git clone` + `gensparx ...` / `bun run gensparx ...`):

1. Uninstall the gateway service **before** deleting the repo (use the easy path above or manual service removal).
2. Delete the repo directory.
3. Remove state + workspace as shown above.




