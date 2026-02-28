---
summary: "CLI reference for `gensparx channels` (accounts, status, login/logout, logs)"
read_when:
  - You want to add/remove channel accounts (WhatsApp/Telegram/Discord/Google Chat/Slack/Mattermost (plugin)/Signal/iMessage)
  - You want to check channel status or tail channel logs
title: "channels"
---

# `gensparx channels`

Manage chat channel accounts and their runtime status on the Gateway.

Related docs:

- Channel guides: [Channels](/channels/index)
- Gateway configuration: [Configuration](/gateway/configuration)

## Common commands

```bash
gensparx channels list
gensparx channels status
gensparx channels capabilities
gensparx channels capabilities --channel discord --target channel:123
gensparx channels resolve --channel slack "#general" "@jane"
gensparx channels logs --channel all
```

## Add / remove accounts

```bash
gensparx channels add --channel telegram --token <bot-token>
gensparx channels remove --channel telegram --delete
```

Tip: `gensparx channels add --help` shows per-channel flags (token, app token, signal-cli paths, etc).

When you run `openclaw channels add` without flags, the interactive wizard can prompt:

- account ids per selected channel
- optional display names for those accounts
- `Bind configured channel accounts to agents now?`

If you confirm bind now, the wizard asks which agent should own each configured channel account and writes account-scoped routing bindings.

You can also manage the same routing rules later with `openclaw agents bindings`, `openclaw agents bind`, and `openclaw agents unbind` (see [agents](/cli/agents)).

When you add a non-default account to a channel that is still using single-account top-level settings (no `channels.<channel>.accounts` entries yet), OpenClaw moves account-scoped single-account top-level values into `channels.<channel>.accounts.default`, then writes the new account. This preserves the original account behavior while moving to the multi-account shape.

Routing behavior stays consistent:

- Existing channel-only bindings (no `accountId`) continue to match the default account.
- `channels add` does not auto-create or rewrite bindings in non-interactive mode.
- Interactive setup can optionally add account-scoped bindings.

If your config was already in a mixed state (named accounts present, missing `default`, and top-level single-account values still set), run `openclaw doctor --fix` to move account-scoped values into `accounts.default`.

## Login / logout (interactive)

```bash
gensparx channels login --channel whatsapp
gensparx channels logout --channel whatsapp
```

## Troubleshooting

- Run `gensparx status --deep` for a broad probe.
- Use `gensparx doctor` for guided fixes.
- `gensparx channels list` prints `Claude: HTTP 403 ... user:profile` → usage snapshot needs the `user:profile` scope. Use `--no-usage`, or provide a claude.ai session key (`CLAUDE_WEB_SESSION_KEY` / `CLAUDE_WEB_COOKIE`), or re-auth via Claude Code CLI.

## Capabilities probe

Fetch provider capability hints (intents/scopes where available) plus static feature support:

```bash
gensparx channels capabilities
gensparx channels capabilities --channel discord --target channel:123
```

Notes:

- `--channel` is optional; omit it to list every channel (including extensions).
- `--target` accepts `channel:<id>` or a raw numeric channel id and only applies to Discord.
- Probes are provider-specific: Discord intents + optional channel permissions; Slack bot + user scopes; Telegram bot flags + webhook; Signal daemon version; MS Teams app token + Graph roles/scopes (annotated where known). Channels without probes report `Probe: unavailable`.

## Resolve names to IDs

Resolve channel/user names to IDs using the provider directory:

```bash
gensparx channels resolve --channel slack "#general" "@jane"
gensparx channels resolve --channel discord "My Server/#support" "@someone"
gensparx channels resolve --channel matrix "Project Room"
```

Notes:

- Use `--kind user|group|auto` to force the target type.
- Resolution prefers active matches when multiple entries share the same name.


