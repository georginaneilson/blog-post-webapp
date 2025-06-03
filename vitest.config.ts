import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
    },
    exclude: ["**/node_modules/**", "**/**/__tests__/e2e/"],
  },
});
