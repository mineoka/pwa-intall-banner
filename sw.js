// install event
self.addEventListener('install', function(event){
  console.log('service worker : Installing Service worker ...', event);
});

// activate event
self.addEventListener('activate', function(event){
  console.log('service worker : Activating Service worker ...', event);
  return self.clients.claim();
});
