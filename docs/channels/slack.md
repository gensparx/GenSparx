---
summary: "Slack setup and runtime behavior (Socket Mode + HTTP Events API)"
read_when:
  - Setting up Slack or debugging Slack socket/HTTP mode
title: "Slack"
---

# Slack

Status: production-ready for DMs + channels via Slack app integrations. Default mode is Socket Mode; HTTP Events API mode is also supported.

<CardGroup cols={3}>
  <Card title="Pairing" icon="link" href="/channels/pairing">
    Slack DMs default to pairing mode.
  </Card>
  <Card title="Slash commands" icon="terminal" href="/tools/slash-commands">
    Native command behavior and command catalog.
  </Card>
  <Card title="Channel troubleshooting" icon="wrench" href="/channels/troubleshooting">
    Cross-channel diagnostics and repair playbooks.
  </Card>
</CardGroup>

1. Create a Slack app and enable **Socket Mode**.
2. Create an **App Token** (`xapp-...`) and **Bot Token** (`xoxb-...`).
3. Set tokens for GenSparx and start the gateway.

<Tabs>
  <Tab title="Socket Mode (default)">
    <Steps>
      <Step title="Create Slack app and tokens">
        In Slack app settings:

        - enable **Socket Mode**
        - create **App Token** (`xapp-...`) with `connections:write`
        - install app and copy **Bot Token** (`xoxb-...`)
      </Step>

      <Step title="Configure GenSparx">

```json5
{
  channels: {
    slack: {
      enabled: true,
      mode: "socket",
      appToken: "xapp-...",
      botToken: "xoxb-...",
    },
  },
}
```

        Env fallback (default account only):

1. Create a Slack app (From scratch) in https://api.slack.com/apps.
2. **Socket Mode** → toggle on. Then go to **Basic Information** → **App-Level Tokens** → **Generate Token and Scopes** with scope `connections:write`. Copy the **App Token** (`xapp-...`).
3. **OAuth & Permissions** → add bot token scopes (use the manifest below). Click **Install to Workspace**. Copy the **Bot User OAuth Token** (`xoxb-...`).
4. Optional: **OAuth & Permissions** → add **User Token Scopes** (see the read-only list below). Reinstall the app and copy the **User OAuth Token** (`xoxp-...`).
5. **Event Subscriptions** → enable events and subscribe to:
   - `message.*` (includes edits/deletes/thread broadcasts)
   - `app_mention`
   - `reaction_added`, `reaction_removed`
   - `member_joined_channel`, `member_left_channel`
   - `channel_rename`
   - `pin_added`, `pin_removed`
6. Invite the bot to channels you want it to read.
7. Slash Commands → create `/openclaw` if you use `channels.slack.slashCommand`. If you enable native commands, add one slash command per built-in command (same names as `/help`). Native defaults to off for Slack unless you set `channels.slack.commands.native: true` (global `commands.native` is `"auto"` which leaves Slack off).
8. App Home → enable the **Messages Tab** so users can DM the bot.

Use the manifest below so scopes and events stay in sync.

