import { defineConfig } from 'vite'
const path = require('path')
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  },

  build: {
    outDir: 'lib2',
    lib: {
      entry: path.resolve(__dirname, './build/index.js'),
      name: 'MyLib',
      fileName: 'MyLib'
    },
    
  }
})
