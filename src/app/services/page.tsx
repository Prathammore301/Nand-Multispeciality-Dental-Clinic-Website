import { ServicesSection } from "@/components/sections/services-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: pageDescriptions.services,
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesSection headingLevel={1} />;
}
