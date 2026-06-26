import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; img-src 'self' data: https://cdn.worldvectorlogo.com https://raw.githubusercontent.com https://vitejs.dev https://www.postgresql.org https://fastapi.tiangolo.com https://huggingface.co; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""};`,
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "vitejs.dev" },
      { protocol: "https", hostname: "www.postgresql.org" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "fastapi.tiangolo.com" },
      { protocol: "https", hostname: "huggingface.co" },
    ],
  },

  // Compression & performance
  compress: true,
  poweredByHeader: false,

  // Production optimizations
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-navigation-menu",
      "lucide-react",
    ],
  },

  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
