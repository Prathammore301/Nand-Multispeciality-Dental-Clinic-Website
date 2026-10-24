import { clinic } from "@/config/clinic";
import {
  formatAddress,
  getVerifiedRating,
  toSiteOrigin,
  toTelHref,
} from "@/lib/utils";

/**
 * DentalClinic structured data is emitted only when the name, phone, and
 * street address shown on the page are all present. Ratings are included
 * only through the same verified-rating check used by the reviews section.
 * Opening hours stay in visible text until they are supplied in a form that
 * can be mapped without guessing day and time values.
 */
export function getDentalClinicJsonLd(): Record<string, unknown> | null {
  const telephone = toTelHref(clinic.phone);
  const street = clinic.address.line1?.trim();
  const city = clinic.address.city?.trim();

  if (!telephone || !street || !city) {
    return null;
  }

  const displayedAddress = formatAddress(clinic.address);
  if (!displayedAddress) {
    return null;
  }

  const address: Record<string, string> = {
    "@type": "PostalAddress",
    streetAddress: [street, clinic.address.line2?.trim()].filter(Boolean).join(", "),
    addressLocality: city,
  };

  const region = clinic.address.region?.trim();
  const postalCode = clinic.address.postalCode?.trim();
  const country = clinic.address.country?.trim();

  if (region) {
    address.addressRegion = region;
  }
  if (postalCode) {
    address.postalCode = postalCode;
  }
  if (country) {
    address.addressCountry = country;
  }

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    name: clinic.name,
    telephone,
    address,
  };

  const origin = toSiteOrigin(clinic.siteUrl);
  if (origin) {
    data.url = origin;
  }

  const description = clinic.description?.trim();
  if (description) {
    data.description = description;
  }

  const rating = getVerifiedRating(clinic.rating);
  if (rating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return data;
}
