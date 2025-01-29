# ts-blank-eslint-parser

A custom ESLint parser for `.tsx?` files that strips out erasable TypeScript syntax with `ts-blank-space` then passes the rest to the `meriyah` parser.

## Installation

```bash
# npm
npm install --save-dev ts-blank-eslint-parser

# pnpm
pnpm add --save-dev ts-blank-eslint-parser

# yarn
yarn add --dev ts-blank-eslint-parser
```

## Usage

```js
// eslint.config.js

// @ts-check
import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import tsBlankEslintParser from "ts-blank-eslint-parser";
import globals from "globals";

const GLOB_TS = ["**/*.ts", "**/*.tsx"];

export default [
  {
    files: GLOB_TS,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsBlankEslintParser,
      parserOptions: {
        sourceType: "module",
      },
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
    },
  },
  {
    files: GLOB_TS,
    ...eslintReact.configs.recommended,
  },
];
```

## Unsupported Syntax

Some parts of TypeScript are not supported because they can't be erased in place due to having runtime semantics. See [unsupported_syntax.md](https://github.com/bloomberg/ts-blank-space/blob/main/docs/unsupported_syntax.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
