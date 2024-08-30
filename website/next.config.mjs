// next.config.js

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anahata-cms.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'cms.anahataaconnections.com',
      // },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
