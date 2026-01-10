import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    style: "src/style.css",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  loader: {
    ".css": "copy",
  },
});
