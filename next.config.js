const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fooda.nyc3.digitaloceanspaces.com',
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
