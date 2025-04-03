import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],base: '/Authentication/',
  build: {
    outDir: '../dist'  // Moves the build output to the correct location
  }
})



