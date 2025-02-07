import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/auth_app',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
