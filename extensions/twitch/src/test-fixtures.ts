import type { GensparxConfig } from "gensparx/plugin-sdk/twitch";
import { afterEach, beforeEach, vi } from "vitest";

export const BASE_TWITCH_TEST_ACCOUNT = {
  username: "testbot",
  clientId: "test-client-id",
  channel: "#testchannel",
};

export function makeTwitchTestConfig(account: Record<string, unknown>): GensparxConfig {
  return {
    channels: {
      twitch: {
        accounts: {
          default: account,
        },
      },
    },
  } as unknown as GensparxConfig;
}

export function installTwitchTestHooks() {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
}
