import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { loadConfig, validateConfigObject } from "./config.js";
import { withTempHomeConfig } from "./test-helpers.js";

describe("config discord", () => {
  let previousHome: string | undefined;

  beforeEach(() => {
    previousHome = process.env.HOME;
  });

  afterEach(() => {
    process.env.HOME = previousHome;
  });

  it("loads discord guild map + dm group settings", async () => {
    await withTempHome(async (home) => {
      const configDir = path.join(home, ".gensparx");
      await fs.mkdir(configDir, { recursive: true });
      await fs.writeFile(
        path.join(configDir, "gensparx.json"),
        JSON.stringify(
          {
            channels: {
              discord: {
                enabled: true,
                dm: {
                  enabled: true,
                  allowFrom: ["steipete"],
                  groupEnabled: true,
                  groupChannels: ["gensparx-dm"],
                },
                actions: {
                  emojiUploads: true,
                  stickerUploads: false,
                  channels: true,
                },
                guilds: {
                  "123": {
                    slug: "friends-of-gensparx",
                    requireMention: false,
                    users: ["steipete"],
                    channels: {
                      general: { allow: true },
                    },
                  },
                },
              },
            },
          },
        },
      },
      async () => {
        const cfg = loadConfig();

        expect(cfg.channels?.discord?.enabled).toBe(true);
        expect(cfg.channels?.discord?.dm?.groupEnabled).toBe(true);
        expect(cfg.channels?.discord?.dm?.groupChannels).toEqual(["openclaw-dm"]);
        expect(cfg.channels?.discord?.actions?.emojiUploads).toBe(true);
        expect(cfg.channels?.discord?.actions?.stickerUploads).toBe(false);
        expect(cfg.channels?.discord?.actions?.channels).toBe(true);
        expect(cfg.channels?.discord?.guilds?.["123"]?.slug).toBe("friends-of-openclaw");
        expect(cfg.channels?.discord?.guilds?.["123"]?.channels?.general?.allow).toBe(true);
      },
    );
  });

      expect(cfg.channels?.discord?.enabled).toBe(true);
      expect(cfg.channels?.discord?.dm?.groupEnabled).toBe(true);
      expect(cfg.channels?.discord?.dm?.groupChannels).toEqual(["gensparx-dm"]);
      expect(cfg.channels?.discord?.actions?.emojiUploads).toBe(true);
      expect(cfg.channels?.discord?.actions?.stickerUploads).toBe(false);
      expect(cfg.channels?.discord?.actions?.channels).toBe(true);
      expect(cfg.channels?.discord?.guilds?.["123"]?.slug).toBe("friends-of-gensparx");
      expect(cfg.channels?.discord?.guilds?.["123"]?.channels?.general?.allow).toBe(true);
    });

    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(
        res.issues.some((issue) => issue.message.includes("Discord IDs must be strings")),
      ).toBe(true);
    }
  });
});
