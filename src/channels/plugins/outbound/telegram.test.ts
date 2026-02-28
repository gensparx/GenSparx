import { describe, expect, it, vi } from "vitest";
import type { GenSparxConfig } from "../../../config/config.js";
import { telegramOutbound } from "./telegram.js";

describe("telegramOutbound", () => {
  it("passes parsed reply/thread ids for sendText", async () => {
    const sendTelegram = vi.fn().mockResolvedValue({ messageId: "tg-text-1", chatId: "123" });
    const sendText = telegramOutbound.sendText;
    expect(sendText).toBeDefined();

    const result = await telegramOutbound.sendPayload?.({
      cfg: {} as GenSparxConfig,
      to: "telegram:123",
      text: "ignored",
      payload: {
        text: "Hello",
        channelData: {
          telegram: {
            buttons: [[{ text: "Option", callback_data: "/option" }]],
          },
        },
      },
      deps: { sendTelegram },
    });

    expect(sendTelegram).toHaveBeenCalledWith(
      "123",
      "<b>hello</b>",
      expect.objectContaining({
        textMode: "html",
        verbose: false,
        accountId: "work",
        replyToMessageId: 44,
        messageThreadId: 55,
      }),
    );
    expect(result).toEqual({ channel: "telegram", messageId: "tg-text-1", chatId: "123" });
  });

  it("passes media options for sendMedia", async () => {
    const sendTelegram = vi.fn().mockResolvedValue({ messageId: "tg-media-1", chatId: "123" });
    const sendMedia = telegramOutbound.sendMedia;
    expect(sendMedia).toBeDefined();

    const result = await sendMedia!({
      cfg: {},
      to: "123",
      text: "caption",
      mediaUrl: "https://example.com/a.jpg",
      mediaLocalRoots: ["/tmp/media"],
      accountId: "default",
      deps: { sendTelegram },
    });

    expect(sendTelegram).toHaveBeenCalledWith(
      "123",
      "caption",
      expect.objectContaining({
        textMode: "html",
        verbose: false,
        mediaUrl: "https://example.com/a.jpg",
        mediaLocalRoots: ["/tmp/media"],
      }),
    );
    expect(result).toEqual({ channel: "telegram", messageId: "tg-media-1", chatId: "123" });
  });

  it("sends payload media list and applies buttons only to first message", async () => {
    const sendTelegram = vi
      .fn()
      .mockResolvedValueOnce({ messageId: "tg-1", chatId: "123" })
      .mockResolvedValueOnce({ messageId: "tg-2", chatId: "123" });
    const sendPayload = telegramOutbound.sendPayload;
    expect(sendPayload).toBeDefined();

    const result = await telegramOutbound.sendPayload?.({
      cfg: {} as GenSparxConfig,
      to: "telegram:123",
      text: "ignored",
      payload: {
        text: "Caption",
        mediaUrls: ["https://example.com/a.png", "https://example.com/b.png"],
        channelData: {
          telegram: {
            buttons: [[{ text: "Go", callback_data: "/go" }]],
          },
        },
      },
    };

    const result = await sendPayload!({
      cfg: {},
      to: "123",
      text: "",
      payload,
      mediaLocalRoots: ["/tmp/media"],
      accountId: "default",
      deps: { sendTelegram },
    });

    expect(sendTelegram).toHaveBeenCalledTimes(2);
    expect(sendTelegram).toHaveBeenNthCalledWith(
      1,
      "123",
      "caption",
      expect.objectContaining({
        mediaUrl: "https://example.com/1.jpg",
        quoteText: "quoted",
        buttons: [[{ text: "Approve", callback_data: "ok" }]],
      }),
    );
    expect(sendTelegram).toHaveBeenNthCalledWith(
      2,
      "123",
      "",
      expect.objectContaining({
        mediaUrl: "https://example.com/2.jpg",
        quoteText: "quoted",
      }),
    );
    const secondCallOpts = sendTelegram.mock.calls[1]?.[2] as Record<string, unknown>;
    expect(secondCallOpts?.buttons).toBeUndefined();
    expect(result).toEqual({ channel: "telegram", messageId: "tg-2", chatId: "123" });
  });
});
