import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/programs/business',
        destination: '/programs/computer-information-systems',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
