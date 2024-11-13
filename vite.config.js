import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this to match your project's base URL
  build: {
    outDir: 'dist', // Adjust output directory as needed
    emptyOutDir: true, // Clear output directory before building
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
