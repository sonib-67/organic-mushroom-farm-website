import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR === 'true' ? false : true,
    port: 5173,
    open: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor-react';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
          if (id.includes('src/pages/Article')) return 'articles';
          if (id.includes('src/pages/')) return 'pages';
          if (id.includes('src/data/')) return 'data';
        }
      }
    },
  },

  preview: {
    port: 4173,
    open: true,
  },
}));