import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

vite.config.ts:1:313: ERROR: Unexpected " "
    at failureErrorWithLog (/home/runner/work/coloring-book/coloring-book/node_modules/esbuild/lib/main.js:1472:15)
