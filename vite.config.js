import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // مسیرها را نسبی می‌کند تا استایل‌ها روی وب‌ویو گوشی لود شوند
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'www',
    emptyOutDir: true
  }
});
