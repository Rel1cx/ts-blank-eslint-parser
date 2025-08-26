import type { Options } from "tsdown";

export default {
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: false,
  outDir: "dist",
  platform: "node",
  shims: false,
  sourcemap: false,
  target: "es2021",
  treeshake: true,
} satisfies Options;
