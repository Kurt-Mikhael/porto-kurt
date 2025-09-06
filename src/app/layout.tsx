import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt - Portfolio",
  description: "Portfolio website of Kurt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body
        style={{ background: 'linear-gradient(182deg,rgba(9, 0, 31, 1) 0%, rgba(41, 9, 77, 1) 100%)', backgroundAttachment: 'fixed' }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      > 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
