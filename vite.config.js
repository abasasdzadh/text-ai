import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'www', // خروجی نهایی به پوشه پیش‌فرض خازنی خروجی می‌دهد
    emptyOutDir: true
  }
});
