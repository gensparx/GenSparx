import { describe, expect, it } from "vitest";
import { normalizeCompatibilityConfigValues } from "./doctor-legacy-config.js";

describe("normalizeLegacyConfigValues", () => {
  let previousOauthDir: string | undefined;
  let tempOauthDir: string | undefined;

  const writeCreds = (dir: string) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "creds.json"), JSON.stringify({ me: {} }));
  };

  beforeEach(() => {
    previousOauthDir = process.env.GENSPARX_OAUTH_DIR;
    tempOauthDir = fs.mkdtempSync(path.join(os.tmpdir(), "gensparx-oauth-"));
    process.env.GENSPARX_OAUTH_DIR = tempOauthDir;
  });

  afterEach(() => {
    if (previousOauthDir === undefined) {
      delete process.env.GENSPARX_OAUTH_DIR;
    } else {
      process.env.GENSPARX_OAUTH_DIR = previousOauthDir;
    }
    if (tempOauthDir) {
      fs.rmSync(tempOauthDir, { recursive: true, force: true });
      tempOauthDir = undefined;
    }
  });

  it("does not add whatsapp config when missing and no auth exists", () => {
    const res = normalizeLegacyConfigValues({
      messages: { ackReaction: "👀" },
    });

    expect(res.config.channels?.telegram?.streaming).toBe("off");
    expect(res.config.channels?.telegram?.streamMode).toBeUndefined();
    expect(res.changes).toEqual(["Normalized channels.telegram.streaming boolean → enum (off)."]);
  });

  it("normalizes discord boolean streaming aliases to enum", () => {
    const res = normalizeCompatibilityConfigValues({
      channels: {
        discord: {
          streaming: true,
        },
      },
    });

    expect(res.config.channels?.discord?.streaming).toBe("partial");
    expect(res.config.channels?.discord?.streamMode).toBeUndefined();
    expect(res.changes).toEqual([
      "Normalized channels.discord.streaming boolean → enum (partial).",
    ]);
  });

  it("does not add whatsapp config when only auth exists (issue #900)", () => {
    const credsDir = path.join(tempOauthDir ?? "", "whatsapp", "default");
    writeCreds(credsDir);

    const res = normalizeLegacyConfigValues({
      messages: { ackReaction: "👀", ackReactionScope: "group-mentions" },
    });

    expect(res.config.channels?.whatsapp).toBeUndefined();
    expect(res.changes).toEqual([]);
  });

  it("does not add whatsapp config when only legacy auth exists (issue #900)", () => {
    const credsPath = path.join(tempOauthDir ?? "", "creds.json");
    fs.writeFileSync(credsPath, JSON.stringify({ me: {} }));

    const res = normalizeLegacyConfigValues({
      messages: { ackReaction: "👀", ackReactionScope: "group-mentions" },
    });

    expect(res.config.channels?.whatsapp).toBeUndefined();
    expect(res.changes).toEqual([]);
  });

  it("does not add whatsapp config when only non-default auth exists (issue #900)", () => {
    const credsDir = path.join(tempOauthDir ?? "", "whatsapp", "work");
    writeCreds(credsDir);

    const res = normalizeLegacyConfigValues({
      messages: { ackReaction: "👀", ackReactionScope: "group-mentions" },
    });

    expect(res.config.channels?.whatsapp).toBeUndefined();
    expect(res.changes).toEqual([]);
  });

  it("copies legacy ack reaction when authDir override exists", () => {
    const customDir = fs.mkdtempSync(path.join(os.tmpdir(), "gensparx-wa-auth-"));
    try {
      writeCreds(customDir);

      const res = normalizeLegacyConfigValues({
        messages: { ackReaction: "👀", ackReactionScope: "group-mentions" },
        channels: { whatsapp: { accounts: { work: { authDir: customDir } } } },
      });

      expect(res.config.channels?.whatsapp?.ackReaction).toEqual({
        emoji: "👀",
        direct: false,
        group: "mentions",
      });
    } finally {
      fs.rmSync(customDir, { recursive: true, force: true });
    }
  });
});
