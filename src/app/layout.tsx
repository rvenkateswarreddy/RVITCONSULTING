import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  defaultDescription,
  siteName,
  siteUrl,
  socialImage,
} from "./seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | RV IT Consulting",
    default: "RV IT Consulting | Technology built for business",
  },
  description: defaultDescription,
  applicationName: siteName,
  category: "technology consulting",
  keywords: [
    "IT consulting",
    "technology consulting",
    "cloud modernization",
    "software development",
    "data analytics",
    "cybersecurity",
    "IT recruitment",
    "corporate technology training",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/brand/rvit-mark.svg",
    apple: "/assets/brand/rvit-mark.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "RV IT Consulting | Technology built for business",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1748,
        height: 899,
        alt: "RV IT Consulting technology consultants collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV IT Consulting | Technology built for business",
    description: defaultDescription,
    images: [socialImage],
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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/assets/brand/rvit-logo.svg`,
  image: `${siteUrl}${socialImage}`,
  email: "contact@rvit.co.in",
  description: defaultDescription,
  areaServed: ["United States", "Canada", "Luxembourg", "India"],
  knowsAbout: [
    "IT consulting",
    "Cloud modernization",
    "Software engineering",
    "Data analytics",
    "Cybersecurity",
    "Technology recruitment",
    "Corporate training",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded bg-white px-4 py-2 font-semibold text-[#081B33] shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
