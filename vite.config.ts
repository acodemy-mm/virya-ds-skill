import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/virya-ds-skill/",
  resolve: {
    alias: {
      "cursor/canvas": path.resolve(__dirname, "site/cursor-canvas.tsx"),
    },
  },
});
