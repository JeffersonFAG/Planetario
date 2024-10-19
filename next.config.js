/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/planets',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
