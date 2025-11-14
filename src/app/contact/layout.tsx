import type { Metadata } from "next";
import { generateSEOMetadata } from "../lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Metricmind Concepts",
  description: "Get in touch with Metricmind Concepts in Aba, Abia State, Nigeria. Contact us for IT solutions, computer training, CAC services, graphics design, and digital solutions. Located at No. 7 Omuma Road, By Amaogbonna, Off Osusu Road, Aba. Phone: +234 810 259 2057.",
  path: "/contact",
  keywords: [
    "Contact Metricmind Concepts",
    "IT services contact Aba",
    "Computer training contact",
    "CAC services contact",
    "Metricmind Concepts phone number",
    "Metricmind Concepts address",
    "IT company contact Aba",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

