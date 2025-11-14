import type { Metadata } from "next";
import { generateSEOMetadata } from "../lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Services - Metricmind Concepts",
  description: "Comprehensive IT and digital solutions including computer training, CAC business registration, graphics design, online applications, NYSC services, IT consultancy, and more. Professional services in Aba, Abia State, Nigeria.",
  path: "/services",
  keywords: [
    "IT services Aba",
    "Computer training Aba",
    "CAC registration services",
    "Graphics design Nigeria",
    "Online application services",
    "NYSC services Aba",
    "IT consultancy Abia",
    "Business registration Nigeria",
    "Digital solutions Aba",
    "Web development Aba",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

