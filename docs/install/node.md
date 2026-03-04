---
title: "Node.js"
summary: "Install and configure Node.js for GenSparx — version requirements, install options, and PATH troubleshooting"
read_when:
  - "You installed GenSparx but `gensparx` is “command not found”"
  - "You’re setting up Node.js/npm on a new machine"
  - "npm install -g ... fails with permissions or PATH issues"
---

# Node.js

GenSparx’s runtime baseline is **Node 22+**.

If you can run `npm install -g gensparx@latest` but later see `gensparx: command not found`, it’s almost always a **PATH** issue: the directory where npm puts global binaries isn’t on your shell’s PATH.

## Quick diagnosis

Run:

```bash
node -v
```

If `$(npm prefix -g)/bin` (macOS/Linux) or `$(npm prefix -g)` (Windows) is **not** present inside `echo "$PATH"`, your shell can’t find global npm binaries (including `gensparx`).

## Install Node

<Tabs>
  <Tab title="macOS">
    **Homebrew** (recommended):

    ```bash
    brew install node
    ```

    Or download the macOS installer from [nodejs.org](https://nodejs.org/).

  </Tab>
  <Tab title="Linux">
    **Ubuntu / Debian:**

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    **Fedora / RHEL:**

    ```bash
    sudo dnf install nodejs
    ```

    Or use a version manager (see below).

  </Tab>
  <Tab title="Windows">
    **winget** (recommended):

    ```powershell
    winget install OpenJS.NodeJS.LTS
    ```

    **Chocolatey:**

    ```powershell
    choco install nodejs-lts
    ```

    Or download the Windows installer from [nodejs.org](https://nodejs.org/).

  </Tab>
</Tabs>

<Accordion title="Using a version manager (nvm, fnm, mise, asdf)">
  Version managers let you switch between Node versions easily. Popular options:

- [**fnm**](https://github.com/Schniz/fnm) — fast, cross-platform
- [**nvm**](https://github.com/nvm-sh/nvm) — widely used on macOS/Linux
- [**mise**](https://mise.jdx.dev/) — polyglot (Node, Python, Ruby, etc.)

Example with fnm:

```bash
fnm install 22
fnm use 22
```

  <Warning>
  Make sure your version manager is initialized in your shell startup file (`~/.zshrc` or `~/.bashrc`). If it isn't, `gensparx` may not be found in new terminal sessions because the PATH won't include Node's bin directory.
  </Warning>
</Accordion>

## Troubleshooting

### `gensparx: command not found`

This almost always means npm's global bin directory isn't on your PATH.

<Steps>
  <Step title="Find your global npm prefix">
    ```bash
    npm prefix -g
    ```
  </Step>
  <Step title="Check if it's on your PATH">
    ```bash
    echo "$PATH"
    ```

    Look for `<npm-prefix>/bin` (macOS/Linux) or `<npm-prefix>` (Windows) in the output.

  </Step>
  <Step title="Add it to your shell startup file">
    <Tabs>
      <Tab title="macOS / Linux">
        Add to `~/.zshrc` or `~/.bashrc`:

        ```bash
        export PATH="$(npm prefix -g)/bin:$PATH"
        ```

        Then open a new terminal (or run `rehash` in zsh / `hash -r` in bash).
      </Tab>
      <Tab title="Windows">
        Add the output of `npm prefix -g` to your system PATH via Settings → System → Environment Variables.
      </Tab>
    </Tabs>

  </Step>
</Steps>

### Permission errors on `npm install -g` (Linux)

If you see `EACCES` errors, switch npm's global prefix to a user-writable directory:

```bash
mkdir -p "$HOME/.npm-global"
npm config set prefix "$HOME/.npm-global"
export PATH="$HOME/.npm-global/bin:$PATH"
```

Persist the `export PATH=...` line in your shell startup file.

## Recommended Node install options

You’ll have the fewest surprises if Node/npm are installed in a way that:

- keeps Node updated (22+)
- makes the global npm bin dir stable and on PATH in new shells

Common choices:

- macOS: Homebrew (`brew install node`) or a version manager
- Linux: your preferred version manager, or a distro-supported install that provides Node 22+
- Windows: official Node installer, `winget`, or a Windows Node version manager

If you use a version manager (nvm/fnm/asdf/etc), ensure it’s initialized in the shell you use day-to-day (zsh vs bash) so the PATH it sets is present when you run installers.



