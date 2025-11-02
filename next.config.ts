/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces `next export`
  images: {
    unoptimized: true, // required for static export
  },
  // No basePath or assetPrefix, since we are serving from root
};

export default nextConfig;
