import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/wedding/', // Set this to your repository name
  plugins: [react()],
});
