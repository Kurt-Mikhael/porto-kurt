import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: [
      "cdn.worldvectorlogo.com",
      "vitejs.dev",
      "www.postgresql.org",
      "raw.githubusercontent.com",
    ],
  },
  
  // Compression & performance
  compress: true,
  poweredByHeader: false,
  
  // Production optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@radix-ui/react-navigation-menu",
      "lucide-react",
    ],
  },
  
  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
