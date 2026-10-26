import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <AboutSection headingLevel={1} />;
}
