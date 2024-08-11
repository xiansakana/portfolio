import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // 这会强制Vite不内联SVG文件
  },
  publicDir: "public", // 确保这指向包含logo.svg的文件夹
});
