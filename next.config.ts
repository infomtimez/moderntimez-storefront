import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cart/c/:path*",
        destination: "https://moderntimez-gift.myshopify.com/cart/c/:path*",
      },
      {
        source: "/checkouts/:path*",
        destination: "https://moderntimez-gift.myshopify.com/checkouts/:path*",
      },
    ];
  },
};

export default nextConfig;
