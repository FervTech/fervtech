import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';  // Add this for alias resolution

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {  // Add this block
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});