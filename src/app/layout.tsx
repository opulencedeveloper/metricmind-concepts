import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Metricmind Concepts - Premium IT & Digital Solutions | Aba, Nigeria",
    template: "%s | Metricmind Concepts",
  },
  description: "Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, online applications, and comprehensive digital solutions for businesses and individuals. Serving Aba and Nigeria with professional IT consultancy, business registration, and digital skills training.",
  keywords: [
    "IT solutions Nigeria",
    "Computer training Aba",
    "CAC registration Aba",
    "Graphics design Aba",
    "Digital services Nigeria",
    "Business support Nigeria",
    "NYSC services Aba",
    "Web development Aba",
    "IT consultancy Aba",
    "Computer repair Aba",
    "Business registration Nigeria",
    "Tax identification number Nigeria",
    "IT training center Aba",
    "Digital skills training",
    "Professional IT services",
    "Computer maintenance Aba",
    "Networking services Aba",
    "Data recovery Aba",
    "Email setup Aba",
    "Domain registration Nigeria",
  ],
  authors: [{ name: "Metricmind Concepts", url: "https://metricmindconcepts.com" }],
  creator: "Metricmind Concepts",
  publisher: "Metricmind Concepts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metricmindconcepts.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Metricmind Concepts - Premium IT & Digital Solutions | Aba, Nigeria",
    description: "Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, online applications, and comprehensive digital solutions for businesses and individuals.",
    url: "https://metricmindconcepts.com",
    siteName: "Metricmind Concepts",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://metricmindconcepts.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Metricmind Concepts Logo - Premium IT & Digital Solutions in Aba, Nigeria",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metricmind Concepts - Premium IT & Digital Solutions | Aba, Nigeria",
    description: "Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, and comprehensive digital solutions.",
    images: [
      {
        url: "https://metricmindconcepts.com/logo.jpg",
        alt: "Metricmind Concepts Logo - Premium IT & Digital Solutions",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@MetricmindConcepts",
    site: "@MetricmindConcepts",
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
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "IT Services, Business Support, Education",
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "geo.region": "NG-AB",
    "geo.placename": "Aba",
    "geo.position": "5.1066;7.3667",
    "ICBM": "5.1066, 7.3667",
    "mobile-web-app-capable": "yes",
    "HandheldFriendly": "true",
    "MobileOptimized": "320",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <body
        className={`${inter.variable} font-sans antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
