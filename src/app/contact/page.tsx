import { ContactSection } from "@/components/sections/contact-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: pageDescriptions.contact,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection headingLevel={1} />;
}
