import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/app/components/navbar-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://porto-kurt.vercel.app"),
  title: {
    default: "Kurt Mikhael Purba — Software Engineer & Data Science Portfolio",
    template: "%s | Kurt Mikhael Purba",
  },
  description: "Portfolio of Kurt Mikhael Purba, an Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML. Explore featured projects, research, and achievements.",
  keywords: ["Kurt Mikhael Purba", "kurt portfolio", "ITB informatics", "software engineer Indonesia", "data science student", "AI ML portfolio", "frontend developer", "React Next.js portfolio"],
  authors: [{ name: "Kurt Mikhael Purba", url: "https://porto-kurt.vercel.app" }],
  creator: "Kurt Mikhael Purba",
  publisher: "Kurt Mikhael Purba",
  alternates: {
    canonical: "/",
  },
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
    url: "https://porto-kurt.vercel.app",
    title: "Kurt Mikhael Purba — Software Engineer & Data Science Portfolio",
    description: "Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML.",
    siteName: "Kurt Mikhael Purba Portfolio",
    firstName: "Kurt",
    lastName: "Mikhael Purba",
    username: "kurt-mikhael",
    images: [
      {
        url: "/foto-porto.webp",
        width: 320,
        height: 320,
        alt: "Kurt Mikhael Purba — Informatics Engineering Student at ITB",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Mikhael Purba — Software Engineer & Data Science Portfolio",
    description: "Informatics Engineering student at ITB specializing in Software Engineering, Data Science, and AI/ML.",
    creator: "@kurt_mikhael",
    images: {
      url: "/foto-porto.webp",
      alt: "Kurt Mikhael Purba — Informatics Engineering Student at ITB",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07080a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://porto-kurt.vercel.app/#person",
  name: "Kurt Mikhael Purba",
  givenName: "Kurt Mikhael",
  familyName: "Purba",
  alternateName: "Kurt",
  url: "https://porto-kurt.vercel.app",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://porto-kurt.vercel.app",
  },
  image: {
    "@type": "ImageObject",
    url: "https://porto-kurt.vercel.app/foto-porto.webp",
    width: 320,
    height: 320,
    caption: "Kurt Mikhael Purba",
  },
  jobTitle: "Software Engineer & Data Science Enthusiast",
  description: "Informatics Engineering student at Institut Teknologi Bandung specializing in Software Engineering, Data Science, and AI/ML.",
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
  homeLocation: {
    "@type": "Place",
    name: "Bandung, Indonesia",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institut Teknologi Bandung",
    sameAs: "https://www.itb.ac.id",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
  },
  knowsAbout: [
    "Software Engineering",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Indonesia",
    },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Machine Learning",
      "Data Science",
    ],
  },
  sameAs: [
    "https://github.com/kurt-mikhael",
    "https://linkedin.com/in/kurt-mikhael-purba",
    "https://instagram.com/kurt_mikhael",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://porto-kurt.vercel.app/#website",
  url: "https://porto-kurt.vercel.app",
  name: "Kurt Mikhael Purba Portfolio",
  description: "Official portfolio website of Kurt Mikhael Purba, Informatics Engineering student at ITB.",
  inLanguage: "en-US",
  publisher: { "@id": "https://porto-kurt.vercel.app/#person" },
  author: { "@id": "https://porto-kurt.vercel.app/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.google.com/search?q=site:porto-kurt.vercel.app+{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://porto-kurt.vercel.app/#profilepage",
  url: "https://porto-kurt.vercel.app",
  name: "Kurt Mikhael Purba - Software Engineer Portfolio",
  isPartOf: { "@id": "https://porto-kurt.vercel.app/#website" },
  about: { "@id": "https://porto-kurt.vercel.app/#person" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://porto-kurt.vercel.app/foto-porto.webp",
    width: 320,
    height: 320,
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full scroll-smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: blob: https://cdn.worldvectorlogo.com https://raw.githubusercontent.com https://vitejs.dev https://www.postgresql.org https://fastapi.tiangolo.com https://huggingface.co; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body
        style={{ backgroundColor: '#07080a', fontFeatureSettings: '"calt", "kern", "liga", "ss03"' }}
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      > 
        <NavbarWrapper />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
