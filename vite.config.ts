import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || "")
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Plus léger pour la production
    minify: 'terser', // Optimisation maximale du code
  },
  server: {
    port: 3000,
    open: true
  }
});