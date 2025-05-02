import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project_ai_ml/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
