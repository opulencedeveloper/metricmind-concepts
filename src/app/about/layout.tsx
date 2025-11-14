import type { Metadata } from "next";
import { generateSEOMetadata } from "../lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Metricmind Concepts",
  description: "Learn about Metricmind Concepts, a trusted IT and digital solutions company in Aba, Abia State, Nigeria. We bring technology closer to you with innovative solutions, professional expertise, and unwavering commitment to customer success. Serving Aba and Nigeria since 2019.",
  path: "/about",
  keywords: [
    "About Metricmind Concepts",
    "IT company Aba",
    "Digital solutions Nigeria",
    "Computer training center Aba",
    "CAC services Aba",
    "IT consultancy Abia State",
    "Technology company Nigeria",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

