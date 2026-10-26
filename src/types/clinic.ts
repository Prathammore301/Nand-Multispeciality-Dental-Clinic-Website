export type NavItem = {
  href: string;
  label: string;
};

export type DentistProfile = {
  name: string | null;
  qualifications: string | null;
};

export type ClinicAddress = {
  line1: string | null;
  line2: string | null;
  area: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
};

export type OpeningHours = {
  days: string;
  hours: string;
};

export type DentalService = {
  id: string;
  name: string;
  description: string;
};

export type ClinicImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /**
   * True only for unfinished stand-in art. Published photographs leave this
   * unset, including licensed stock that is not a picture of this clinic.
   */
  placeholder?: boolean;
};

/**
 * Rating numbers may be published only after they are copied from a source
 * the clinic has confirmed. This site does not calculate or estimate them.
 */
export type VerifiedRating = {
  value: number;
  reviewCount: number;
  source: string;
};

export type ClinicConfig = {
  name: string;
  /** Public practice name used in body copy. The header keeps `name`. */
  listedName: string;
  tagline: string | null;
  description: string | null;
  phone: string | null;
  dentist: DentistProfile;
  address: ClinicAddress;
  openingHours: readonly OpeningHours[];
  googleMapsUrl: string | null;
  /** Embed URL for the resolved Maps pin. Short links are not embeddable. */
  googleMapsEmbedUrl: string | null;
  googleReviewsUrl: string | null;
  rating: VerifiedRating | null;
  services: readonly DentalService[];
  heroImage: ClinicImage | null;
  aboutImage: ClinicImage | null;
  servicesImage: ClinicImage | null;
  gallery: readonly ClinicImage[];
  /** Production origin, with https and no path. Canonical URLs stay off until this is set. */
  siteUrl: string | null;
  /** Leave disabled until confirmed content and the production domain are ready. */
  indexing: {
    enabled: boolean;
  };
  /** Update when published clinic content changes. Used as the sitemap lastmod date. */
  contentRevisedOn: string;
};
