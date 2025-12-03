import type { Metadata } from "next";
import { Urbanist, Roboto } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premier Markets | Trade Forex with Confidence",
  description:
    "Access global markets with advanced trading tools, competitive spreads, and institutional grade execution. Join 50,000+ traders who trust Premier Markets.",
  keywords: ["forex", "trading", "CFDs", "markets", "premier markets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
