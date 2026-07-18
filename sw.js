const CACHE_NAME = 'textai-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './src/css/styles.css',
  './src/js/main.js',
  './src/js/theme.js',
  './src/js/history.js',
  './src/js/renderer.js',
  './src/js/clipboard.js',
  './src/js/utils.js',
  // Assets محلی
  './assets/vendor/font-awesome/css/font-awesome.min.css',
  './assets/vendor/font-awesome/fonts/fontawesome-webfont.woff2',
  './assets/vendor/prismjs/prism.min.js',
  './assets/vendor/prismjs/themes/prism-tomorrow.min.css',
  './assets/vendor/prismjs/plugins/autoloader/prism-autoloader.min.js',
  './assets/vendor/marked/marked.min.js',
  './assets/vendor/katex/katex.min.js',
  './assets/vendor/katex/katex.min.css',
  './assets/vendor/katex/auto-render.min.js',
  './assets/vendor/mermaid/mermaid.min.js',
  './assets/vendor/sweetalert2/sweetalert2.all.min.js',
  './assets/fonts/Vazirmatn-Regular.woff2',
  './assets/fonts/Vazirmatn-Bold.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Cache addAll error (some files may not exist yet):', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Return offline page or cached version if network fails
        return caches.match('./index.html');
      });
    })
  );
});
