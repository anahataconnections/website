/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
        },        
      ],
    },
  };
export default nextConfig;
