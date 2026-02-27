import type { NextConfig } from "next";

// App Router: locale config lives in lib/i18n-config.ts (middleware + [locale] use it).
const nextConfig: NextConfig = {
  images: {
    // domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

export default nextConfig;
