const CACHE_NAME = 'readlens-v13';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './readlens-logo.png',
  './logo.png',
  './xlsx.full.min.js',
  './reading-drill.css',
  './reading-drill.js',
  './jszip.min.js',
  './pdf.min.js',
  './pdf.worker.min.js',
  './tesseract.min.js',
  './audio/phonics/manifest.json',
  // Consonants MP3 (Brainy Phonics Authentic Phonemes)
  './audio/phonics/consonants/b.mp3',
  './audio/phonics/consonants/c.mp3',
  './audio/phonics/consonants/d.mp3',
  './audio/phonics/consonants/f.mp3',
  './audio/phonics/consonants/g.mp3',
  './audio/phonics/consonants/h.mp3',
  './audio/phonics/consonants/j.mp3',
  './audio/phonics/consonants/k.mp3',
  './audio/phonics/consonants/l.mp3',
  './audio/phonics/consonants/m.mp3',
  './audio/phonics/consonants/n.mp3',
  './audio/phonics/consonants/p.mp3',
  './audio/phonics/consonants/q.mp3',
  './audio/phonics/consonants/r.mp3',
  './audio/phonics/consonants/s.mp3',
  './audio/phonics/consonants/t.mp3',
  './audio/phonics/consonants/v.mp3',
  './audio/phonics/consonants/w.mp3',
  './audio/phonics/consonants/x.mp3',
  './audio/phonics/consonants/y.mp3',
  './audio/phonics/consonants/z.mp3',
  // Short Vowels MP3
  './audio/phonics/short-vowels/a.mp3',
  './audio/phonics/short-vowels/e.mp3',
  './audio/phonics/short-vowels/i.mp3',
  './audio/phonics/short-vowels/o.mp3',
  './audio/phonics/short-vowels/u.mp3',
  // Long Vowels MP3
  './audio/phonics/long-vowels/a.mp3',
  './audio/phonics/long-vowels/e.mp3',
  './audio/phonics/long-vowels/i.mp3',
  './audio/phonics/long-vowels/o.mp3',
  './audio/phonics/long-vowels/u.mp3',
  // Blends & Digraphs MP3
  './audio/phonics/blending/ch.mp3',
  './audio/phonics/blending/sh.mp3',
  './audio/phonics/blending/th.mp3',
  './audio/phonics/blending/bl.mp3',
  './audio/phonics/blending/br.mp3',
  './audio/phonics/blending/cl.mp3',
  './audio/phonics/blending/cr.mp3',
  './audio/phonics/blending/dr.mp3',
  './audio/phonics/blending/fl.mp3',
  './audio/phonics/blending/fr.mp3',
  './audio/phonics/blending/gl.mp3',
  './audio/phonics/blending/gr.mp3',
  './audio/phonics/blending/pl.mp3',
  './audio/phonics/blending/pr.mp3',
  './audio/phonics/blending/st.mp3',
  // Letter Names (Wikimedia Commons / Alphabet with Sounds)
  './audio/phonics/letter-names/a.ogg',
  './audio/phonics/letter-names/b.ogg',
  './audio/phonics/letter-names/c.ogg',
  './audio/phonics/letter-names/d.ogg',
  './audio/phonics/letter-names/e.ogg',
  './audio/phonics/letter-names/f.ogg',
  './audio/phonics/letter-names/g.ogg',
  './audio/phonics/letter-names/h.ogg',
  './audio/phonics/letter-names/i.ogg',
  './audio/phonics/letter-names/j.ogg',
  './audio/phonics/letter-names/k.ogg',
  './audio/phonics/letter-names/l.ogg',
  './audio/phonics/letter-names/m.ogg',
  './audio/phonics/letter-names/n.m4a',
  './audio/phonics/letter-names/o.ogg',
  './audio/phonics/letter-names/p.ogg',
  './audio/phonics/letter-names/q.ogg',
  './audio/phonics/letter-names/r.ogg',
  './audio/phonics/letter-names/s.m4a',
  './audio/phonics/letter-names/t.m4a',
  './audio/phonics/letter-names/u.ogg',
  './audio/phonics/letter-names/v.ogg',
  './audio/phonics/letter-names/w.ogg',
  './audio/phonics/letter-names/x.ogg',
  './audio/phonics/letter-names/y.ogg',
  './audio/phonics/letter-names/z.ogg',
  // Common Syllables MP3
  './audio/phonics/syllables/at.mp3',
  './audio/phonics/syllables/an.mp3',
  './audio/phonics/syllables/et.mp3',
  './audio/phonics/syllables/it.mp3',
  './audio/phonics/syllables/ot.mp3',
  './audio/phonics/syllables/ut.mp3',
  './audio/phonics/syllables/un.mp3',
  './audio/phonics/syllables/um.mp3',
  './audio/phonics/syllables/ig.mp3',
  // Common CVC Words MP3
  './audio/phonics/words/cat.mp3',
  './audio/phonics/words/bat.mp3',
  './audio/phonics/words/hat.mp3',
  './audio/phonics/words/dog.mp3',
  './audio/phonics/words/bed.mp3',
  './audio/phonics/words/net.mp3',
  './audio/phonics/words/pig.mp3',
  './audio/phonics/words/wig.mp3',
  './audio/phonics/words/pot.mp3',
  './audio/phonics/words/hot.mp3',
  './audio/phonics/words/van.mp3',
  './audio/phonics/words/man.mp3',
  './audio/phonics/words/bug.mp3',
  './audio/phonics/words/rug.mp3',
  './audio/phonics/words/fox.mp3',
  './audio/phonics/words/ball.mp3',
  './audio/phonics/words/bell.mp3',
  './audio/phonics/words/frog.mp3',
  './audio/phonics/words/fish.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
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
  // Use Network First for all requests to ensure updates are reflected
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If the network request is successful, clone and store in cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseToCache));
        }
        return response;
      })
      .catch(() => {
        // If network fails, try the cache
        return caches.match(event.request);
      })
  );
});
