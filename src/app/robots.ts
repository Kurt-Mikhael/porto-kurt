import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/foto-porto.webp", "/og-image.png", "/favicon.ico"],
      },
    ],
    sitemap: "https://info-kurt.vercel.app/sitemap.xml",
    host: "https://info-kurt.vercel.app",
  };
}
