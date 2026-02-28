# @openclaw/feishu

Feishu/Lark channel plugin for GenSparx (WebSocket bot events).

## Install (local checkout)

```bash
gensparx plugins install ./extensions/feishu
```

## Install (npm)

```bash
gensparx plugins install @openclaw/feishu
```

Onboarding: select Feishu/Lark and confirm the install prompt to fetch the plugin automatically.

## Config

```json5
{
  channels: {
    feishu: {
      accounts: {
        default: {
          appId: "cli_xxx",
          appSecret: "xxx",
          domain: "feishu",
          enabled: true,
        },
      },
      dmPolicy: "pairing",
      groupPolicy: "open",
      blockStreaming: true,
    },
  },
}
```

Lark (global) tenants should set `domain: "lark"` (or a full https:// domain).

Restart the gateway after config changes.

## Docs

https://docs.gensparx.ai/channels/feishu
