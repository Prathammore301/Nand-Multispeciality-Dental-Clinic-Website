import type { Metadata } from "next";

import { clinic, siteDescription } from "@/config/clinic";
import { isReadyForIndexing, toSiteOrigin } from "@/lib/utils";

const origin = toSiteOrigin(clinic.siteUrl);

export const siteMetadata: Metadata = {
  title: {
    default: clinic.name,
    template: `%s | ${clinic.name}`,
  },
  description: siteDescription,
  applicationName: clinic.name,
  publisher: clinic.name,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: isReadyForIndexing()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  openGraph: {
    title: clinic.name,
    description: siteDescription,
    type: "website",
    siteName: clinic.name,
    locale: "en",
    ...(origin ? { url: origin } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: clinic.name,
    description: siteDescription,
  },
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const pageOrigin = toSiteOrigin(clinic.siteUrl);
  const socialTitle = title ? `${title} | ${clinic.name}` : clinic.name;

  return {
    ...(title ? { title } : {}),
    description,
    openGraph: {
      title: socialTitle,
      description,
      ...(pageOrigin ? { url: new URL(path, pageOrigin).toString() } : {}),
    },
    twitter: {
      title: socialTitle,
      description,
    },
    ...(pageOrigin ? { alternates: { canonical: path } } : {}),
  };
}
