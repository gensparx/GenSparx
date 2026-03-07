import { vi } from "vitest";
import { installChromeUserDataDirHooks } from "./chrome-user-data-dir.test-harness.js";

const chromeUserDataDir = { dir: "/tmp/gensparx" };
installChromeUserDataDirHooks(chromeUserDataDir);

vi.mock("./chrome.js", () => ({
  isChromeCdpReady: vi.fn(async () => true),
  isChromeReachable: vi.fn(async () => true),
  launchGensparxChrome: vi.fn(async () => {
    throw new Error("unexpected launch");
  }),
  resolveGensparxUserDataDir: vi.fn(() => chromeUserDataDir.dir),
  stopGensparxChrome: vi.fn(async () => {}),
}));
