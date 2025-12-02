/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // 👇 IMPORTANT: tell Next where the app is hosted in production
  basePath: isProd ? '/abrar-portfolio' : '',
  assetPrefix: isProd ? '/abrar-portfolio/' : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
