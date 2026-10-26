import type { Metadata } from "next";

import { ServicesSection } from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ServicesSection headingLevel={1} />;
}
