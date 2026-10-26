import type { Metadata } from "next";

import { GallerySection } from "@/components/sections/gallery-section";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return <GallerySection headingLevel={1} />;
}
