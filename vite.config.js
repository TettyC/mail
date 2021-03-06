import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      common: path.resolve(__dirname, "src/common"),
      components: path.resolve(__dirname, "src/components"),
      api: path.resolve(__dirname, "src/api"),
      views: path.resolve(__dirname, "src/views"),
    },
  },
  server: {
    port: 8080,
  },
});
