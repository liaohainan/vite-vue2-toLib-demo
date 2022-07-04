import { defineConfig } from "vite";
const path = require("path");
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  build: {
    outDir: "lib2",
    lib: {
      entry: path.resolve(__dirname, "./build/index.js"),
      name: "MyLib",
      fileName: "MyLib",
    },
    rollupOptions: {
      //  确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
