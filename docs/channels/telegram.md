---
summary: "Telegram bot support status, capabilities, and configuration"
read_when:
  - Working on Telegram features or webhooks
title: "Telegram"
---

# Telegram (Bot API)

Status: production-ready for bot DMs + groups via grammY. Long polling is the default mode; webhook mode is optional.

<CardGroup cols={3}>
  <Card title="Pairing" icon="link" href="/channels/pairing">
    Default DM policy for Telegram is pairing.
  </Card>
  <Card title="Channel troubleshooting" icon="wrench" href="/channels/troubleshooting">
    Cross-channel diagnostics and repair playbooks.
  </Card>
  <Card title="Gateway configuration" icon="settings" href="/gateway/configuration">
    Full channel config patterns and examples.
  </Card>
</CardGroup>

## Quick setup

<Steps>
  <Step title="Create the bot token in BotFather">
    Open Telegram and chat with **@BotFather** (confirm the handle is exactly `@BotFather`).

    Run `/newbot`, follow prompts, and save the token.

  </Step>

  <Step title="Configure token and DM policy">

```json5
{
  channels: {
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",
      groups: { "*": { requireMention: true } },
    },
  },
}
```

    Env fallback: `TELEGRAM_BOT_TOKEN=...` (default account only).
    Telegram does **not** use `openclaw channels login telegram`; configure token in config/env, then start gateway.

  </Step>

  <Step title="Start gateway and approve first DM">

```bash
openclaw gateway
openclaw pairing list telegram
openclaw pairing approve telegram <CODE>
```

    Pairing codes expire after 1 hour.

  </Step>

  <Step title="Add the bot to a group">
    Add the bot to your group, then set `channels.telegram.groups` and `groupPolicy` to match your access model.
  </Step>
</Steps>

<Note>
Token resolution order is account-aware. In practice, config values win over env fallback, and `TELEGRAM_BOT_TOKEN` only applies to the default account.
</Note>

## Telegram side settings

<AccordionGroup>
  <Accordion title="Privacy mode and group visibility">
    Telegram bots default to **Privacy Mode**, which limits what group messages they receive.

    If the bot must see all group messages, either:

    - disable privacy mode via `/setprivacy`, or
    - make the bot a group admin.

    When toggling privacy mode, remove + re-add the bot in each group so Telegram applies the change.

  </Accordion>

  <Accordion title="Group permissions">
    Admin status is controlled in Telegram group settings.

GenSparx can stream partial replies in Telegram DMs using `sendMessageDraft`.

  </Accordion>

  <Accordion title="Helpful BotFather toggles">

    - `/setjoingroups` to allow/deny group adds
    - `/setprivacy` for group visibility behavior

  </Accordion>
</AccordionGroup>

- Outbound Telegram text uses `parse_mode: "HTML"` (Telegram’s supported tag subset).
- Markdown-ish input is rendered into **Telegram-safe HTML** (bold/italic/strike/code/links); block elements are flattened to text with newlines/bullets.
- Raw HTML from models is escaped to avoid Telegram parse errors.
- If Telegram rejects the HTML payload, GenSparx retries the same message as plain text.

<Tabs>
  <Tab title="DM policy">
    `channels.telegram.dmPolicy` controls direct message access:

GenSparx registers native commands (like `/status`, `/reset`, `/model`) with Telegram’s bot menu on startup.
You can add custom commands to the menu via config:

```json5
{
  channels: {
    telegram: {
      customCommands: [
        { command: "backup", description: "Git backup" },
        { command: "generate", description: "Create an image" },
      ],
    },
  },
}
```

    Rules:

    - names are normalized (strip leading `/`, lowercase)
    - valid pattern: `a-z`, `0-9`, `_`, length `1..32`
    - custom commands cannot override native commands
    - conflicts/duplicates are skipped and logged

    Notes:

    - custom commands are menu entries only; they do not auto-implement behavior
    - plugin/skill commands can still work when typed even if not shown in Telegram menu

