import type { NextConfig } from "next";

// App Router: locale config lives in lib/i18n-config.ts (middleware + [locale] use it).
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
