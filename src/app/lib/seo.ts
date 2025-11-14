import { Metadata } from "next";

const siteUrl = "https://metricmindconcepts.com";
const siteName = "Metricmind Concepts";
const defaultTitle = "Metricmind Concepts - Premium IT & Digital Solutions | Aba, Nigeria";
const defaultDescription = "Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, online applications, and comprehensive digital solutions for businesses and individuals.";

export function generateSEOMetadata({
  title,
  description,
  path = "",
  image = "/logo.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName,
      locale: "en_NG",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
          type: "image/jpeg",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: `${title} - ${siteName}`,
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
    other: {
      "og:image": imageUrl,
      "og:image:url": imageUrl,
      "og:image:secure_url": imageUrl,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/jpeg",
      "og:image:alt": `${title} - ${siteName}`,
      "article:author": siteName,
      "geo.region": "NG-AB",
      "geo.placename": "Aba",
      "geo.position": "5.1066;7.3667",
      "ICBM": "5.1066, 7.3667",
    },
  };
}

