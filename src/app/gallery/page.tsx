import { GallerySection } from "@/components/sections/gallery-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Gallery",
  description: pageDescriptions.gallery,
  path: "/gallery",
});

export default function GalleryPage() {
  return <GallerySection headingLevel={1} />;
}
