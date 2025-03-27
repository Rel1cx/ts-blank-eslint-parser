[**ts-blank-eslint-parser**](../README.md)

***

[ts-blank-eslint-parser](../README.md) / parse

# Function: parse()

> **parse**(`code`, `options`?): [`ReturnType`](../ts-blank-eslint-parser/namespaces/parse/type-aliases/ReturnType.md)

Defined in: [index.ts:95](https://github.com/Rel1cx/ts-blank-eslint-parser/blob/3c608ff77cdcdf2858505460c7f3a5aeb8648312/src/index.ts#L95)

Use the parser to parse the JavaScript part of the given TypeScript code and return the estree-compatible AST

## Parameters

### code

`string`

The TypeScript code to parse

### options?

[`Options`](../ts-blank-eslint-parser/namespaces/parse/type-aliases/Options.md)

The options for the parser

## Returns

[`ReturnType`](../ts-blank-eslint-parser/namespaces/parse/type-aliases/ReturnType.md)

The estree-compatible AST

## Example

```ts
import { parse } from "ts-blank-eslint-parser";
const code = "const a: bigint = 1n;";
const ast = parse(code);
```
