import { clinic } from "@/config/clinic";
import type {
  ClinicAddress,
  DentalService,
  OpeningHours,
  VerifiedRating,
} from "@/types/clinic";

const GOOGLE_LINK_HOSTS = new Set([
  "share.google",
  "g.page",
  "goo.gl",
  "maps.app.goo.gl",
  "google.com",
  "www.google.com",
  "maps.google.com",
]);

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function toTelHref(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const compact = value.trim();
  if (!/^\+?[0-9][0-9\s().-]{6,24}$/.test(compact)) {
    return null;
  }

  const normalized = compact.replace(/[^\d+]/g, "");
  if (normalized.includes("+") && !normalized.startsWith("+")) {
    return null;
  }

  const digits = normalized.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    return null;
  }

  return `tel:${normalized}`;
}

export function toSiteOrigin(value: string | null): string | null {
  if (!value) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") {
    return null;
  }

  if (url.username || url.password || url.search || url.hash) {
    return null;
  }

  if (url.pathname !== "/" && url.pathname !== "") {
    return null;
  }

  return url.origin;
}

export function toSafeGoogleHref(value: string | null): string | null {
  if (!value) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" || url.username || url.password) {
    return null;
  }

  if (!GOOGLE_LINK_HOSTS.has(url.hostname)) {
    return null;
  }

  return url.toString();
}

export function isLocalImagePath(src: string): boolean {
  return /^\/(?:images|icons)\/[a-z0-9/_-]+\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(
    src,
  );
}

export function formatAddress(address: ClinicAddress): string | null {
  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.region,
    address.postalCode,
    address.country,
  ]
    .map((part) => part?.trim() ?? "")
    .filter((part) => part.length > 0);

  return parts.length > 0 ? parts.join(", ") : null;
}

export function formatOpeningHours(hours: readonly OpeningHours[]): string | null {
  if (hours.length === 0) {
    return null;
  }

  return hours
    .map((entry) => `${entry.days.trim()}: ${entry.hours.trim()}`)
    .filter((entry) => !entry.startsWith(":") && !entry.endsWith(": "))
    .join("; ");
}

export function getConfirmedServices(
  services: readonly DentalService[],
): DentalService[] {
  return services.filter(
    (service) => service.name.trim().length > 0 && service.description.trim().length > 0,
  );
}

export function getVerifiedRating(rating: VerifiedRating | null): VerifiedRating | null {
  if (!rating) {
    return null;
  }

  if (!Number.isFinite(rating.value) || rating.value < 1 || rating.value > 5) {
    return null;
  }

  if (!Number.isInteger(rating.reviewCount) || rating.reviewCount < 1) {
    return null;
  }

  if (rating.source.trim().length < 3) {
    return null;
  }

  return {
    value: rating.value,
    reviewCount: rating.reviewCount,
    source: rating.source.trim(),
  };
}

export function isReadyForIndexing(): boolean {
  return clinic.indexing.enabled && toSiteOrigin(clinic.siteUrl) !== null;
}

export function clinicContentIsComplete(): boolean {
  const photographsReady =
    clinic.gallery.length > 0 && clinic.gallery.every((image) => image.placeholder !== true);

  return (
    toTelHref(clinic.phone) !== null &&
    formatAddress(clinic.address) !== null &&
    clinic.openingHours.length > 0 &&
    Boolean(clinic.dentist.name?.trim()) &&
    getConfirmedServices(clinic.services).length > 0 &&
    photographsReady &&
    toSafeGoogleHref(clinic.googleMapsUrl) !== null &&
    clinic.heroImage !== null &&
    clinic.heroImage.placeholder !== true
  );
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
