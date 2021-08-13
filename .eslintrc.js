module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        tabWidth: 2,
        semi: true,
        semicolons: true,
        endOfLine: "auto",
        printWidth: 70,
        proseWrap: "preserve",
      },
    ],
  },
};
