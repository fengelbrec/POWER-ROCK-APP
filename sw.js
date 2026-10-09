// Power Rock service worker — ONLY handles "Share to Power Rock" from Android.
// It caches nothing and passes every other request straight to the network,
// so normal loading and GitHub Pages updates are unaffected.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });

function idbOpen(){
  return new Promise(function(res, rej){
    var r = indexedDB.open('pr_share', 1);
    r.onupgradeneeded = function(){ try{ r.result.createObjectStore('files'); }catch(e){} };
    r.onsuccess = function(){ res(r.result); };
    r.onerror = function(){ rej(r.error); };
  });
}
async function saveShared(files){
  var db = await idbOpen();
  return new Promise(function(res){
    try{
      var tx = db.transaction('files', 'readwrite');
      tx.objectStore('files').put(files, 'pending');
      tx.oncomplete = function(){ res(true); };
      tx.onerror = function(){ res(false); };
    }catch(e){ res(false); }
  });
}

self.addEventListener('fetch', function(event){
  var url = new URL(event.request.url);
  if(event.request.method === 'POST' && url.pathname.indexOf('/share-target') !== -1){
    event.respondWith((async function(){
      try{
        var form = await event.request.formData();
        var files = form.getAll('photos').filter(function(f){ return f && f.size; });
        if(files.length) await saveShared(files);
      }catch(e){}
      var base = url.pathname.replace(/share-target\/?$/, '');
      return Response.redirect(base + '?shared=1', 303);
    })());
    return;
  }
  // everything else: do not intercept — straight to network.
});
