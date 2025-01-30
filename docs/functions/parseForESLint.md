[**ts-blank-eslint-parser**](../README.md)

***

[ts-blank-eslint-parser](../README.md) / parseForESLint

# Function: parseForESLint()

> **parseForESLint**(`code`, `options`?): [`ReturnType`](../namespaces/parseForESLint/type-aliases/ReturnType.md)

Defined in: [index.ts:145](https://github.com/Rel1cx/ts-blank-eslint-parser/blob/3f8f943ef8e7511c2bdab4b9e4d6b571ae849175/src/index.ts#L145)

Use the parser to parse the JavaScript part of the given TypeScript code and return the AST and a ScopeManager for ESLint

## Parameters

### code

`string`

The TypeScript code to parse

### options?

[`Options`](../namespaces/parseForESLint/type-aliases/Options.md)

The options for the parser

## Returns

[`ReturnType`](../namespaces/parseForESLint/type-aliases/ReturnType.md)

The AST and a ScopeManager for ESLint

## Example

```js
// eslint.config.js

// @ts-check
import eslintJs from "@eslint/js";
import tsBlankEslintParser from "ts-blank-eslint-parser";

export default [
  {
    files: [".ts", ".tsx"],
    languageOptions: {
      parser: tsBlankEslintParser,
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
    },
  },
];
```
