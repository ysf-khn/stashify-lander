import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stashify",
  description: "Simplify Your Inventory. Grow Your Business.",
  openGraph: {
    title: "Stashify",
    description: "Simplify Your Inventory. Grow Your Business.",
    url: "https://stashify.weekendlabs.in",
    type: "website",
    images: [
      {
        url: "https://stashify.weekendlabs.in/screenshot.png",
        width: 1200,
        height: 630,
        alt: "Stashify App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stashify",
    description: "Simplify Your Inventory. Grow Your Business.",
    images: ["https://stashify.weekendlabs.in/screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
