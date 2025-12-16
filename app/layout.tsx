import type { Metadata, Viewport } from "next"; // Import Viewport
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ToggleTheme/ToggleTheme";
import DesktopSidebar from "./components/DesktopSidebar/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// 1. Separate Viewport export (Next.js 14+ standard)
export const viewport: Viewport = {
  themeColor: "#171717", // Matches bg-neutral-900
  width: "device-width",
  initialScale: 1,
};

// 2. The Comprehensive Metadata Object
export const metadata: Metadata = {
  // This fixes absolute URL issues for OG images.
  metadataBase: new URL("https://kaloulis.dev"),

  title: {
    default: "Stefanos Kaloulis | Full Stack Web Developer",
    template: "%s | Stefanos Kaloulis",
  },
  description:
    "Stefanos Kaloulis is a Web Developer based in Patras, Greece, specializing in Next.js, React, TypeScript, and high-performance web applications.",

  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Full Stack",
    "Patras",
    "Greece",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Stefanos Kaloulis",
  ],

  authors: [{ name: "Stefanos Kaloulis", url: "https://kaloulis.dev" }],
  creator: "Stefanos Kaloulis",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaloulis.dev",
    title: "Stefanos Kaloulis | Web Developer Portfolio",
    description:
      "Building fast, accessible, and modern web experiences with Next.js & Tailwind.",
    siteName: "Kaloulis.dev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stefanos Kaloulis - Web Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stefanos Kaloulis | Web Developer",
    description: "Building fast, accessible, and modern web experiences.",
    images: ["/images/og-image.jpg"],
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

  // Canonical URL prevents duplicate content issues
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/favicon.ico", // Browser tab
    shortcut: "/images/android-chrome-192x192.png", // Android/Modern browsers
    apple: "/images/apple-touch-icon.png", // iPhone Home Screen
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stefanos Kaloulis",
  url: "https://kaloulis.dev",
  jobTitle: "Full Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montSerrat.variable} antialiased flex relative flex-row w-full min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DesktopSidebar />
        <MobileSidebar />
        <div className="flex-1 ml-0 xl:ml-70">
          <ThemeToggle />
          <div className="bg-neutral-900 light:bg-stone-200">{children}</div>
        </div>
      </body>
    </html>
  );
}
