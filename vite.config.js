import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html',   // login page — served as root /
        home: 'home.html',     // main app — served after login
      }
    }
  },
  server: { port: 5173 }
})
