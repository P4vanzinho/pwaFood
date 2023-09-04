const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fooda.nyc3.digitaloceanspaces.com',
      },
    ],
  },
};

module.exports = nextConfig;
