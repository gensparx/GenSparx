---
summary: "CLI reference for `gensparx config` (get/set/unset/file/validate)"
read_when:
  - You want to read or edit config non-interactively
title: "config"
---

# `gensparx config`

Config helpers: get/set/unset/validate values by path and print the active
config file. Run without a subcommand to open
the configure wizard (same as `gensparx configure`).

## Examples

```bash
gensparx config file
gensparx config get browser.executablePath
gensparx config set browser.executablePath "/usr/bin/google-chrome"
gensparx config set agents.defaults.heartbeat.every "2h"
gensparx config set agents.list[0].tools.exec.node "node-id-or-name"
gensparx config unset tools.web.search.apiKey
gensparx config validate
gensparx config validate --json
```

## Paths

Paths use dot or bracket notation:

```bash
gensparx config get agents.defaults.workspace
gensparx config get agents.list[0].id
```

Use the agent list index to target a specific agent:

```bash
gensparx config get agents.list
gensparx config set agents.list[1].tools.exec.node "node-id-or-name"
```

## Values

Values are parsed as JSON5 when possible; otherwise they are treated as strings.
Use `--strict-json` to require JSON5 parsing. `--json` remains supported as a legacy alias.

```bash
gensparx config set agents.defaults.heartbeat.every "0m"
gensparx config set gateway.port 19001 --strict-json
gensparx config set channels.whatsapp.groups '["*"]' --strict-json
```

## Subcommands

- `config file`: Print the active config file path (resolved from `GENSPARX_CONFIG_PATH` or default location).

Restart the gateway after edits.

## Validate

Validate the current config against the active schema without starting the
gateway.

```bash
gensparx config validate
gensparx config validate --json
```
