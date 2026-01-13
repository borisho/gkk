import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [new URL("https://gkk.sago.sk/images/**")],
  },
};

export default nextConfig;