- Custom commands are **menu entries only**; GenSparx does not implement them unless you handle them elsewhere.
- Command names are normalized (leading `/` stripped, lowercased) and must match `a-z`, `0-9`, `_` (1–32 chars).
- Custom commands **cannot override native commands**. Conflicts are ignored and logged.
- If `commands.native` is disabled, only custom commands are registered (or cleared if none).

    Common setup failure:

    - `setMyCommands failed` usually means outbound DNS/HTTPS to `api.telegram.org` is blocked.

    ### Device pairing commands (`device-pair` plugin)

    When the `device-pair` plugin is installed:

    1. `/pair` generates setup code
    2. paste code in iOS app
    3. `/pair approve` approves latest pending request

    More details: [Pairing](/channels/pairing#pair-via-telegram-recommended-for-ios).

  </Accordion>

To allow all groups with always-respond:

```json5
{
  channels: {
    telegram: {
      groups: {
        "*": { requireMention: false }, // all groups, always respond
      },
    },
  },
}
```

To keep mention-only for all groups (default behavior):

```json5
{
  channels: {
    telegram: {
      groups: {
        "*": { requireMention: true }, // or omit groups entirely
      },
    },
  },
}
```

### Via command (session-level)

Send in the group:

- `/activation always` - respond to all messages
- `/activation mention` - require mentions (default)

**Note:** Commands update session state only. For persistent behavior across restarts, use config.

### Getting the group chat ID

Forward any message from the group to `@userinfobot` or `@getidsbot` on Telegram to see the chat ID (negative number like `-1001234567890`).

**Tip:** For your own user ID, DM the bot and it will reply with your user ID (pairing message), or use `/whoami` once commands are enabled.

**Privacy note:** `@userinfobot` is a third-party bot. If you prefer, add the bot to the group, send a message, and use `gensparx logs --follow` to read `chat.id`, or use the Bot API `getUpdates`.

## Config writes

By default, Telegram is allowed to write config updates triggered by channel events or `/config set|unset`.

This happens when:

- A group is upgraded to a supergroup and Telegram emits `migrate_to_chat_id` (chat ID changes). GenSparx can migrate `channels.telegram.groups` automatically.
- You run `/config set` or `/config unset` in a Telegram chat (requires `commands.config: true`).

Disable with:

```json5
{
  channels: { telegram: { configWrites: false } },
}
```

## Topics (forum supergroups)

Telegram forum topics include a `message_thread_id` per message. GenSparx:

- Appends `:topic:<threadId>` to the Telegram group session key so each topic is isolated.
- Sends typing indicators and replies with `message_thread_id` so responses stay in the topic.
- General topic (thread id `1`) is special: message sends omit `message_thread_id` (Telegram rejects it), but typing indicators still include it.
- Exposes `MessageThreadId` + `IsForum` in template context for routing/templating.
- Topic-specific configuration is available under `channels.telegram.groups.<chatId>.topics.<threadId>` (skills, allowlists, auto-reply, system prompts, disable).
- Topic configs inherit group settings (requireMention, allowlists, skills, prompts, enabled) unless overridden per topic.

Private chats can include `message_thread_id` in some edge cases. GenSparx keeps the DM session key unchanged, but still uses the thread id for replies/draft streaming when it is present.

## Inline Buttons

Telegram supports inline keyboards with callback buttons.

```json5
{
  channels: {
    telegram: {
      capabilities: {
        inlineButtons: "allowlist",
      },
    },
  },
}
```

    Per-account override:

```json5
{
  channels: {
    telegram: {
      accounts: {
        main: {
          capabilities: {
            inlineButtons: "allowlist",
          },
        },
      },
    },
  },
}
```

    Scopes:

    - `off`
    - `dm`
    - `group`
    - `all`
    - `allowlist` (default)

    Legacy `capabilities: ["inlineButtons"]` maps to `inlineButtons: "all"`.

    Message action example:

```json5
{
  action: "send",
  channel: "telegram",
  to: "123456789",
  message: "Choose an option:",
  buttons: [
    [
      { text: "Yes", callback_data: "yes" },
      { text: "No", callback_data: "no" },
    ],
    [{ text: "Cancel", callback_data: "cancel" }],
  ],
}
```

    Callback clicks are passed to the agent as text:
    `callback_data: <value>`

  </Accordion>

  <Accordion title="Telegram message actions for agents and automation">
    Telegram tool actions include:

    - `sendMessage` (`to`, `content`, optional `mediaUrl`, `replyToMessageId`, `messageThreadId`)
    - `react` (`chatId`, `messageId`, `emoji`)
    - `deleteMessage` (`chatId`, `messageId`)
    - `editMessage` (`chatId`, `messageId`, `content`)
    - `createForumTopic` (`chatId`, `name`, optional `iconColor`, `iconCustomEmojiId`)

    Channel message actions expose ergonomic aliases (`send`, `react`, `delete`, `edit`, `sticker`, `sticker-search`, `topic-create`).

    Gating controls:

    - `channels.telegram.actions.sendMessage`
    - `channels.telegram.actions.deleteMessage`
    - `channels.telegram.actions.reactions`
    - `channels.telegram.actions.sticker` (default: disabled)

- Default: `channels.telegram.dmPolicy = "pairing"`. Unknown senders receive a pairing code; messages are ignored until approved (codes expire after 1 hour).
- Approve via:
  - `gensparx pairing list telegram`
  - `gensparx pairing approve telegram <CODE>`
- Pairing is the default token exchange used for Telegram DMs. Details: [Pairing](/start/pairing)
- `channels.telegram.allowFrom` accepts numeric user IDs (recommended) or `@username` entries. It is **not** the bot username; use the human sender’s ID. The wizard accepts `@username` and resolves it to the numeric ID when possible.

    Reaction removal semantics: [/tools/reactions](/tools/reactions)

  </Accordion>

1. Start the gateway and DM your bot.
2. Run `gensparx logs --follow` and look for `from.id`.

    - `[[reply_to_current]]` replies to the triggering message
    - `[[reply_to:<id>]]` replies to a specific Telegram message ID

    `channels.telegram.replyToMode` controls handling:

    - `off` (default)
    - `first`
    - `all`

    Note: `off` disables implicit reply threading. Explicit `[[reply_to_*]]` tags are still honored.

  </Accordion>

  <Accordion title="Forum topics and thread behavior">
    Forum supergroups:

    - topic session keys append `:topic:<threadId>`
    - replies and typing target the topic thread
    - topic config path:
      `channels.telegram.groups.<chatId>.topics.<threadId>`

    General topic (`threadId=1`) special-case:

    - message sends omit `message_thread_id` (Telegram rejects `sendMessage(...thread_id=1)`)
    - typing actions still include `message_thread_id`

    Topic inheritance: topic entries inherit group settings unless overridden (`requireMention`, `allowFrom`, `skills`, `systemPrompt`, `enabled`, `groupPolicy`).

    Template context includes:

    - `MessageThreadId`
    - `IsForum`

    DM thread behavior:

    - private chats with `message_thread_id` keep DM routing but use thread-aware session keys/reply targets.

  </Accordion>

  <Accordion title="Audio, video, and stickers">
    ### Audio messages

    Telegram distinguishes voice notes vs audio files.

    - default: audio file behavior
    - tag `[[audio_as_voice]]` in agent reply to force voice-note send

## Audio messages (voice vs file)

Telegram distinguishes **voice notes** (round bubble) from **audio files** (metadata card).
GenSparx defaults to audio files for backward compatibility.

To force a voice note bubble in agent replies, include this tag anywhere in the reply:

- `[[audio_as_voice]]` — send audio as a voice note instead of a file.

The tag is stripped from the delivered text. Other channels ignore this tag.

For message tool sends, set `asVoice: true` with a voice-compatible audio `media` URL
(`message` is optional when media is present):

```json5
{
  action: "send",
  channel: "telegram",
  to: "123456789",
  media: "https://example.com/voice.ogg",
  asVoice: true,
}
```

    ### Video messages

GenSparx supports receiving and sending Telegram stickers with intelligent caching.

    Message action example:

When a user sends a sticker, GenSparx handles it based on the sticker type:

- **Static stickers (WEBP):** Downloaded and processed through vision. The sticker appears as a `<media:sticker>` placeholder in the message content.
- **Animated stickers (TGS):** Skipped (Lottie format not supported for processing).
- **Video stickers (WEBM):** Skipped (video format not supported for processing).

Template context field available when receiving stickers:

- `Sticker` — object with:
  - `emoji` — emoji associated with the sticker
  - `setName` — name of the sticker set
  - `fileId` — Telegram file ID (send the same sticker back)
  - `fileUniqueId` — stable ID for cache lookup
  - `cachedDescription` — cached vision description when available

### Sticker cache

Stickers are processed through the AI's vision capabilities to generate descriptions. Since the same stickers are often sent repeatedly, GenSparx caches these descriptions to avoid redundant API calls.

**How it works:**

1. **First encounter:** The sticker image is sent to the AI for vision analysis. The AI generates a description (e.g., "A cartoon cat waving enthusiastically").
2. **Cache storage:** The description is saved along with the sticker's file ID, emoji, and set name.
3. **Subsequent encounters:** When the same sticker is seen again, the cached description is used directly. The image is not sent to the AI.

**Cache location:** `~/.openclaw/telegram/sticker-cache.json`

**Cache entry format:**

```json
{
  action: "send",
  channel: "telegram",
  to: "123456789",
  media: "https://example.com/video.mp4",
  asVideoNote: true,
}
```

    Video notes do not support captions; provided message text is sent separately.

    ### Stickers

    Inbound sticker handling:

    - static WEBP: downloaded and processed (placeholder `<media:sticker>`)
    - animated TGS: skipped
    - video WEBM: skipped

    Sticker context fields:

    - `Sticker.emoji`
    - `Sticker.setName`
    - `Sticker.fileId`
    - `Sticker.fileUniqueId`
    - `Sticker.cachedDescription`

    Sticker cache file:

    - `~/.openclaw/telegram/sticker-cache.json`

    Stickers are described once (when possible) and cached to reduce repeated vision calls.

    Enable sticker actions:

```json5
{
  channels: {
    telegram: {
      actions: {
        sticker: true,
      },
    },
  },
}
```

    Send sticker action:

```json5
{
  action: "sticker",
  channel: "telegram",
  to: "123456789",
  fileId: "CAACAgIAAxkBAAI...",
}
```

    Search cached stickers:

```json5
{
  action: "sticker-search",
  channel: "telegram",
  query: "cat waving",
  limit: 5,
}
```

  </Accordion>

  <Accordion title="Reaction notifications">
    Telegram reactions arrive as `message_reaction` updates (separate from message payloads).

    When enabled, OpenClaw enqueues system events like:

    - `Telegram reaction added: 👍 by Alice (@alice) on msg 42`

    Config:

    - `channels.telegram.reactionNotifications`: `off | own | all` (default: `own`)
    - `channels.telegram.reactionLevel`: `off | ack | minimal | extensive` (default: `minimal`)

Telegram can stream **draft bubbles** while the agent is generating a response.
GenSparx uses Bot API `sendMessageDraft` (not real messages) and then sends the
final reply as a normal message.

    - `own` means user reactions to bot-sent messages only (best-effort via sent-message cache).
    - Reaction events still respect Telegram access controls (`dmPolicy`, `allowFrom`, `groupPolicy`, `groupAllowFrom`); unauthorized senders are dropped.
    - Telegram does not provide thread IDs in reaction updates.
      - non-forum groups route to group chat session
      - forum groups route to the group general-topic session (`:topic:1`), not the exact originating topic

    `allowed_updates` for polling/webhook include `message_reaction` automatically.

  </Accordion>

  <Accordion title="Ack reactions">
    `ackReaction` sends an acknowledgement emoji while OpenClaw is processing an inbound message.

    Resolution order:

    - `channels.telegram.accounts.<accountId>.ackReaction`
    - `channels.telegram.ackReaction`
    - `messages.ackReaction`
    - agent identity emoji fallback (`agents.list[].identity.emoji`, else "👀")

    Notes:

    - Telegram expects unicode emoji (for example "👀").
    - Use `""` to disable the reaction for a channel or account.

  </Accordion>

  <Accordion title="Config writes from Telegram events and commands">
    Channel config writes are enabled by default (`configWrites !== false`).

    Telegram-triggered writes include:

    - group migration events (`migrate_to_chat_id`) to update `channels.telegram.groups`
    - `/config set` and `/config unset` (requires command enablement)

**How reactions work:**
Telegram reactions arrive as **separate `message_reaction` events**, not as properties in message payloads. When a user adds a reaction, GenSparx:

1. Receives the `message_reaction` update from Telegram API
2. Converts it to a **system event** with format: `"Telegram reaction added: {emoji} by {user} on msg {id}"`
3. Enqueues the system event using the **same session key** as regular messages
4. When the next message arrives in that conversation, system events are drained and prepended to the agent's context

The agent sees reactions as **system notifications** in the conversation history, not as message metadata.

**Configuration:**

- `channels.telegram.reactionNotifications`: Controls which reactions trigger notifications
  - `"off"` — ignore all reactions
  - `"own"` — notify when users react to bot messages (best-effort; in-memory) (default)
  - `"all"` — notify for all reactions

- `channels.telegram.reactionLevel`: Controls agent's reaction capability
  - `"off"` — agent cannot react to messages
  - `"ack"` — bot sends acknowledgment reactions (👀 while processing) (default)
  - `"minimal"` — agent can react sparingly (guideline: 1 per 5-10 exchanges)
  - `"extensive"` — agent can react liberally when appropriate

**Forum groups:** Reactions in forum groups include `message_thread_id` and use session keys like `agent:main:telegram:group:{chatId}:topic:{threadId}`. This ensures reactions and messages in the same topic stay together.

**Example config:**

```json5
{
  channels: {
    telegram: {
      configWrites: false,
    },
  },
}
```

  </Accordion>

- Telegram bots must explicitly request `message_reaction` in `allowed_updates` (configured automatically by GenSparx)
- For webhook mode, reactions are included in the webhook `allowed_updates`
- For polling mode, reactions are included in the `getUpdates` `allowed_updates`

    Webhook mode:

- Use a chat id (`123456789`) or a username (`@name`) as the target.
- Example: `gensparx message send --channel telegram --target 123456789 --message "hi"`.

## Troubleshooting

<AccordionGroup>
  <Accordion title="Bot does not respond to non mention group messages">

- If you set `channels.telegram.groups.*.requireMention=false`, Telegram’s Bot API **privacy mode** must be disabled.
  - BotFather: `/setprivacy` → **Disable** (then remove + re-add the bot to the group)
- `gensparx channels status` shows a warning when config expects unmentioned group messages.
- `gensparx channels status --probe` can additionally check membership for explicit numeric group IDs (it can’t audit wildcard `"*"` rules).
- Quick test: `/activation always` (session-only; use config for persistence)

  </Accordion>

- If `channels.telegram.groups` is set, the group must be listed or use `"*"`
- Check Privacy Settings in @BotFather → "Group Privacy" should be **OFF**
- Verify bot is actually a member (not just an admin with no read access)
- Check gateway logs: `gensparx logs --follow` (look for "skipping group message")

    - when `channels.telegram.groups` exists, group must be listed (or include `"*"`)
    - verify bot membership in group
    - review logs: `openclaw logs --follow` for skip reasons

  </Accordion>

  <Accordion title="Commands work partially or not at all">

    - authorize your sender identity (pairing and/or numeric `allowFrom`)
    - command authorization still applies even when group policy is `open`
    - `setMyCommands failed` usually indicates DNS/HTTPS reachability issues to `api.telegram.org`

  </Accordion>

- Node 22+ is stricter about `AbortSignal` instances; foreign signals can abort `fetch` calls right away.
- Upgrade to a GenSparx build that normalizes abort signals, or run the gateway on Node 20 until you can upgrade.

    - Node 22+ + custom fetch/proxy can trigger immediate abort behavior if AbortSignal types mismatch.
    - Some hosts resolve `api.telegram.org` to IPv6 first; broken IPv6 egress can cause intermittent Telegram API failures.
    - If logs include `TypeError: fetch failed` or `Network request for 'getUpdates' failed!`, OpenClaw now retries these as recoverable network errors.
    - On VPS hosts with unstable direct egress/TLS, route Telegram API calls through `channels.telegram.proxy`:

```yaml
channels:
  telegram:
    proxy: socks5://user:pass@proxy-host:1080
```

    - Node 22+ defaults to `autoSelectFamily=true` (except WSL2) and `dnsResultOrder=ipv4first`.
    - If your host is WSL2 or explicitly works better with IPv4-only behavior, force family selection:

```yaml
channels:
  telegram:
    network:
      autoSelectFamily: false
```

    - Environment overrides (temporary):
      - `OPENCLAW_TELEGRAM_DISABLE_AUTO_SELECT_FAMILY=1`
      - `OPENCLAW_TELEGRAM_ENABLE_AUTO_SELECT_FAMILY=1`
      - `OPENCLAW_TELEGRAM_DNS_RESULT_ORDER=ipv4first`
    - Validate DNS answers:

```bash
dig +short api.telegram.org A
dig +short api.telegram.org AAAA
```

  </Accordion>
</AccordionGroup>

More help: [Channel troubleshooting](/channels/troubleshooting).

## Telegram config reference pointers

Primary reference:

- `channels.telegram.enabled`: enable/disable channel startup.
- `channels.telegram.botToken`: bot token (BotFather).
- `channels.telegram.tokenFile`: read token from file path.
- `channels.telegram.dmPolicy`: `pairing | allowlist | open | disabled` (default: pairing).
- `channels.telegram.allowFrom`: DM allowlist (numeric Telegram user IDs). `allowlist` requires at least one sender ID. `open` requires `"*"`. `openclaw doctor --fix` can resolve legacy `@username` entries to IDs and can recover allowlist entries from pairing-store files in allowlist migration flows.
- `channels.telegram.defaultTo`: default Telegram target used by CLI `--deliver` when no explicit `--reply-to` is provided.
- `channels.telegram.groupPolicy`: `open | allowlist | disabled` (default: allowlist).
- `channels.telegram.groupAllowFrom`: group sender allowlist (numeric Telegram user IDs). `openclaw doctor --fix` can resolve legacy `@username` entries to IDs. Non-numeric entries are ignored at auth time. Group auth does not use DM pairing-store fallback (`2026.2.25+`).
- Multi-account precedence:
  - `channels.telegram.accounts.default.allowFrom` and `channels.telegram.accounts.default.groupAllowFrom` apply only to the `default` account.
  - Named accounts inherit `channels.telegram.allowFrom` and `channels.telegram.groupAllowFrom` when account-level values are unset.
  - Named accounts do not inherit `channels.telegram.accounts.default.allowFrom` / `groupAllowFrom`.
- `channels.telegram.groups`: per-group defaults + allowlist (use `"*"` for global defaults).
  - `channels.telegram.groups.<id>.groupPolicy`: per-group override for groupPolicy (`open | allowlist | disabled`).
  - `channels.telegram.groups.<id>.requireMention`: mention gating default.
  - `channels.telegram.groups.<id>.skills`: skill filter (omit = all skills, empty = none).
  - `channels.telegram.groups.<id>.allowFrom`: per-group sender allowlist override.
  - `channels.telegram.groups.<id>.systemPrompt`: extra system prompt for the group.
  - `channels.telegram.groups.<id>.enabled`: disable the group when `false`.
  - `channels.telegram.groups.<id>.topics.<threadId>.*`: per-topic overrides (same fields as group).
  - `channels.telegram.groups.<id>.topics.<threadId>.groupPolicy`: per-topic override for groupPolicy (`open | allowlist | disabled`).
  - `channels.telegram.groups.<id>.topics.<threadId>.requireMention`: per-topic mention gating override.
- `channels.telegram.capabilities.inlineButtons`: `off | dm | group | all | allowlist` (default: allowlist).
- `channels.telegram.accounts.<account>.capabilities.inlineButtons`: per-account override.
- `channels.telegram.commands.nativeSkills`: enable/disable Telegram native skills commands.
- `channels.telegram.replyToMode`: `off | first | all` (default: `off`).
- `channels.telegram.textChunkLimit`: outbound chunk size (chars).
- `channels.telegram.chunkMode`: `length` (default) or `newline` to split on blank lines (paragraph boundaries) before length chunking.
- `channels.telegram.linkPreview`: toggle link previews for outbound messages (default: true).
- `channels.telegram.streaming`: `off | partial | block | progress` (live stream preview; default: `off`; `progress` maps to `partial`; `block` is legacy preview mode compatibility).
- `channels.telegram.mediaMaxMb`: inbound Telegram media download/processing cap (MB).
- `channels.telegram.retry`: retry policy for Telegram send helpers (CLI/tools/actions) on recoverable outbound API errors (attempts, minDelayMs, maxDelayMs, jitter).
- `channels.telegram.network.autoSelectFamily`: override Node autoSelectFamily (true=enable, false=disable). Defaults to enabled on Node 22+, with WSL2 defaulting to disabled.
- `channels.telegram.network.dnsResultOrder`: override DNS result order (`ipv4first` or `verbatim`). Defaults to `ipv4first` on Node 22+.
- `channels.telegram.proxy`: proxy URL for Bot API calls (SOCKS/HTTP).
- `channels.telegram.webhookUrl`: enable webhook mode (requires `channels.telegram.webhookSecret`).
- `channels.telegram.webhookSecret`: webhook secret (required when webhookUrl is set).
- `channels.telegram.webhookPath`: local webhook path (default `/telegram-webhook`).
- `channels.telegram.webhookHost`: local webhook bind host (default `127.0.0.1`).
- `channels.telegram.webhookPort`: local webhook bind port (default `8787`).
- `channels.telegram.actions.reactions`: gate Telegram tool reactions.
- `channels.telegram.actions.sendMessage`: gate Telegram tool message sends.
- `channels.telegram.actions.deleteMessage`: gate Telegram tool message deletes.
- `channels.telegram.actions.sticker`: gate Telegram sticker actions — send and search (default: false).
- `channels.telegram.reactionNotifications`: `off | own | all` — control which reactions trigger system events (default: `own` when not set).
- `channels.telegram.reactionLevel`: `off | ack | minimal | extensive` — control agent's reaction capability (default: `minimal` when not set).

- [Configuration reference - Telegram](/gateway/configuration-reference#telegram)

- `agents.list[].groupChat.mentionPatterns` (mention gating patterns).
- `messages.groupChat.mentionPatterns` (global fallback).
- `commands.native` (defaults to `"auto"` → on for Telegram/Discord, off for Slack), `commands.text`, `commands.useAccessGroups` (command behavior). Override with `channels.telegram.commands.native`.
- `messages.responsePrefix`, `messages.ackReaction`, `messages.ackReactionScope`, `messages.removeAckAfterReply`.


