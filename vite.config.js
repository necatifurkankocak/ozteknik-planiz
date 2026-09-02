import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" → GitHub Pages alt dizininde (kullanici.github.io/repo/) sorunsuz çalışır
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { chunkSizeWarningLimit: 3000 },
});
