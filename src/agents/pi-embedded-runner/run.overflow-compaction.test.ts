import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock("./run/attempt.js", () => ({
  runEmbeddedAttempt: vi.fn(),
}));

vi.mock("./compact.js", () => ({
  compactEmbeddedPiSessionDirect: vi.fn(),
}));

vi.mock("./model.js", () => ({
  resolveModel: vi.fn(() => ({
    model: {
      id: "test-model",
      provider: "anthropic",
      contextWindow: 200000,
      api: "messages",
    },
    error: null,
    authStorage: {
      setRuntimeApiKey: vi.fn(),
    },
    modelRegistry: {},
  })),
}));

vi.mock("../model-auth.js", () => ({
  ensureAuthProfileStore: vi.fn(() => ({})),
  getApiKeyForModel: vi.fn(async () => ({
    apiKey: "test-key",
    profileId: "test-profile",
    source: "test",
  })),
  resolveAuthProfileOrder: vi.fn(() => []),
}));

vi.mock("../models-config.js", () => ({
  ensureGenSparxModelsJson: vi.fn(async () => {}),
}));

vi.mock("../context-window-guard.js", () => ({
  CONTEXT_WINDOW_HARD_MIN_TOKENS: 1000,
  CONTEXT_WINDOW_WARN_BELOW_TOKENS: 5000,
  evaluateContextWindowGuard: vi.fn(() => ({
    shouldWarn: false,
    shouldBlock: false,
    tokens: 200000,
    source: "model",
  })),
  resolveContextWindowInfo: vi.fn(() => ({
    tokens: 200000,
    source: "model",
  })),
}));

vi.mock("../../process/command-queue.js", () => ({
  enqueueCommandInLane: vi.fn((_lane: string, task: () => unknown) => task()),
}));

vi.mock("../../utils.js", () => ({
  resolveUserPath: vi.fn((p: string) => p),
}));

vi.mock("../../utils/message-channel.js", () => ({
  isMarkdownCapableMessageChannel: vi.fn(() => true),
}));

vi.mock("../agent-paths.js", () => ({
  resolveGenSparxAgentDir: vi.fn(() => "/tmp/agent-dir"),
}));

vi.mock("../auth-profiles.js", () => ({
  markAuthProfileFailure: vi.fn(async () => {}),
  markAuthProfileGood: vi.fn(async () => {}),
  markAuthProfileUsed: vi.fn(async () => {}),
}));

vi.mock("../defaults.js", () => ({
  DEFAULT_CONTEXT_TOKENS: 200000,
  DEFAULT_MODEL: "test-model",
  DEFAULT_PROVIDER: "anthropic",
}));

vi.mock("../failover-error.js", () => ({
  FailoverError: class extends Error {},
  resolveFailoverStatus: vi.fn(),
}));

vi.mock("../usage.js", () => ({
  normalizeUsage: vi.fn(() => undefined),
}));

vi.mock("./lanes.js", () => ({
  resolveSessionLane: vi.fn(() => "session-lane"),
  resolveGlobalLane: vi.fn(() => "global-lane"),
}));

