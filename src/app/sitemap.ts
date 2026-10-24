import type { MetadataRoute } from "next";

import { clinic } from "@/config/clinic";
import { toSiteOrigin } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = toSiteOrigin(clinic.siteUrl);
  if (!origin) {
    return [];
  }

  const lastModified = new Date(`${clinic.contentRevisedOn}T00:00:00.000Z`);

  return [
    {
      url: origin,
      lastModified: Number.isNaN(lastModified.valueOf()) ? undefined : lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
