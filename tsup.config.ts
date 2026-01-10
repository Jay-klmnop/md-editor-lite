import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/style.css"],
  format: ["esm", "cjs"],
  clean: true,
  loader: {
    ".css": "copy",
  },
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
