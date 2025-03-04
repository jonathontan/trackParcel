import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import importMetaEnv from '@import-meta-env/unplugin'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    importMetaEnv.vite({ example: ".env.example" }),
    nodePolyfills({ include: ["timers"] })
  ],
  base: "/",
})
