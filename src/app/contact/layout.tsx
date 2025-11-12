import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Metricmind Concepts",
  description: "Get in touch with Metricmind Concepts in Aba, Abia State, Nigeria. Contact us for IT solutions, computer training, CAC services, and digital solutions.",
  openGraph: {
    title: "Contact Us - Metricmind Concepts",
    description: "Get in touch with Metricmind Concepts in Aba, Abia State, Nigeria for IT solutions and digital services.",
    url: "https://metricmindconcepts.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

