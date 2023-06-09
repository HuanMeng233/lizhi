import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [solidPlugin(),UnoCSS()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
