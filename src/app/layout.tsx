import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk/wght.css";
import "@fontsource/caveat/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cornelia Pop, Brand and Content Marketer — Portfolio",
    template: "%s | Cornelia Pop, Brand and Content Marketer",
  },
  description:
    "Portfolio of Cornelia Pop, a brand and content marketer with a UX designer's eye: brand storytelling, positioning, product marketing, content and social media.",
  authors: [{ name: "Cornelia Pop" }],
  openGraph: {
    type: "website",
    siteName: "Cornelia Pop — Brand and Content Marketer",
    locale: "en",
    images: [{ url: "/images/cornelia-portrait.webp", width: 1200, height: 1421, alt: "Cornelia Pop smiling, holding a cup of coffee" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
