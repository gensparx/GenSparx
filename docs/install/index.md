---
summary: "Install GenSparx (recommended installer, global install, or from source)"
read_when:
  - Installing GenSparx
  - You want to install from GitHub
title: "Install Overview"
---

# Install

Use the installer unless you have a reason not to. It sets up the CLI and runs onboarding.

## Quick install (recommended)

```bash
curl -fsSL https://gensparx.com/install.sh | bash
```

Windows (PowerShell):

```powershell
iwr -useb https://gensparx.com/install.ps1 | iex
```

Next step (if you skipped onboarding):

```bash
gensparx onboard --install-daemon
```

## System requirements

- **[Node 22+](/install/node)** (the [installer script](#install-methods) will install it if missing)
- macOS, Linux, or Windows
- `pnpm` only if you build from source

<Note>
On Windows, we strongly recommend running GenSparx under [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install).
</Note>

## Install methods

Installs `gensparx` globally via npm and runs onboarding.

```bash
curl -fsSL https://gensparx.com/install.sh | bash
```

<AccordionGroup>
  <Accordion title="Installer script" icon="rocket" defaultOpen>
    Downloads the CLI, installs it globally via npm, and launches the onboarding wizard.

```bash
curl -fsSL https://gensparx.com/install.sh | bash -s -- --help
```

    That's it — the script handles Node detection, installation, and onboarding.

    To skip onboarding and just install the binary:

```bash
curl -fsSL https://gensparx.com/install.sh | bash -s -- --no-onboard
```

    For all flags, env vars, and CI/automation options, see [Installer internals](/install/installer).

  </Accordion>

```bash
npm install -g gensparx@latest
```

    <Tabs>
      <Tab title="npm">
        ```bash
        npm install -g gensparx@latest
        gensparx onboard --install-daemon
        ```

```bash
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g gensparx@latest
```

          ```bash
          SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g gensparx@latest
          ```

          If you see `sharp: Please add node-gyp to your dependencies`, either install build tooling (macOS: Xcode CLT + `npm install -g node-gyp`) or use the env var above.
        </Accordion>
      </Tab>
      <Tab title="pnpm">
        ```bash
        pnpm add -g gensparx@latest
        pnpm approve-builds -g        # approve gensparx, node-llama-cpp, sharp, etc.
        gensparx onboard --install-daemon
        ```

```bash
pnpm add -g gensparx@latest
pnpm approve-builds -g                # approve gensparx, node-llama-cpp, sharp, etc.
```

  </Accordion>

  <Accordion title="From source" icon="github">
    For contributors or anyone who wants to run from a local checkout.

```bash
gensparx onboard --install-daemon
```

        ```bash
        git clone https://github.com/gensparx/GenSparx.git
        cd gensparx
        pnpm install
        pnpm ui:build
        pnpm build
        ```
      </Step>
      <Step title="Link the CLI">
        Make the `gensparx` command available globally:

```bash
git clone https://github.com/GenSparx/GenSparx.git
cd gensparx
pnpm install
pnpm ui:build # auto-installs UI deps on first run
pnpm build
gensparx onboard --install-daemon
```

Tip: if you don’t have a global install yet, run repo commands via `pnpm gensparx ...`.

    For deeper development workflows, see [Setup](/start/setup).

  </Accordion>
</AccordionGroup>

## Other install methods

<CardGroup cols={2}>
  <Card title="Docker" href="/install/docker" icon="container">
    Containerized or headless deployments.
  </Card>
  <Card title="Podman" href="/install/podman" icon="container">
    Rootless container: run `setup-podman.sh` once, then the launch script.
  </Card>
  <Card title="Nix" href="/install/nix" icon="snowflake">
    Declarative install via Nix.
  </Card>
  <Card title="Ansible" href="/install/ansible" icon="server">
    Automated fleet provisioning.
  </Card>
  <Card title="Bun" href="/install/bun" icon="zap">
    CLI-only usage via the Bun runtime.
  </Card>
</CardGroup>

## After install

- Run onboarding: `gensparx onboard --install-daemon`
- Quick check: `gensparx doctor`
- Check gateway health: `gensparx status` + `gensparx health`
- Open the dashboard: `gensparx dashboard`

## Install method: npm vs git (installer)

The installer supports two methods:

- `npm` (default): `npm install -g gensparx@latest`
- `git`: clone/build from GitHub and run from a source checkout

### CLI flags

```bash
# Explicit npm
curl -fsSL https://gensparx.com/install.sh | bash -s -- --install-method npm

# Install from GitHub (source checkout)
curl -fsSL https://gensparx.com/install.sh | bash -s -- --install-method git
```

If you need custom runtime paths, use:

- `--install-method npm|git`
- `--git-dir <path>` (default: `~/GenSparx`)
- `--no-git-update` (skip `git pull` when using an existing checkout)
- `--no-prompt` (disable prompts; required in CI/automation)
- `--dry-run` (print what would happen; make no changes)
- `--no-onboard` (skip onboarding)

See [Environment vars](/help/environment) for precedence and full details.

## Troubleshooting: `gensparx` not found

- `OPENCLAW_INSTALL_METHOD=git|npm`
- `OPENCLAW_GIT_DIR=...`
- `OPENCLAW_GIT_UPDATE=0|1`
- `OPENCLAW_NO_PROMPT=1`
- `OPENCLAW_DRY_RUN=1`
- `OPENCLAW_NO_ONBOARD=1`
- `SHARP_IGNORE_GLOBAL_LIBVIPS=0|1` (default: `1`; avoids `sharp` building against system libvips)

## Troubleshooting: `gensparx` not found (PATH)

Quick diagnosis:

```bash
node -v
npm -v
npm prefix -g
echo "$PATH"
```

If `$(npm prefix -g)/bin` (macOS/Linux) or `$(npm prefix -g)` (Windows) is **not** present inside `echo "$PATH"`, your shell can’t find global npm binaries (including `gensparx`).

Fix — add it to your shell startup file (`~/.zshrc` or `~/.bashrc`):

```bash
export PATH="$(npm prefix -g)/bin:$PATH"
```

On Windows, add the output of `npm prefix -g` to your PATH.

Then open a new terminal (or `rehash` in zsh / `hash -r` in bash).
</Accordion>

## Update / uninstall

- Updates: [Updating](/install/updating)
- Migrate to a new machine: [Migrating](/install/migrating)
- Uninstall: [Uninstall](/install/uninstall)



