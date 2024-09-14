import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  loader: {
    ".js": "jsx",
    ".ts": "tsx",
  },
  dts: false,
  sourcemap: false,
  clean: false,
});
