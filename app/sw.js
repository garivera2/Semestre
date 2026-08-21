// Service worker mínimo: cachea la app para que funcione sin internet.
const CACHE = 'semestre-v25';
const FILES = ['./', './index.html', './manifest.json', './icon.svg',
  './guias/mn.js', './guias/bd.js', './guias/me.js', './guias/mi.js', './guias/pm.js',
  './repasos/mn.js', './repasos/bd.js', './repasos/me.js', './repasos/mi.js', './repasos/pm.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Nunca cachear las llamadas de sincronización
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
