import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "image.mux.com"],
    minimumCacheTTL: 31104000, // 1 year
    formats: ["image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
