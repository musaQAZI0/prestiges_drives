/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1280, 1600, 1920],
  },
};
export default nextConfig;
