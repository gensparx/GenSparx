import { describe, expect, it } from "vitest";
import { shortenText } from "./text-format.js";

describe("shortenText", () => {
  it("returns original text when it fits", () => {
    expect(shortenText("gensparx", 16)).toBe("gensparx");
  });

  it("truncates and appends ellipsis when over limit", () => {
    expect(shortenText("gensparx-status-output", 10)).toBe("gensparx-…");
  });

  it("counts multi-byte characters correctly", () => {
    expect(shortenText("hello🙂world", 7)).toBe("hello🙂…");
  });
});
