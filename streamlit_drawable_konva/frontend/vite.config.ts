import react from "@vitejs/plugin-react";
import process from "node:process";
import { defineConfig, UserConfig } from "vite";

/**
 * Vite configuration for Streamlit Custom Component v2 (React + Konva).
 * Pinned to Vite 5 for Node 18 compatibility.
 */
export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === "production";
  const isDev = !isProd;

  return {
    base: "./",
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    build: {
      minify: isDev ? false : "esbuild",
      outDir: "build",
      sourcemap: isDev,
      lib: {
        entry: "./src/index.tsx",
        name: "DrawableKonvaCanvas",
        formats: ["es"],
        fileName: "index",
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  } satisfies UserConfig;
});
