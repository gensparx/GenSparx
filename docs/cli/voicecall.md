---
summary: "CLI reference for `gensparx voicecall` (voice-call plugin command surface)"
read_when:
  - You use the voice-call plugin and want the CLI entry points
  - You want quick examples for `voicecall call|continue|status|tail|expose`
title: "voicecall"
---

# `gensparx voicecall`

`voicecall` is a plugin-provided command. It only appears if the voice-call plugin is installed and enabled.

Primary doc:

- Voice-call plugin: [Voice Call](/plugins/voice-call)

## Common commands

```bash
gensparx voicecall status --call-id <id>
gensparx voicecall call --to "+15555550123" --message "Hello" --mode notify
gensparx voicecall continue --call-id <id> --message "Any questions?"
gensparx voicecall end --call-id <id>
```

## Exposing webhooks (Tailscale)

```bash
gensparx voicecall expose --mode serve
gensparx voicecall expose --mode funnel
gensparx voicecall unexpose
```

Security note: only expose the webhook endpoint to networks you trust. Prefer Tailscale Serve over Funnel when possible.


