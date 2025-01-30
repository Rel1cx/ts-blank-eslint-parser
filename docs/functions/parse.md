[**ts-blank-eslint-parser**](../README.md)

***

[ts-blank-eslint-parser](../README.md) / parse

# Function: parse()

> **parse**(`code`, `options`?): [`ReturnType`](../namespaces/parse/type-aliases/ReturnType.md)

Defined in: [index.ts:95](https://github.com/Rel1cx/ts-blank-eslint-parser/blob/2287f77b69b11b20109967a407382e7f2c2ef666/src/index.ts#L95)

Use the parser to parse the JavaScript part of the given TypeScript code and return the estree-compatible AST

## Parameters

### code

`string`

The TypeScript code to parse

### options?

[`Options`](../namespaces/parse/type-aliases/Options.md)

The options for the parser

## Returns

[`ReturnType`](../namespaces/parse/type-aliases/ReturnType.md)

The estree-compatible AST

## Example

* ```ts
 * import { parse } from "ts-blank-eslint-parser";
 * const code = "const a: bigint = 1n;";
 * const ast = parse(code);
 * ```
