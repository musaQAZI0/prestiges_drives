# Image performance

Pages serve WebP assets from public/assets/optimized with responsive Next.js sizing and image caching. Original assets remain available for editing.

After changing originals, run `node optimize-images.mjs`, then `npm run build`. Rename published replacement images to invalidate long-lived optimizer caches.

The first hero image is prioritized. Other slideshow images start loading after 2.5 seconds. Below-the-fold images use Next.js lazy loading.

Serve the production build using `npm start` or a Next.js-compatible host. Development mode is not representative of page speed.
