import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Metricmind Concepts",
  description: "Comprehensive IT and digital solutions including computer training, CAC services, graphics design, online applications, and more. Serving Aba, Nigeria.",
  openGraph: {
    title: "Our Services - Metricmind Concepts",
    description: "Comprehensive IT and digital solutions including computer training, CAC services, graphics design, and more.",
    url: "https://metricmindconcepts.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

