import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYSC Services - Metricmind Concepts",
  description: "Reliable NYSC registration, biometric capturing, document verification, and clearance assistance services in Aba, Nigeria.",
  openGraph: {
    title: "NYSC Services - Metricmind Concepts",
    description: "Reliable NYSC registration, biometric capturing, document verification, and clearance assistance services.",
    url: "https://metricmindconcepts.com/nysc",
  },
};

export default function NYSCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

