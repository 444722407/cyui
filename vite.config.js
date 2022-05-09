import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const md = require("vite-plugin-markdown");
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    md.plugin({
      mode: ["html", "vue"],
    }),
    vitePluginVue
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build:{
    sourcemap:false,
    
    rollupOptions:{
      output:{
        // js的文件名称
        entryFileNames:"assets/[name].js",
        // js中其他分块的文件名
        chunkFileNames:"assets/[name].js",
        // 其他文件的文件名 例如css、png
        assetFileNames:"assets/[name].[ext]"
      }
     
      
    }
  }
})
