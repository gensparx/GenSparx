import * as fs from "node:fs/promises";
import * as path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { withTempDir } from "../test-utils/temp-dir.js";
import {
  cameraTempPath,
  parseCameraClipPayload,
  parseCameraSnapPayload,
  writeCameraClipPayloadToFile,
  writeBase64ToFile,
  writeUrlToFile,
} from "./nodes-camera.js";
import { parseScreenRecordPayload, screenRecordTempPath } from "./nodes-screen.js";

async function withCameraTempDir<T>(run: (dir: string) => Promise<T>): Promise<T> {
  return await withTempDir("openclaw-test-", run);
}

describe("nodes camera helpers", () => {
  function stubFetchResponse(response: Response) {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => response),
    );
  }

  it("parses camera.snap payload", () => {
    expect(
      parseCameraSnapPayload({
        format: "jpg",
        base64: "aGk=",
        width: 10,
        height: 20,
      }),
    ).toEqual({ format: "jpg", base64: "aGk=", width: 10, height: 20 });
  });

  it("rejects invalid camera.snap payload", () => {
    expect(() => parseCameraSnapPayload({ format: "jpg" })).toThrow(
      /invalid camera\.snap payload/i,
    );
  });

  it("parses camera.clip payload", () => {
    expect(
      parseCameraClipPayload({
        format: "mp4",
        base64: "AAEC",
        durationMs: 1234,
        hasAudio: true,
      }),
    ).toEqual({
      format: "mp4",
      base64: "AAEC",
      durationMs: 1234,
      hasAudio: true,
    });
  });

  it("rejects invalid camera.clip payload", () => {
    expect(() =>
      parseCameraClipPayload({ format: "mp4", base64: "AAEC", durationMs: 1234 }),
    ).toThrow(/invalid camera\.clip payload/i);
  });

  it("builds stable temp paths when id provided", () => {
    const p = cameraTempPath({
      kind: "snap",
      facing: "front",
      ext: "jpg",
      tmpDir: "/tmp",
      id: "id1",
    });
    expect(p).toBe(path.join("/tmp", "gensparx-camera-snap-front-id1.jpg"));
  });

  it("writes camera clip payload to temp path", async () => {
    await withCameraTempDir(async (dir) => {
      const out = await writeCameraClipPayloadToFile({
        payload: {
          format: "mp4",
          base64: "aGk=",
          durationMs: 200,
          hasAudio: false,
        },
        facing: "front",
        tmpDir: dir,
        id: "clip1",
      });
      expect(out).toBe(path.join(dir, "openclaw-camera-clip-front-clip1.mp4"));
      await expect(fs.readFile(out, "utf8")).resolves.toBe("hi");
    });
  });

  it("writes camera clip payload from url", async () => {
    stubFetchResponse(new Response("url-clip", { status: 200 }));
    await withCameraTempDir(async (dir) => {
      const out = await writeCameraClipPayloadToFile({
        payload: {
          format: "mp4",
          url: "https://example.com/clip.mp4",
          durationMs: 200,
          hasAudio: false,
        },
        facing: "back",
        tmpDir: dir,
        id: "clip2",
      });
      expect(out).toBe(path.join(dir, "openclaw-camera-clip-back-clip2.mp4"));
      await expect(fs.readFile(out, "utf8")).resolves.toBe("url-clip");
    });
  });

  it("writes base64 to file", async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-test-"));
    const out = path.join(dir, "x.bin");
    await writeBase64ToFile(out, "aGk=");
    await expect(fs.readFile(out, "utf8")).resolves.toBe("hi");
    await fs.rm(dir, { recursive: true, force: true });
  });
});
