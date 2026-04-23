import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 2. '@'를 'src' 폴더 경로로 매핑
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
