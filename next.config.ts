import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/auth-app',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
