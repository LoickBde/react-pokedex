module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["chore", "docs", "feat", "fix", "refactor"]],
    "scope-case": [
      2,
      "always",
      [
        "lower-case",
        "upper-case",
        "camel-case",
        "kebab-case",
        "pascal-case",
        "sentence-case",
        "snake-case",
        "start-case",
      ],
    ],
  },
};
