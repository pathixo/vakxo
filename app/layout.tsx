import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vakxo.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#101210" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vakxo — Voice-Native Developer Agent by Pathixo",
    template: "%s | Vakxo",
  },
  description:
    "Describe what you want out loud. Vakxo writes multi-file code, runs your terminal, operates across your desktop and browser, verifies tests, and opens the pull request.",
  applicationName: "Vakxo",
  keywords: [
    "Vakxo",
    "voice-native developer agent",
    "voice coding",
    "autonomous coding agent",
    "AI software engineer",
    "terminal automation",
    "desktop developer agent",
    "Pathixo",
  ],
  authors: [{ name: "Pathixo Inc.", url: "https://pathixo.com" }],
  creator: "Pathixo Inc.",
  publisher: "Pathixo Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vakxo",
    title: "Vakxo — Voice-Native Developer Agent",
    description:
      "Speak in plain English. Vakxo writes the code, runs your terminal, works across your desktop, and ships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakxo — Voice-Native Developer Agent",
    description:
      "Speak in plain English. Vakxo writes the code, runs your terminal, works across your desktop, and ships.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
