importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const myPlugin = {
    cacheDidUpdate: async ({request, response, event}) => {
      if ('BroadcastChannel' in self) {
        const channel = new BroadcastChannel('precache_status_channel');
        channel.postMessage('success');
      }
      return response;
    }

}

workbox.precaching.addPlugins([myPlugin]);

workbox.precaching.precacheAndRoute([
    'script.js','style.css',
    'https://images.pexels.com/photos/2524786/pexels-photo-2524786.jpeg',
    'https://images.pexels.com/photos/2499197/pexels-photo-2499197.jpeg',
    'https://images.pexels.com/photos/2473499/pexels-photo-2473499.jpeg',
    'https://images.pexels.com/photos/2123666/pexels-photo-2123666.jpeg',
    'https://images.pexels.com/photos/2123094/pexels-photo-2123094.jpeg',
    'https://images.pexels.com/photos/2085588/pexels-photo-2085588.jpeg'
]);

workbox.routing.setDefaultHandler(
    new workbox.strategies.StaleWhileRevalidate()
);


