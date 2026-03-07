import type { GensparxConfig } from "gensparx/plugin-sdk/mattermost";
import { describe, expect, it } from "vitest";
import { resolveDefaultMattermostAccountId } from "./accounts.js";

describe("resolveDefaultMattermostAccountId", () => {
  it("prefers channels.mattermost.defaultAccount when it matches a configured account", () => {
    const cfg: GensparxConfig = {
      channels: {
        mattermost: {
          defaultAccount: "alerts",
          accounts: {
            default: { botToken: "tok-default", baseUrl: "https://chat.example.com" },
            alerts: { botToken: "tok-alerts", baseUrl: "https://alerts.example.com" },
          },
        },
      },
    };

    expect(resolveDefaultMattermostAccountId(cfg)).toBe("alerts");
  });

  it("normalizes channels.mattermost.defaultAccount before lookup", () => {
    const cfg: GensparxConfig = {
      channels: {
        mattermost: {
          defaultAccount: "Ops Team",
          accounts: {
            "ops-team": { botToken: "tok-ops", baseUrl: "https://chat.example.com" },
          },
        },
      },
    };

    expect(resolveDefaultMattermostAccountId(cfg)).toBe("ops-team");
  });

  it("falls back when channels.mattermost.defaultAccount is missing", () => {
    const cfg: GensparxConfig = {
      channels: {
        mattermost: {
          defaultAccount: "missing",
          accounts: {
            default: { botToken: "tok-default", baseUrl: "https://chat.example.com" },
            alerts: { botToken: "tok-alerts", baseUrl: "https://alerts.example.com" },
          },
        },
      },
    };

    expect(resolveDefaultMattermostAccountId(cfg)).toBe("default");
  });
});
