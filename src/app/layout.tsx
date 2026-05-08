import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kurt - Portfolio",
  description: "Hi, I'm Kurt! An Informatics Engineering student at ITB passionate about Software Engineering and Data Science.",
  keywords: ["portfolio", "kurt", "software engineer", "data science", "ITB"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body
        style={{ backgroundColor: '#07080a', fontFeatureSettings: '"calt", "kern", "liga", "ss03"' }}
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      > 
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
