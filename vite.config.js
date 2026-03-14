import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html',
        home: 'home.html',
      }
    }
  },
  server: { port: 5173 }
})
