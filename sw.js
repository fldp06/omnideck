// Escucha cuando la App se instala
self.addEventListener('install', (e) => {
  console.log('Omnideck: Service Worker Instalado');
});

// Escucha cada vez que la App pide algo a internet (imágenes, scripts, etc.)
self.addEventListener('fetch', (e) => {
  // Aquí podrías decidir si responder con algo guardado en caché 
  // o ir a buscarlo a internet. Por ahora, solo dejamos que pase.
  e.respondWith(fetch(e.request));
});