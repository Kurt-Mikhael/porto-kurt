import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kurt - Portfolio",
  description: "Hi, I'm Kurt! An Informatics Engineering student at ITB passionate about Software Engineering and Data Science.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
        style={{ background: 'linear-gradient(182deg,rgba(9, 0, 31, 1) 0%, rgba(41, 9, 77, 1) 100%)', backgroundAttachment: 'fixed' }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      > 
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
