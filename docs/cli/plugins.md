---
summary: "CLI reference for `gensparx plugins` (list, install, enable/disable, doctor)"
read_when:
  - You want to install or manage in-process Gateway plugins
  - You want to debug plugin load failures
title: "plugins"
---

# `gensparx plugins`

Manage Gateway plugins/extensions (loaded in-process).

Related:

- Plugin system: [Plugins](/plugin)
- Plugin manifest + schema: [Plugin manifest](/plugins/manifest)
- Security hardening: [Security](/gateway/security)

## Commands

```bash
gensparx plugins list
gensparx plugins info <id>
gensparx plugins enable <id>
gensparx plugins disable <id>
gensparx plugins doctor
gensparx plugins update <id>
gensparx plugins update --all
```

Bundled plugins ship with GenSparx but start disabled. Use `plugins enable` to
activate them.

All plugins must ship a `openclaw.plugin.json` file with an inline JSON Schema
(`configSchema`, even if empty). Missing/invalid manifests or schemas prevent
the plugin from loading and fail config validation.

### Install

```bash
gensparx plugins install <path-or-spec>
```

Security note: treat plugin installs like running code. Prefer pinned versions.

Supported archives: `.zip`, `.tgz`, `.tar.gz`, `.tar`.

Use `--link` to avoid copying a local directory (adds to `plugins.load.paths`):

```bash
gensparx plugins install -l ./my-plugin
```

### Update

```bash
gensparx plugins update <id>
gensparx plugins update --all
gensparx plugins update <id> --dry-run
```

Updates only apply to plugins installed from npm (tracked in `plugins.installs`).


