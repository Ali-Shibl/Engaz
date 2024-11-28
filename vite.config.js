import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://engaztechnology.net/Amaly_Web/amlyApi',
        changeOrigin: true,
        secure: true,  // For HTTPS requests
        rewrite: (path) => path.replace(/^\/api/, ''),  // Maps /api/login.php to actual endpoint
      },
    },
  },
});
