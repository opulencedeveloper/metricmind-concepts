import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Metricmind Concepts",
  description: "Learn about Metricmind Concepts, a trusted IT and digital solutions company in Aba, Abia State, Nigeria. We bring technology closer to you with innovative solutions.",
  openGraph: {
    title: "About Us - Metricmind Concepts",
    description: "Learn about Metricmind Concepts, a trusted IT and digital solutions company in Aba, Abia State, Nigeria.",
    url: "https://metricmindconcepts.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

