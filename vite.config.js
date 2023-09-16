import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.js",
    },
  },
});
