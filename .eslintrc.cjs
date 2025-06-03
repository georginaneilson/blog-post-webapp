/* eslint-env node */

module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    ".eslintrc.cjs",
    "vitest.config.ts",
    "vitest.setup.ts",
    "lint-staged.config.cjs",
    "vite.config.ts",
  ],
  plugins: ["@typescript-eslint"],
  root: true,
};
