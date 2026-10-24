import type { MetadataRoute } from "next";

import { clinic } from "@/config/clinic";
import { isReadyForIndexing, toSiteOrigin } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const origin = toSiteOrigin(clinic.siteUrl);
  const indexable = isReadyForIndexing();

  return {
    rules: indexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(origin ? { sitemap: `${origin}/sitemap.xml` } : {}),
  };
}