vi.mock("./logger.js", () => ({
  log: {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock("./run/payloads.js", () => ({
  buildEmbeddedRunPayloads: vi.fn(() => []),
}));

vi.mock("./utils.js", () => ({
  describeUnknownError: vi.fn((err: unknown) => {
    if (err instanceof Error) {
      return err.message;
    }
    return String(err);
  }),
}));

vi.mock("../pi-embedded-helpers.js", async () => {
  return {
    isCompactionFailureError: (msg?: string) => {
      if (!msg) {
        return false;
      }
      const lower = msg.toLowerCase();
      return lower.includes("request_too_large") && lower.includes("summarization failed");
    },
    isContextOverflowError: (msg?: string) => {
      if (!msg) {
        return false;
      }
      const lower = msg.toLowerCase();
      return lower.includes("request_too_large") || lower.includes("request size exceeds");
    },
    isFailoverAssistantError: vi.fn(() => false),
    isFailoverErrorMessage: vi.fn(() => false),
    isAuthAssistantError: vi.fn(() => false),
    isRateLimitAssistantError: vi.fn(() => false),
    classifyFailoverReason: vi.fn(() => null),
    formatAssistantErrorText: vi.fn(() => ""),
    pickFallbackThinkingLevel: vi.fn(() => null),
    isTimeoutErrorMessage: vi.fn(() => false),
    parseImageDimensionError: vi.fn(() => null),
  };
});

import type { EmbeddedRunAttemptResult } from "./run/types.js";
import { compactEmbeddedPiSessionDirect } from "./compact.js";
import { log } from "./logger.js";
import { runEmbeddedPiAgent } from "./run.js";
import {
  makeAttemptResult,
  makeCompactionSuccess,
  makeOverflowError,
  mockOverflowRetrySuccess,
  queueOverflowAttemptWithOversizedToolOutput,
} from "./run.overflow-compaction.fixture.js";
import { mockedGlobalHookRunner } from "./run.overflow-compaction.mocks.shared.js";
import {
  mockedCompactDirect,
  mockedRunEmbeddedAttempt,
  mockedSessionLikelyHasOversizedToolResults,
  mockedTruncateOversizedToolResultsInSession,
  overflowBaseRunParams,
} from "./run.overflow-compaction.shared-test.js";
const mockedPickFallbackThinkingLevel = vi.mocked(pickFallbackThinkingLevel);

describe("runEmbeddedPiAgent overflow compaction trigger routing", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedGlobalHookRunner.hasHooks.mockImplementation(() => false);
  });

  it("passes precomputed legacy before_agent_start result into the attempt", async () => {
    const legacyResult = {
      modelOverride: "legacy-model",
      prependContext: "legacy context",
    };
    mockedGlobalHookRunner.hasHooks.mockImplementation(
      (hookName) => hookName === "before_agent_start",
    );
    mockedGlobalHookRunner.runBeforeAgentStart.mockResolvedValueOnce(legacyResult);
    mockedRunEmbeddedAttempt.mockResolvedValueOnce(makeAttemptResult({ promptError: null }));

    await runEmbeddedPiAgent({
      sessionId: "test-session",
      sessionKey: "test-key",
      sessionFile: "/tmp/session.json",
      workspaceDir: "/tmp/workspace",
      prompt: "hello",
      timeoutMs: 30000,
      runId: "run-legacy-pass-through",
    });

    expect(mockedGlobalHookRunner.runBeforeAgentStart).toHaveBeenCalledTimes(1);
    expect(mockedRunEmbeddedAttempt).toHaveBeenCalledWith(
      expect.objectContaining({
        legacyBeforeAgentStartResult: legacyResult,
      }),
    );
  });

  it("passes trigger=overflow when retrying compaction after context overflow", async () => {
    mockOverflowRetrySuccess({
      runEmbeddedAttempt: mockedRunEmbeddedAttempt,
      compactDirect: mockedCompactDirect,
    });

    await runEmbeddedPiAgent(overflowBaseRunParams);

    expect(mockedCompactDirect).toHaveBeenCalledTimes(1);
    expect(mockedCompactDirect).toHaveBeenCalledWith(
      expect.objectContaining({
        trigger: "overflow",
        authProfileId: "test-profile",
      }),
    );
  });

  it("does not reset compaction attempt budget after successful tool-result truncation", async () => {
    const overflowError = queueOverflowAttemptWithOversizedToolOutput(
      mockedRunEmbeddedAttempt,
      makeOverflowError(),
    );
    mockedRunEmbeddedAttempt
      .mockResolvedValueOnce(makeAttemptResult({ promptError: overflowError }))
      .mockResolvedValueOnce(makeAttemptResult({ promptError: overflowError }))
      .mockResolvedValueOnce(makeAttemptResult({ promptError: overflowError }));

    mockedCompactDirect
      .mockResolvedValueOnce({
        ok: false,
        compacted: false,
        reason: "nothing to compact",
      })
      .mockResolvedValueOnce(
        makeCompactionSuccess({
          summary: "Compacted 2",
          firstKeptEntryId: "entry-5",
          tokensBefore: 160000,
        }),
      )
      .mockResolvedValueOnce(
        makeCompactionSuccess({
          summary: "Compacted 3",
          firstKeptEntryId: "entry-7",
          tokensBefore: 140000,
        }),
      );

    mockedSessionLikelyHasOversizedToolResults.mockReturnValue(true);
    mockedTruncateOversizedToolResultsInSession.mockResolvedValueOnce({
      truncated: true,
      truncatedCount: 1,
    });

    const result = await runEmbeddedPiAgent(overflowBaseRunParams);

    expect(mockedCompactDirect).toHaveBeenCalledTimes(3);
    expect(mockedTruncateOversizedToolResultsInSession).toHaveBeenCalledTimes(1);
    expect(mockedRunEmbeddedAttempt).toHaveBeenCalledTimes(4);
    expect(result.meta.error?.kind).toBe("context_overflow");
  });

  it("returns retry_limit when repeated retries never converge", async () => {
    mockedRunEmbeddedAttempt.mockClear();
    mockedCompactDirect.mockClear();
    mockedPickFallbackThinkingLevel.mockClear();
    mockedRunEmbeddedAttempt.mockResolvedValue(
      makeAttemptResult({ promptError: new Error("unsupported reasoning mode") }),
    );
    mockedPickFallbackThinkingLevel.mockReturnValue("low");

    const result = await runEmbeddedPiAgent(overflowBaseRunParams);

    expect(mockedRunEmbeddedAttempt).toHaveBeenCalledTimes(32);
    expect(mockedCompactDirect).not.toHaveBeenCalled();
    expect(result.meta.error?.kind).toBe("retry_limit");
    expect(result.payloads?.[0]?.isError).toBe(true);
  });
});
