/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // говорим Next.js что код лежит в src/
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
