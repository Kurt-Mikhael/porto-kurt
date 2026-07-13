import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/app/components/navbar-wrapper";
import { jsonLdBlocks, siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const { url: SITE_URL, name: SITE_NAME, handle: SITE_HANDLE, photo: SITE_PHOTO } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Portfolio of Kurt Mikhael Purba, an Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML. Explore featured projects, research, and achievements.",
  keywords: [
    "Kurt Mikhael Purba",
    "kurt portfolio",
    "ITB informatics",
    "Software engineer Indonesia",
    "data science student",
    "AI ML portfolio",
    "frontend developer",
    "React Next.js portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} — Software Engineer & Data Science Portfolio`,
    description:
      "Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML.",
    siteName: `${SITE_NAME} Portfolio`,
    firstName: "Kurt",
    lastName: "Mikhael Purba",
    username: "kurt-mikhael",
    images: [
      {
        url: SITE_PHOTO,
        width: 320,
        height: 320,
        alt: `${SITE_NAME} — Informatics Engineering Student at ITB`,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Software Engineer & Data Science Portfolio`,
    description:
      "Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML.",
    creator: `@${SITE_HANDLE}`,
    images: {
      url: SITE_PHOTO,
      alt: `${SITE_NAME} — Informatics Engineering Student at ITB`,
    },
  },
  verification: {
    google: "FXK6ilchSm9-2_2rhX2AG66Y06SZ0uBbF9xibF0ZqJ4",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full scroll-smooth">
      <body
        style={{
          backgroundColor: "#07080a",
          fontFeatureSettings: '"calt", "kern", "liga", "ss03"',
        }}
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <NavbarWrapper />
        <div className="flex-1">{children}</div>
        {jsonLdBlocks.map((data, i) => (
          <Script
            key={i}
            id={`jsonld-${i}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </body>
    </html>
  );
}
