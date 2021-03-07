import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
      {find: 'comps', replacement: path.resolve(__dirname, 'src/components')},
      {find: 'views', replacement: path.resolve(__dirname, 'src/views')},
      {find: 'utils', replacement: path.resolve(__dirname, 'src/utils')},
      {find: 'apis', replacement: path.resolve(__dirname, 'src/apis')},
      {find: 'routes', replacement: path.resolve(__dirname, 'src/routes')},
      {find: 'styles', replacement: path.resolve(__dirname, 'src/styles')},
      {find: 'layouts', replacement: path.resolve(__dirname, 'src/layouts')},
    ]
  },
  plugins: [vue()]
})
