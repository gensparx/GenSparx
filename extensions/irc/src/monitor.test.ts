import { describe, expect, it } from "vitest";
import { resolveIrcInboundTarget } from "./monitor.js";

describe("irc monitor inbound target", () => {
  it("keeps channel target for group messages", () => {
    expect(
      resolveIrcInboundTarget({
        target: "#gensparx",
        senderNick: "alice",
      }),
    ).toEqual({
      isGroup: true,
      target: "#gensparx",
      rawTarget: "#gensparx",
    });
  });

  it("maps DM target to sender nick and preserves raw target", () => {
    expect(
      resolveIrcInboundTarget({
        target: "gensparx-bot",
        senderNick: "alice",
      }),
    ).toEqual({
      isGroup: false,
      target: "alice",
      rawTarget: "gensparx-bot",
    });
  });

  it("falls back to raw target when sender nick is empty", () => {
    expect(
      resolveIrcInboundTarget({
        target: "gensparx-bot",
        senderNick: " ",
      }),
    ).toEqual({
      isGroup: false,
      target: "gensparx-bot",
      rawTarget: "gensparx-bot",
    });
  });
});
