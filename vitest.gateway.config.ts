import { defineConfig } from "vitest/config";
import baseConfig from "./vitest.config.ts";

const resolvedBaseConfig = await Promise.resolve(baseConfig);
const baseTest = (resolvedBaseConfig as { test?: { exclude?: string[] } }).test ?? {};
const exclude = baseTest.exclude ?? [];

export default defineConfig({
  ...resolvedBaseConfig,
  test: {
    ...baseTest,
    include: ["src/gateway/**/*.test.ts"],
    exclude,
  },
});
