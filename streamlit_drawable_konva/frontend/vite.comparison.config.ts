import react from "@vitejs/plugin-react";
import process from "node:process";
import { defineConfig } from "vite";

/** Streamlit CCv2 ES bundle for st_image_comparison. */
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
        entry: "./src/comparison.tsx",
        name: "DrawableKonvaComparison",
        formats: ["es"],
        fileName: "comparison",
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  };
});
