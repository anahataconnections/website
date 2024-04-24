/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    images: {
      remotePatterns: [
        {
            // protocol: 'http',
            // hostname: 'localhost',
            // port: '1337',
            protocol: 'https', // Use 'https' instead of 'http'
            hostname: 'anahata-cms.s3.ap-south-1.amazonaws.com',
        },        
      ],
    },
  };
export default nextConfig;
