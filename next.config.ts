import type { NextConfig } from "next";
/** @type {import('next-i18next').UserConfig} */

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  images: {
      // domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

export default nextConfig;
