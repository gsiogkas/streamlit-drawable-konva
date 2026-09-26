import react from "@vitejs/plugin-react";
import process from "node:process";
import { defineConfig } from "vite";

/**
 * Browser IIFE build for host embeds (Violit, plain HTML).
 * Writes build/standalone.js without wiping the CCv2 ES bundle.
 */
export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    base: "./",
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "production"),
    },
    build: {
      minify: isProd ? "esbuild" : false,
      outDir: "build",
      emptyOutDir: false,
      sourcemap: !isProd,
      lib: {
        entry: "./src/standalone.ts",
        name: "DrawableKonvaCanvas",
        formats: ["iife"],
        fileName: () => "standalone.js",
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          extend: true,
        },
      },
    },
  };
});
