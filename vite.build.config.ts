import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import globals from 'rollup-plugin-external-globals'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/index.tsx',
      name: 'WCMdit',
      fileName: (format) => `wc-mdit.${format}.js`,
    },
    rollupOptions: {
      external: ['markdown-it'],
      plugins: [
        globals({ 'markdown-it': 'markdownit' })
      ]
    },
  },
  plugins: [solid()],
})
