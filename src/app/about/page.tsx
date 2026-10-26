import { AboutSection } from "@/components/sections/about-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: pageDescriptions.about,
  path: "/about",
});

export default function AboutPage() {
  return <AboutSection headingLevel={1} />;
}
