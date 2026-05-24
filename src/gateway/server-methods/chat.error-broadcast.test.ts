import { describe, expect, it, vi } from "vitest";
vi.mock("../../auto-reply/dispatch.js", () => ({
  dispatchInboundMessage: vi.fn(() => {
    throw new Error("LLM timeout");
  }),
}));

import { chatHandlers } from "./chat.js";
import type { GatewayRequestContext } from "./types.js";

function createMockContext() {
  return {
    broadcast: vi.fn(),
    nodeSendToSession: vi.fn(),
    chatAbortControllers: new Map(),
    agentRunSeq: new Map<string, number>(),
    dedupe: new Map(),
    logGateway: { warn: vi.fn(), debug: vi.fn(), error: vi.fn() },
    addChatRun: vi.fn(),
    removeChatRun: vi.fn(),
  };
}

describe("chat.send error broadcast", () => {
  it("broadcasts an error when chat.send fails synchronously", async () => {
    const ctx = createMockContext();
    const respond = vi.fn();

    await chatHandlers["chat.send"]({
      params: {
        sessionKey: "main",
        message: "hello",
        idempotencyKey: "test-run-1",
      },
      respond: respond as never,
      context: ctx as unknown as GatewayRequestContext,
      req: {} as never,
      client: null as never,
      isWebchatConnect: () => false,
    });

    expect(respond).toHaveBeenNthCalledWith(
      1,
      true,
      expect.objectContaining({ runId: "test-run-1", status: "started" }),
      undefined,
      expect.objectContaining({ runId: "test-run-1" }),
    );
    expect(respond).toHaveBeenNthCalledWith(
      2,
      false,
      expect.objectContaining({ runId: "test-run-1", status: "error" }),
      expect.any(Object),
      expect.any(Object),
    );

    expect(ctx.broadcast).toHaveBeenCalledWith(
      "chat",
      expect.objectContaining({
        runId: "test-run-1",
        state: "error",
        errorMessage: expect.stringContaining("LLM timeout"),
      }),
    );
  });
});
