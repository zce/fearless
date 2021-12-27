/**
 * Vite configuaration file
 * https://vitejs.dev/config/
 */

import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockApp from './mock'

const mock = (): Plugin => ({
  name: 'mock',
  configureServer: async server => {
    // mount mock server, `/api` is the base url
    server.middlewares.use('/api', mockApp)
  }
})

// for parse sfc custom blocks
// https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks
// const sfcCustomBlocks = (): Plugin => ({
//   name: 'sfcCustomBlocks',
//   transform: (code, id) => {
//     if (!id.includes('vue&type=title')) return
//     // title black
//     return `export default Component => {
//       Component.title = '${code}'
//     }`
//   }
// })

export default defineConfig({
  plugins: [vue(), mock()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'naive-ui': ['naive-ui']
        }
      }
    }
  }
})
