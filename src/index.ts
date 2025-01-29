import tsBlankSpace from "ts-blank-space";
import * as meriyah from "meriyah";
// @ts-expect-error eslint-scope is not typed
import * as eslintScope from "eslint-scope";
import packageJson from "../package.json" with { type: "json" };

const { name, version } = packageJson;

const defaultOptions: meriyah.Options = {
  // The flag to allow module code
  module: true,

  // The flag to enable stage 3 support (ESNext)
  next: false,

  // The flag to enable start, end offsets and range: [start, end] to each node
  ranges: true,

  // Enable web compatibility
  webcompat: false,

  // The flag to enable line/column location information to each node
  loc: true,

  // The flag to attach raw property to each literal and identifier node
  raw: true,

  // The flag to allow return in the global scope
  globalReturn: false,

  // The flag to enable implied strict mode
  impliedStrict: true,

  // Allows comment extraction. Accepts either a function or array
  // onComment: [],

  // Allows detection of automatic semicolon insertion. Accepts a callback function that will be passed the character offset where the semicolon was inserted
  // onInsertedSemicolon: (pos) => { },

  // Allows token extraction. Accepts either a function or array
  // onToken: [],

  // Enable non-standard parenthesized expression node
  // preserveParens: false,

  // Enable lexical binding and scope tracking
  // lexical: false,

  // Adds a source attribute in every node’s loc object when the locations option is `true`
  // source: undefined, // Set to source: 'source-file.js'

  // Enable React JSX parsing
  jsx: true,
};

export const meta = {
  name,
  version,
};

export function parseForESLint(code: string, options?: parseForESLint.Options): parseForESLint.ReturnType {
  const tokens: meriyah.Options["onToken"] = [];
  const comments: meriyah.Options["onComment"] = [];
  const opts = {
    ...defaultOptions,
    ...options,
    onToken: tokens,
    onComment: comments,
  };
  const ast = {
    ...meriyah.parse(tsBlankSpace(code), opts),
    tokens,
    comments,
  };
  const scopeManager = eslintScope.analyze(ast, {
    ecmaVersion: 2022,
    impliedStrict: !!opts.impliedStrict,
    sourceType: opts.module
      ? "module"
      : "script",
  });
  return {
    ast,
    scopeManager,
  };
}

export declare namespace parseForESLint {
  type Options = Omit<meriyah.Options, "onToken" | "onComment">;
  type ReturnType = {
    ast: meriyah.ESTree.Program;
    scopeManager: eslintScope.ScopeManager;
  };
}

export function parse(code: string, options?: parse.Options): parse.ReturnType {
  return parseForESLint(code, options).ast;
}

export declare namespace parse {
  type Options = Omit<meriyah.Options, "onToken" | "onComment">;
  type ReturnType = meriyah.ESTree.Program;
}

export default {
  meta,
  parse,
  parseForESLint,
};
