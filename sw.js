// TODO: Placeholder for future Service Worker code

// 目前仅提供基本的Service Worker功能
self.addEventListener('install', (event) => {
  console.log('Service Worker installing');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating');
});

self.addEventListener('fetch', (event) => {
  // 可以在这里添加自定义的缓存逻辑
});