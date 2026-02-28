import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { GenSparxConfig } from "../config/config.js";
import {
  __setModelCatalogImportForTest,
  loadModelCatalog,
  resetModelCatalogCacheForTest,
} from "./model-catalog.js";

type PiSdkModule = typeof import("./pi-model-discovery.js");

vi.mock("./models-config.js", () => ({
  ensureGenSparxModelsJson: vi.fn().mockResolvedValue({ agentDir: "/tmp", wrote: false }),
}));

vi.mock("./agent-paths.js", () => ({
  resolveGenSparxAgentDir: () => "/tmp/gensparx",
}));

describe("loadModelCatalog", () => {
  installModelCatalogTestHooks();

  it("retries after import failure without poisoning the cache", async () => {
    setLoggerOverride({ level: "silent", consoleLevel: "warn" });
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    try {
      const getCallCount = mockCatalogImportFailThenRecover();

      const cfg = {} as OpenClawConfig;
      const first = await loadModelCatalog({ config: cfg });
      expect(first).toEqual([]);

    const cfg = {} as GenSparxConfig;
    const first = await loadModelCatalog({ config: cfg });
    expect(first).toEqual([]);

    const second = await loadModelCatalog({ config: cfg });
    expect(second).toEqual([{ id: "gpt-4.1", name: "GPT-4.1", provider: "openai" }]);
    expect(call).toBe(2);
    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it("returns partial results on discovery errors", async () => {
    setLoggerOverride({ level: "silent", consoleLevel: "warn" });
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    try {
      __setModelCatalogImportForTest(
        async () =>
          ({
            discoverAuthStorage: () => ({}),
            AuthStorage: class {},
            ModelRegistry: class {
              getAll() {
                return [
                  { id: "gpt-4.1", name: "GPT-4.1", provider: "openai" },
                  {
                    get id() {
                      throw new Error("boom");
                    },
                    provider: "openai",
                    name: "bad",
                  },
                ];
              }
            },
          }) as unknown as PiSdkModule,
      );

      const result = await loadModelCatalog({ config: {} as OpenClawConfig });
      expect(result).toEqual([{ id: "gpt-4.1", name: "GPT-4.1", provider: "openai" }]);
      expect(warnSpy).toHaveBeenCalledTimes(1);
    } finally {
      setLoggerOverride(null);
      resetLogger();
    }
  });

  it("adds openai-codex/gpt-5.3-codex-spark when base gpt-5.3-codex exists", async () => {
    __setModelCatalogImportForTest(
      async () =>
        ({
          discoverAuthStorage: () => ({}),
          AuthStorage: class {},
          ModelRegistry: class {
            getAll() {
              return [
                {
                  id: "gpt-5.3-codex",
                  provider: "openai-codex",
                  name: "GPT-5.3 Codex",
                  reasoning: true,
                  contextWindow: 200000,
                  input: ["text"],
                },
                {
                  id: "gpt-5.2-codex",
                  provider: "openai-codex",
                  name: "GPT-5.2 Codex",
                },
              ];
            }
          },
        }) as unknown as PiSdkModule,
    );

    const result = await loadModelCatalog({ config: {} as GenSparxConfig });
    expect(result).toEqual([{ id: "gpt-4.1", name: "GPT-4.1", provider: "openai" }]);
    expect(warnSpy).toHaveBeenCalledTimes(1);
  });
});
