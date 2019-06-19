importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.routing.setDefaultHandler(
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.precaching.precacheAndRoute([
    'offline.html'
]);

workbox.routing.registerRoute(
    new RegExp('.html'),
    new workbox.strategies.NetworkOnly({
        cacheName: 'htmlcache'
    })
);

workbox.routing.setCatchHandler(({ event }) => {
    switch (event.request.destination) {
        case 'document':
            return caches.match('offline.html');
            break;
        default:
            return Response.error();
    }
});




