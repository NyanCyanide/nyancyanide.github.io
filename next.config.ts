/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // enables static export
  images: { unoptimized: true },  // disable next/image optimization
  basePath: '',                   // root deployment
  assetPrefix: '',                // no prefix
};

export default nextConfig;
