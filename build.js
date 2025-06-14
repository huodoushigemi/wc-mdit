import { build } from 'vite'
import solid from 'vite-plugin-solid'
import { copy } from 'fs-extra'

await build({
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: (format) => `wc-mdit.${format}.js`,
    },
    rollupOptions: {
      external: [/^solid-js/, 'solid-element', 'markdown-it'],
    }
  },
  plugins: [solid()],
})

await build({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.tsx',
      formats: ['umd'],
      name: 'WCMdit',
      fileName: (format) => `wc-mdit.${format}.js`,
    },
    rollupOptions: {
      external: ['markdown-it'],
      output: {
        globals: { 'markdown-it': 'markdownit' },
      }
    }
  },
  plugins: [solid()],
})

await copy('src/theme', 'dist/theme')