import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'public/index.html',
        home: 'public/home.html',
      }
    }
  },
  server: { port: 5173 }
})
