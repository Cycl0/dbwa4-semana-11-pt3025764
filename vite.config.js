import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Function to get all HTML files in a directory
function getHtmlFiles(dir) {
  return fs.readdirSync(dir)
    .filter(file => path.extname(file) === '.html')
    .reduce((acc, file) => {
      acc[file.replace('.html', '')] = path.resolve(__dirname, dir, file)
      return acc
    }, {})
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        ...getHtmlFiles('.'), // HTML files in root
        sobre: './public/sobre.html',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
