/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/mushroom-farming-training',
        destination: '/organic-mushroom-farming-training-india',
        permanent: true,
      },
      {
        source: '/spawn-supply',
        destination: '/services/spawn-supply',
        permanent: true,
      },
      {
        source: '/marketing-support',
        destination: '/services/marketing-support',
        permanent: true,
      },
      {
        source: '/consultancy',
        destination: '/services/consultancy',
        permanent: true,
      },
      {
        source: '/cold-chain',
        destination: '/services/cold-chain',
        permanent: true,
      },
      {
        source: '/compost-production',
        destination: '/services/compost-production',
        permanent: true,
      },
      {
        source: '/government-subsidy',
        destination: '/services/subsidy',
        permanent: true,
      },
      {
        source: '/daily-prices',
        destination: '/mushroom-price-today',
        permanent: true,
      },
      {
        source: '/franchise',
        destination: '/mushroom-franchise',
        permanent: true,
      },
      {
        source: '/farm-setup',
        destination: '/services/turnkey-setup',
        permanent: true,
      },
      {
        source: '/compost',
        destination: '/compost-unit',
        permanent: true,
      },
      {
        source: '/spawn',
        destination: '/spawn-seed',
        permanent: true,
      },
      {
        source: '/learning',
        destination: '/training',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
