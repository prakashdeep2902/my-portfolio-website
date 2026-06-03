import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { AssistantWidget } from "@/components/ai/assistant-widget";
import {
  getPersonStructuredData,
  getWebsiteStructuredData,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://prakashdeep.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prakash Deep Sharma | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in React, Next.js, Node.js, AI applications, automation systems, cloud architecture, and modern SaaS development.",
  keywords: [
    "Prakash Deep Sharma",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI Engineer",
    "SaaS Developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Prakash Deep Sharma | Full Stack Software Engineer",
    description: siteConfig.tagline,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Deep Sharma | Full Stack Software Engineer",
    description: siteConfig.summary,
    creator: "@prakashdeep",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personData = getPersonStructuredData();
  const websiteData = getWebsiteStructuredData();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen`}
      >
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AssistantWidget />
      </body>
    </html>
  );
}
