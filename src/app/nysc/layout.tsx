import type { Metadata } from "next";
import { generateSEOMetadata } from "../lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "NYSC Services - Metricmind Concepts",
  description: "Reliable NYSC registration, biometric capturing, document verification, clearance assistance, and remobilization services in Aba, Abia State, Nigeria. Expert help with NYSC online registration, green card printing, and PPA support.",
  path: "/nysc",
  keywords: [
    "NYSC services Aba",
    "NYSC registration Aba",
    "NYSC biometric capturing",
    "NYSC clearance assistance",
    "NYSC document verification",
    "NYSC remobilization",
    "NYSC green card printing",
    "NYSC services Abia State",
  ],
});

export default function NYSCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

