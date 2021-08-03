/**
 * Vite configuaration file
 * https://vitejs.dev/config/
 */

import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import createMockServer from './mock'

const mock = (): Plugin => ({
  name: 'mock',
  configureServer: async server => {
    // Add mock server, `/api` is the base url
    server.middlewares.use('/api', createMockServer())
  }
})

export default defineConfig({
  plugins: [vue(), mock()]
})
