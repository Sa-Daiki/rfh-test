/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: [],
  },

  reactStrictMode: true,
  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return {
      beforeFiles: [
        {
          destination: "/form",
          source: "/",
        },
      ],
    };
  },
};

export default nextConfig;
