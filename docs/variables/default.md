[**ts-blank-eslint-parser**](../README.md)

***

[ts-blank-eslint-parser](../README.md) / default

# Variable: default

> **default**: `object`

Defined in: [index.ts:180](https://github.com/Rel1cx/ts-blank-eslint-parser/blob/a4a041e415d0c6938bb1fffbf19edbd0f7ff281d/src/index.ts#L180)

## Type declaration

### meta

> **meta**: `object`

#### meta.name

> **name**: `string`

#### meta.version

> **version**: `string`

### parse()

> **parse**: (`code`, `options`?) => [`ReturnType`](../namespaces/parse/type-aliases/ReturnType.md)

Use the parser to parse the JavaScript part of the given TypeScript code and return the estree-compatible AST

#### Parameters

##### code

`string`

The TypeScript code to parse

##### options?

[`Options`](../namespaces/parse/type-aliases/Options.md)

The options for the parser

#### Returns

[`ReturnType`](../namespaces/parse/type-aliases/ReturnType.md)

The estree-compatible AST

#### Example

* ```ts
 * import { parse } from "ts-blank-eslint-parser";
 * const code = "const a: bigint = 1n;";
 * const ast = parse(code);
 * ```

### parseForESLint()

> **parseForESLint**: (`code`, `options`?) => [`ReturnType`](../namespaces/parseForESLint/type-aliases/ReturnType.md)

Use the parser to parse the JavaScript part of the given TypeScript code and return the AST and a ScopeManager for ESLint

#### Parameters

##### code

`string`

The TypeScript code to parse

##### options?

[`Options`](../namespaces/parseForESLint/type-aliases/Options.md)

The options for the parser

#### Returns

[`ReturnType`](../namespaces/parseForESLint/type-aliases/ReturnType.md)

The AST and a ScopeManager for ESLint

#### Example

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
