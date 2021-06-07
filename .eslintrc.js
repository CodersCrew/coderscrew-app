const path = require("path")

const configPath = path.resolve(__dirname, "tsconfig.eslint.json")

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: configPath,
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "simple-import-sort",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    complexity: [2, 11],
    "sort-imports": 0,
    "spaced-comment": [2, "always", { markers: ["/"] }],
    "class-methods-use-this": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/array-type": 2,
    "@typescript-eslint/prefer-enum-initializers": 2,
    "@typescript-eslint/no-use-before-define": "off",
    "import/order": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "import/no-self-import": "error",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-restricted-syntax": ["error", "WithStatement", "BinaryExpression[operator='in']"],
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/destructuring-assignment": 0,
        "react/jsx-props-no-spreading": 0,
        "react/no-unescaped-entities": 0,
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "react/react-in-jsx-scope": 0,
      },
    },
    {
      files: ["*.test.(ts|tsx)", "*.stories.tsx", "setupTests.ts"],
      rules: {
        "import/no-extraneous-dependencies": 0,
      },
    },
    {
      files: ["*.js"],
      rules: {
        "import/no-extraneous-dependencies": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 0,
      },
    },
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["app"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: configPath,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
}
