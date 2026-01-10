import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  clean: true,
  loader: {
    ".css": "copy",
  },
  esbuildOptions(options) {
    if (Array.isArray(options.entryPoints)) {
      options.entryPoints.push("src/style.css");
    }
  },
});
