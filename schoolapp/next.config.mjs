/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false ,
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',
            pathname: '/products/**',
          },
        ],
      },
};

export default nextConfig;

 