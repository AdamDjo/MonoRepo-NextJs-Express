/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint-config-custom/server.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
