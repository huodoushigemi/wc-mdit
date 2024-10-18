import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/index.tsx',
      name: 'WCHighlightJS',
      fileName: (format) => `wc-hljs.${format}.js`,
    },
    rollupOptions: {
      external: [/^solid-js/, 'solid-element', 'markdown-it'],
    },
  },
  plugins: [solid()],
})
