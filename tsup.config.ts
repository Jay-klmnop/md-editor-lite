import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/style.css"],
  format: ["esm"],
  clean: true,
  loader: {
    ".css": "copy",
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
