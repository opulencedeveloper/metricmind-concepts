import type { Metadata } from "next";
import { generateSEOMetadata } from "../lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Metricmind Academy - Learn Tech Skills in Aba",
  description:
    "Metricmind Academy: learn, build, innovate. Gain in-demand digital skills in computer basics, web development, graphics design, UI/UX, digital marketing, data analytics, cyber security, AI automation, AI video creation and ArchiCAD/Artlantis. Hands-on learning, certificate of completion and career mentorship.",
  path: "/academy",
  keywords: [
    "Metricmind Academy",
    "tech training Aba",
    "e-learning Nigeria",
    "web development course Aba",
    "graphics design course Aba",
    "UI/UX course Nigeria",
    "data analytics course Nigeria",
    "cyber security course Nigeria",
    "AI automation course",
    "ArchiCAD training Aba",
  ],
});

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
