import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import postcssLit from "rollup-plugin-postcss-lit";

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssPresetEnv, postcssLit],
    },
  },
  build: {
    emptyOutDir: false,
    outDir: "dist",
    lib: {
      entry: {
        globals: "src/globals.ts",
        components: "src/components/index.ts",
      },
      formats: ["es"],
    },
    minify: true,
  },
});
