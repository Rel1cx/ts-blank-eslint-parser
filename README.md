# ts-blank-eslint-parser

A custom ESLint parser for `.tsx?` files that strips out erasable TypeScript syntax with `ts-blank-space` then passes the rest to the `meriyah` parser.

> [!IMPORTANT]
> The `ts-blank-eslint-parser` is a work in progress and comes with limitations:
>
> - No support for [TypeScript syntax](https://github.com/bloomberg/ts-blank-space/blob/main/docs/unsupported_syntax.md) that need transformation like enums, namespaces, decorators
> - No support for rules that require type information
> - No fixable support for types (the types will also be stripped out in the fix output)
>
> Use it only if you are okay with the limitations.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
