/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/src/planets',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
