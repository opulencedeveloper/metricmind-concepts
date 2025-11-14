import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    "Metricmind Concepts",
    "Aba IT services",
    "Abia State digital solutions",
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
    languages: {
      "en-NG": "https://metricmindconcepts.com",
      "en": "https://metricmindconcepts.com",
    },
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
    "og:image": "https://metricmindconcepts.com/logo.jpg",
    "og:image:url": "https://metricmindconcepts.com/logo.jpg",
    "og:image:secure_url": "https://metricmindconcepts.com/logo.jpg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:alt": "Metricmind Concepts Logo - Premium IT & Digital Solutions in Aba, Nigeria",
    "theme-color": "#1e40af",
    "color-scheme": "light",
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
      { url: "/logo.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: [
      { url: "/logo.jpg", type: "image/jpeg", sizes: "180x180" },
    ],
    shortcut: [{ url: "/logo.jpg", type: "image/jpeg" }],
  },
  manifest: "/manifest.json",
  applicationName: "Metricmind Concepts",
  referrer: "origin-when-cross-origin",
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
        
        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6917334bda5e9a195875485d/1ja1a0o8u';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
