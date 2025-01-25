/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import tsBlankSpace from "ts-blank-space";
// @ts-expect-error hermes-eslint missing ts types
import { parse as _parse, parseForESLint as _parseForESLint } from "hermes-eslint";
import packageJson from "../package.json" with { type: "json" };

const { name, version } = packageJson;

function parse(code: string, options?: Record<string, any>) {
  return _parse(tsBlankSpace(code), options);
}

function parseForESLint(code: string, options?: Record<string, any>) {
  return _parseForESLint(tsBlankSpace(code), options);
}

export default {
  meta: {
    name,
    version,
  },
  parse,
  parseForESLint,
};