Multi-account support: use `channels.slack.accounts` with per-account tokens and optional `name`. See [`gateway/configuration`](/gateway/configuration#telegramaccounts--discordaccounts--slackaccounts--signalaccounts--imessageaccounts) for the shared pattern.

### GenSparx config (minimal)

Set tokens via env vars (recommended):

- `SLACK_APP_TOKEN=xapp-...`
- `SLACK_BOT_TOKEN=xoxb-...`

Or via config:

```json5
{
  channels: {
    slack: {
      enabled: true,
      appToken: "xapp-...",
      botToken: "xoxb-...",
    },
  },
}
```

      </Step>

GenSparx can use a Slack user token (`xoxp-...`) for read operations (history,
pins, reactions, emoji, member info). By default this stays read-only: reads
prefer the user token when present, and writes still use the bot token unless
you explicitly opt in. Even with `userTokenReadOnly: false`, the bot token stays
preferred for writes when it is available.

        - `app_mention`
        - `message.channels`, `message.groups`, `message.im`, `message.mpim`
        - `reaction_added`, `reaction_removed`
        - `member_joined_channel`, `member_left_channel`
        - `channel_rename`
        - `pin_added`, `pin_removed`

        Also enable App Home **Messages Tab** for DMs.
      </Step>

      <Step title="Start gateway">

```bash
openclaw gateway
```

      </Step>
    </Steps>

  </Tab>

  <Tab title="HTTP Events API mode">
    <Steps>
      <Step title="Configure Slack app for HTTP">

- Read operations (history, reactions list, pins list, emoji list, member info,
  search) prefer the user token when configured, otherwise the bot token.
- Write operations (send/edit/delete messages, add/remove reactions, pin/unpin,
  file uploads) use the bot token by default. If `userTokenReadOnly: false` and
  no bot token is available, GenSparx falls back to the user token.

      </Step>

- `channels.slack.historyLimit` (or `channels.slack.accounts.*.historyLimit`) controls how many recent channel/group messages are wrapped into the prompt.
- Falls back to `messages.groupChat.historyLimit`. Set `0` to disable (default 50).

## HTTP mode (Events API)

Use HTTP webhook mode when your Gateway is reachable by Slack over HTTPS (typical for server deployments).
HTTP mode uses the Events API + Interactivity + Slash Commands with a shared request URL.

### Setup

1. Create a Slack app and **disable Socket Mode** (optional if you only use HTTP).
2. **Basic Information** → copy the **Signing Secret**.
3. **OAuth & Permissions** → install the app and copy the **Bot User OAuth Token** (`xoxb-...`).
4. **Event Subscriptions** → enable events and set the **Request URL** to your gateway webhook path (default `/slack/events`).
5. **Interactivity & Shortcuts** → enable and set the same **Request URL**.
6. **Slash Commands** → set the same **Request URL** for your command(s).

Example request URL:
`https://gateway-host/slack/events`

### GenSparx config (minimal)

```json5
{
  channels: {
    slack: {
      enabled: true,
      mode: "http",
      botToken: "xoxb-...",
      signingSecret: "your-signing-secret",
      webhookPath: "/slack/events",
    },
  },
}
```

      </Step>

      <Step title="Use unique webhook paths for multi-account HTTP">
        Per-account HTTP mode is supported.

        Give each account a distinct `webhookPath` so registrations do not collide.
      </Step>
    </Steps>

  </Tab>
</Tabs>

## Token model

- `botToken` + `appToken` are required for Socket Mode.
- HTTP mode requires `botToken` + `signingSecret`.
- Config tokens override env fallback.
- `SLACK_BOT_TOKEN` / `SLACK_APP_TOKEN` env fallback applies only to the default account.
- `userToken` (`xoxp-...`) is config-only (no env fallback) and defaults to read-only behavior (`userTokenReadOnly: true`).
- Optional: add `chat:write.customize` if you want outgoing messages to use the active agent identity (custom `username` and icon). `icon_emoji` uses `:emoji_name:` syntax.

<Tip>
For actions/directory reads, user token can be preferred when configured. For writes, bot token remains preferred; user-token writes are only allowed when `userTokenReadOnly: false` and bot token is unavailable.
</Tip>

## Access control and routing

<Tabs>
  <Tab title="DM policy">
    `channels.slack.dmPolicy` controls DM access (legacy: `channels.slack.dm.policy`):

    - `pairing` (default)
    - `allowlist`
    - `open` (requires `channels.slack.allowFrom` to include `"*"`; legacy: `channels.slack.dm.allowFrom`)
    - `disabled`

    DM flags:

    - `dm.enabled` (default true)
    - `channels.slack.allowFrom` (preferred)
    - `dm.allowFrom` (legacy)
    - `dm.groupEnabled` (group DMs default false)
    - `dm.groupChannels` (optional MPIM allowlist)

    Multi-account precedence:

    - `channels.slack.accounts.default.allowFrom` applies only to the `default` account.
    - Named accounts inherit `channels.slack.allowFrom` when their own `allowFrom` is unset.
    - Named accounts do not inherit `channels.slack.accounts.default.allowFrom`.

    Pairing in DMs uses `openclaw pairing approve slack <code>`.

  </Tab>

  <Tab title="Channel policy">
    `channels.slack.groupPolicy` controls channel handling:

    - `open`
    - `allowlist`
    - `disabled`

    Channel allowlist lives under `channels.slack.channels`.

    Runtime note: if `channels.slack` is completely missing (env-only setup), runtime falls back to `groupPolicy="allowlist"` and logs a warning (even if `channels.defaults.groupPolicy` is set).

    Name/ID resolution:

    - channel allowlist entries and DM allowlist entries are resolved at startup when token access allows
    - unresolved entries are kept as configured
    - inbound authorization matching is ID-first by default; direct username/slug matching requires `channels.slack.dangerouslyAllowNameMatching: true`

  </Tab>

  <Tab title="Mentions and channel users">
    Channel messages are mention-gated by default.

    Mention sources:

    - explicit app mention (`<@botId>`)
    - mention regex patterns (`agents.list[].groupChat.mentionPatterns`, fallback `messages.groupChat.mentionPatterns`)
    - implicit reply-to-bot thread behavior

    Per-channel controls (`channels.slack.channels.<id|name>`):

    - `requireMention`
    - `users` (allowlist)
    - `allowBots`
    - `skills`
    - `systemPrompt`
    - `tools`, `toolsBySender`
    - `toolsBySender` key format: `id:`, `e164:`, `username:`, `name:`, or `"*"` wildcard
      (legacy unprefixed keys still map to `id:` only)

  </Tab>
</Tabs>

## Commands and slash behavior

- Native command auto-mode is **off** for Slack (`commands.native: "auto"` does not enable Slack native commands).
- Enable native Slack command handlers with `channels.slack.commands.native: true` (or global `commands.native: true`).
- When native commands are enabled, register matching slash commands in Slack (`/<command>` names), with one exception:
  - register `/agentstatus` for the status command (Slack reserves `/status`)
- If native commands are not enabled, you can run a single configured slash command via `channels.slack.slashCommand`.
- Native arg menus now adapt their rendering strategy:
  - up to 5 options: button blocks
  - 6-100 options: static select menu
  - more than 100 options: external select with async option filtering when interactivity options handlers are available
  - if encoded option values exceed Slack limits, the flow falls back to buttons
- For long option payloads, Slash command argument menus use a confirm dialog before dispatching a selected value.

Default slash command settings:

- `enabled: false`
- `name: "openclaw"`
- `sessionPrefix: "slack:slash"`
- `ephemeral: true`

Slash sessions use isolated keys:

- `agent:<agentId>:slack:slash:<userId>`

and still route command execution against the target conversation session (`CommandTargetSessionKey`).

## Threading, sessions, and reply tags

- DMs route as `direct`; channels as `channel`; MPIMs as `group`.
- With default `session.dmScope=main`, Slack DMs collapse to agent main session.
- Channel sessions: `agent:<agentId>:slack:channel:<channelId>`.
- Thread replies can create thread session suffixes (`:thread:<threadTs>`) when applicable.
- `channels.slack.thread.historyScope` default is `thread`; `thread.inheritParent` default is `false`.
- `channels.slack.thread.initialHistoryLimit` controls how many existing thread messages are fetched when a new thread session starts (default `20`; set `0` to disable).

Reply threading controls:

- `channels.slack.replyToMode`: `off|first|all` (default `off`)
- `channels.slack.replyToModeByChatType`: per `direct|group|channel`
- legacy fallback for direct chats: `channels.slack.dm.replyToMode`

Manual reply tags are supported:

- `[[reply_to_current]]`
- `[[reply_to:<id>]]`

Note: `replyToMode="off"` disables **all** reply threading in Slack, including explicit `[[reply_to_*]]` tags. This differs from Telegram, where explicit tags are still honored in `"off"` mode. The difference reflects the platform threading models: Slack threads hide messages from the channel, while Telegram replies remain visible in the main chat flow.

## Media, chunking, and delivery

<AccordionGroup>
  <Accordion title="Inbound attachments">
    Slack file attachments are downloaded from Slack-hosted private URLs (token-authenticated request flow) and written to the media store when fetch succeeds and size limits permit.

    Runtime inbound size cap defaults to `20MB` unless overridden by `channels.slack.mediaMaxMb`.

  </Accordion>

  <Accordion title="Outbound text and files">
    - text chunks use `channels.slack.textChunkLimit` (default 4000)
    - `channels.slack.chunkMode="newline"` enables paragraph-first splitting
    - file sends use Slack upload APIs and can include thread replies (`thread_ts`)
    - outbound media cap follows `channels.slack.mediaMaxMb` when configured; otherwise channel sends use MIME-kind defaults from media pipeline
  </Accordion>

  <Accordion title="Delivery targets">
    Preferred explicit targets:

    - `user:<id>` for DMs
    - `channel:<id>` for channels

    Slack DMs are opened via Slack conversation APIs when sending to user targets.

  </Accordion>
</AccordionGroup>

## Actions and gates

Slack actions are controlled by `channels.slack.actions.*`.

Available action groups in current Slack tooling:

| Group      | Default |
| ---------- | ------- |
| messages   | enabled |
| reactions  | enabled |
| pins       | enabled |
| memberInfo | enabled |
| emojiList  | enabled |

## Events and operational behavior

- Message edits/deletes/thread broadcasts are mapped into system events.
- Reaction add/remove events are mapped into system events.
- Member join/leave, channel created/renamed, and pin add/remove events are mapped into system events.
- Assistant thread status updates (for "is typing..." indicators in threads) use `assistant.threads.setStatus` and require bot scope `assistant:write`.
- `channel_id_changed` can migrate channel config keys when `configWrites` is enabled.
- Channel topic/purpose metadata is treated as untrusted context and can be injected into routing context.
- Block actions and modal interactions emit structured `Slack interaction: ...` system events with rich payload fields:
  - block actions: selected values, labels, picker values, and `workflow_*` metadata
  - modal `view_submission` and `view_closed` events with routed channel metadata and form inputs

## Ack reactions

`ackReaction` sends an acknowledgement emoji while GenSparx is processing an inbound message.

Resolution order:

- `channels.slack.accounts.<accountId>.ackReaction`
- `channels.slack.ackReaction`
- `messages.ackReaction`
- agent identity emoji fallback (`agents.list[].identity.emoji`, else "👀")

Notes:

- Slack expects shortcodes (for example `"eyes"`).
- Use `""` to disable the reaction for a channel or account.

## Manifest and scope checklist

<AccordionGroup>
  <Accordion title="Slack app manifest example">

```json
{
  "display_information": {
    "name": "GenSparx",
    "description": "Slack connector for GenSparx"
  },
  "features": {
    "bot_user": {
      "display_name": "GenSparx",
      "always_online": false
    },
    "app_home": {
      "messages_tab_enabled": true,
      "messages_tab_read_only_enabled": false
    },
    "slash_commands": [
      {
        "command": "/openclaw",
        "description": "Send a message to GenSparx",
        "should_escape": false
      }
    ]
  },
  "oauth_config": {
    "scopes": {
      "bot": [
        "chat:write",
        "channels:history",
        "channels:read",
        "groups:history",
        "im:history",
        "mpim:history",
        "users:read",
        "app_mentions:read",
        "assistant:write",
        "reactions:read",
        "reactions:write",
        "pins:read",
        "pins:write",
        "emoji:read",
        "commands",
        "files:read",
        "files:write"
      ]
    }
  },
  "settings": {
    "socket_mode_enabled": true,
    "event_subscriptions": {
      "bot_events": [
        "app_mention",
        "message.channels",
        "message.groups",
        "message.im",
        "message.mpim",
        "reaction_added",
        "reaction_removed",
        "member_joined_channel",
        "member_left_channel",
        "channel_rename",
        "pin_added",
        "pin_removed"
      ]
    }
  }
}
```

  </Accordion>

  <Accordion title="Optional user-token scopes (read operations)">
    If you configure `channels.slack.userToken`, typical read scopes are:

    - `channels:history`, `groups:history`, `im:history`, `mpim:history`
    - `channels:read`, `groups:read`, `im:read`, `mpim:read`
    - `users:read`
    - `reactions:read`
    - `pins:read`
    - `emoji:read`
    - `search:read` (if you depend on Slack search reads)

  </Accordion>
</AccordionGroup>

## Troubleshooting

<AccordionGroup>
  <Accordion title="No replies in channels">
    Check, in order:

    - `groupPolicy`
    - channel allowlist (`channels.slack.channels`)
    - `requireMention`
    - per-channel `users` allowlist

    Useful commands:

### Not needed today (but likely future)

- `mpim:write` (only if we add group-DM open/DM start via `conversations.open`)
- `groups:write` (only if we add private-channel management: create/rename/invite/archive)
- `chat:write.public` (only if we want to post to channels the bot isn't in)
  https://docs.slack.dev/reference/scopes/chat.write.public
- `users:read.email` (only if we need email fields from `users.info`)
  https://docs.slack.dev/changelog/2017-04-narrowing-email-access
- `files:read` (only if we start listing/reading file metadata)

## Config

Slack uses Socket Mode only (no HTTP webhook server). Provide both tokens:

```json
{
  "slack": {
    "enabled": true,
    "botToken": "xoxb-...",
    "appToken": "xapp-...",
    "groupPolicy": "allowlist",
    "dm": {
      "enabled": true,
      "policy": "pairing",
      "allowFrom": ["U123", "U456", "*"],
      "groupEnabled": false,
      "groupChannels": ["G123"],
      "replyToMode": "all"
    },
    "channels": {
      "C123": { "allow": true, "requireMention": true },
      "#general": {
        "allow": true,
        "requireMention": true,
        "users": ["U123"],
        "skills": ["search", "docs"],
        "systemPrompt": "Keep answers short."
      }
    },
    "reactionNotifications": "own",
    "reactionAllowlist": ["U123"],
    "replyToMode": "off",
    "actions": {
      "reactions": true,
      "messages": true,
      "pins": true,
      "memberInfo": true,
      "emojiList": true
    },
    "slashCommand": {
      "enabled": true,
      "name": "gensparx",
      "sessionPrefix": "slack:slash",
      "ephemeral": true
    },
    "textChunkLimit": 4000,
    "mediaMaxMb": 20
  }
}
```

  </Accordion>

  <Accordion title="DM messages ignored">
    Check:

    - `channels.slack.dm.enabled`
    - `channels.slack.dmPolicy` (or legacy `channels.slack.dm.policy`)
    - pairing approvals / allowlist entries

## Limits

- Outbound text is chunked to `channels.slack.textChunkLimit` (default 4000).
- Optional newline chunking: set `channels.slack.chunkMode="newline"` to split on blank lines (paragraph boundaries) before length chunking.
- Media uploads are capped by `channels.slack.mediaMaxMb` (default 20).

## Reply threading

By default, GenSparx replies in the main channel. Use `channels.slack.replyToMode` to control automatic threading:

| Mode    | Behavior                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `off`   | **Default.** Reply in main channel. Only thread if the triggering message was already in a thread.                                                                  |
| `first` | First reply goes to thread (under the triggering message), subsequent replies go to main channel. Useful for keeping context visible while avoiding thread clutter. |
| `all`   | All replies go to thread. Keeps conversations contained but may reduce visibility.                                                                                  |

The mode applies to both auto-replies and agent tool calls (`slack sendMessage`).

### Per-chat-type threading

You can configure different threading behavior per chat type by setting `channels.slack.replyToModeByChatType`:

```json5
{
  channels: {
    slack: {
      replyToMode: "off", // default for channels
      replyToModeByChatType: {
        direct: "all", // DMs always thread
        group: "first", // group DMs/MPIM thread first reply
      },
    },
  },
}
```

  </Accordion>

  <Accordion title="Socket mode not connecting">
    Validate bot + app tokens and Socket Mode enablement in Slack app settings.
  </Accordion>

  <Accordion title="HTTP mode not receiving events">
    Validate:

    - signing secret
    - webhook path
    - Slack Request URLs (Events + Interactivity + Slash Commands)
    - unique `webhookPath` per HTTP account

  </Accordion>

  <Accordion title="Native/slash commands not firing">
    Verify whether you intended:

    - native command mode (`channels.slack.commands.native: true`) with matching slash commands registered in Slack
    - or single slash command mode (`channels.slack.slashCommand.enabled: true`)

    Also check `commands.useAccessGroups` and channel/user allowlists.

  </Accordion>
</AccordionGroup>

## Text streaming

GenSparx supports Slack native text streaming via the Agents and AI Apps API.

`channels.slack.streaming` controls live preview behavior:

- `off`: disable live preview streaming.
- `partial` (default): replace preview text with the latest partial output.
- `block`: append chunked preview updates.
- `progress`: show progress status text while generating, then send final text.

`channels.slack.nativeStreaming` controls Slack's native streaming API (`chat.startStream` / `chat.appendStream` / `chat.stopStream`) when `streaming` is `partial` (default: `true`).

Disable native Slack streaming (keep draft preview behavior):

```yaml
channels:
  slack:
    streaming: partial
    nativeStreaming: false
```

Legacy keys:

- `channels.slack.streamMode` (`replace | status_final | append`) is auto-migrated to `channels.slack.streaming`.
- boolean `channels.slack.streaming` is auto-migrated to `channels.slack.nativeStreaming`.

### Requirements

1. Enable **Agents and AI Apps** in your Slack app settings.
2. Ensure the app has the `assistant:write` scope.
3. A reply thread must be available for that message. Thread selection still follows `replyToMode`.

### Behavior

- First text chunk starts a stream (`chat.startStream`).
- Later text chunks append to the same stream (`chat.appendStream`).
- End of reply finalizes stream (`chat.stopStream`).
- Media and non-text payloads fall back to normal delivery.
- If streaming fails mid-reply, GenSparx falls back to normal delivery for remaining payloads.

## Configuration reference pointers

Primary reference:

- DMs share the `main` session (like WhatsApp/Telegram).
- Channels map to `agent:<agentId>:slack:channel:<channelId>` sessions.
- Slash commands use `agent:<agentId>:slack:slash:<userId>` sessions (prefix configurable via `channels.slack.slashCommand.sessionPrefix`).
- If Slack doesn’t provide `channel_type`, GenSparx infers it from the channel ID prefix (`D`, `C`, `G`) and defaults to `channel` to keep session keys stable.
- Native command registration uses `commands.native` (global default `"auto"` → Slack off) and can be overridden per-workspace with `channels.slack.commands.native`. Text commands require standalone `/...` messages and can be disabled with `commands.text: false`. Slack slash commands are managed in the Slack app and are not removed automatically. Use `commands.useAccessGroups: false` to bypass access-group checks for commands.
- Full command list + config: [Slash commands](/tools/slash-commands)

  High-signal Slack fields:
  - mode/auth: `mode`, `botToken`, `appToken`, `signingSecret`, `webhookPath`, `accounts.*`
  - DM access: `dm.enabled`, `dmPolicy`, `allowFrom` (legacy: `dm.policy`, `dm.allowFrom`), `dm.groupEnabled`, `dm.groupChannels`
  - compatibility toggle: `dangerouslyAllowNameMatching` (break-glass; keep off unless needed)
  - channel access: `groupPolicy`, `channels.*`, `channels.*.users`, `channels.*.requireMention`
  - threading/history: `replyToMode`, `replyToModeByChatType`, `thread.*`, `historyLimit`, `dmHistoryLimit`, `dms.*.historyLimit`
  - delivery: `textChunkLimit`, `chunkMode`, `mediaMaxMb`, `streaming`, `nativeStreaming`
  - ops/features: `configWrites`, `commands.native`, `slashCommand.*`, `actions.*`, `userToken`, `userTokenReadOnly`

- Default: `channels.slack.dm.policy="pairing"` — unknown DM senders get a pairing code (expires after 1 hour).
- Approve via: `gensparx pairing approve slack <code>`.
- To allow anyone: set `channels.slack.dm.policy="open"` and `channels.slack.dm.allowFrom=["*"]`.
- `channels.slack.dm.allowFrom` accepts user IDs, @handles, or emails (resolved at startup when tokens allow). The wizard accepts usernames and resolves them to ids during setup when tokens allow.

## Group policy

- `channels.slack.groupPolicy` controls channel handling (`open|disabled|allowlist`).
- `allowlist` requires channels to be listed in `channels.slack.channels`.
- If you only set `SLACK_BOT_TOKEN`/`SLACK_APP_TOKEN` and never create a `channels.slack` section,
  the runtime defaults `groupPolicy` to `open`. Add `channels.slack.groupPolicy`,
  `channels.defaults.groupPolicy`, or a channel allowlist to lock it down.
- The configure wizard accepts `#channel` names and resolves them to IDs when possible
  (public + private); if multiple matches exist, it prefers the active channel.
- On startup, GenSparx resolves channel/user names in allowlists to IDs (when tokens allow)
  and logs the mapping; unresolved entries are kept as typed.
- To allow **no channels**, set `channels.slack.groupPolicy: "disabled"` (or keep an empty allowlist).

Channel options (`channels.slack.channels.<id>` or `channels.slack.channels.<name>`):

- `allow`: allow/deny the channel when `groupPolicy="allowlist"`.
- `requireMention`: mention gating for the channel.
- `tools`: optional per-channel tool policy overrides (`allow`/`deny`/`alsoAllow`).
- `toolsBySender`: optional per-sender tool policy overrides within the channel (keys are sender ids/@handles/emails; `"*"` wildcard supported).
- `allowBots`: allow bot-authored messages in this channel (default: false).
- `users`: optional per-channel user allowlist.
- `skills`: skill filter (omit = all skills, empty = none).
- `systemPrompt`: extra system prompt for the channel (combined with topic/purpose).
- `enabled`: set `false` to disable the channel.

## Delivery targets

Use these with cron/CLI sends:

- `user:<id>` for DMs
- `channel:<id>` for channels

## Tool actions

Slack tool actions can be gated with `channels.slack.actions.*`:

| Action group | Default | Notes                  |
| ------------ | ------- | ---------------------- |
| reactions    | enabled | React + list reactions |
| messages     | enabled | Read/send/edit/delete  |
| pins         | enabled | Pin/unpin/list         |
| memberInfo   | enabled | Member info            |
| emojiList    | enabled | Custom emoji list      |

## Security notes

- Writes default to the bot token so state-changing actions stay scoped to the
  app's bot permissions and identity.
- Setting `userTokenReadOnly: false` allows the user token to be used for write
  operations when a bot token is unavailable, which means actions run with the
  installing user's access. Treat the user token as highly privileged and keep
  action gates and allowlists tight.
- If you enable user-token writes, make sure the user token includes the write
  scopes you expect (`chat:write`, `reactions:write`, `pins:write`,
  `files:write`) or those operations will fail.

## Notes

- Mention gating is controlled via `channels.slack.channels` (set `requireMention` to `true`); `agents.list[].groupChat.mentionPatterns` (or `messages.groupChat.mentionPatterns`) also count as mentions.
- Multi-agent override: set per-agent patterns on `agents.list[].groupChat.mentionPatterns`.
- Reaction notifications follow `channels.slack.reactionNotifications` (use `reactionAllowlist` with mode `allowlist`).
- Bot-authored messages are ignored by default; enable via `channels.slack.allowBots` or `channels.slack.channels.<id>.allowBots`.
- Warning: If you allow replies to other bots (`channels.slack.allowBots=true` or `channels.slack.channels.<id>.allowBots=true`), prevent bot-to-bot reply loops with `requireMention`, `channels.slack.channels.<id>.users` allowlists, and/or clear guardrails in `AGENTS.md` and `SOUL.md`.
- For the Slack tool, reaction removal semantics are in [/tools/reactions](/tools/reactions).
- Attachments are downloaded to the media store when permitted and under the size limit.


