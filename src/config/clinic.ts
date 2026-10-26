import type { ClinicConfig, NavItem } from "@/types/clinic";

/**
 * Single source for public clinic facts.
 *
 * Leave unknown fields null or empty. Do not add sample phone numbers,
 * addresses, hours, credentials, testimonials, ratings, or treatments.
 *
 * On 26 Oct 2026 the supplied Maps link
 * https://maps.app.goo.gl/pWD3TNHeqSPnvLoZ8 redirected to a Google place
 * titled “Nand Multispeciality” at 22.337236, 73.1918886. Directions and
 * the map use that pin. The street address below is the address supplied
 * for publication; the clinic still needs to confirm it, including the
 * postal code. No rating was read from the listing.
 *
 * https://jsdl.in/DT-59T5OIZHD9F pointed at Justdial and then returned
 * access denied, so that directory link is not published.
 *
 * Dr. Apexa Tuvar is named because a public directory lists her with this
 * clinic. Degrees, specialist titles, and experience are not published.
 *
 * Indexing stays off for previews. For the real production domain, set
 * `siteUrl` to the https origin and set `indexing.enabled` to true. Until
 * both are set, robots.txt disallows crawling, the sitemap is empty, and
 * pages send noindex. Do not invent a domain to turn indexing on.
 *
 * A map is shown only from `googleMapsEmbedUrl`. The short Maps link is
 * the directions and reviews destination, not an embed.
 *
 * Still required before launch: clinic confirmation of the street address
 * and postal code, phone, opening hours, qualifications if they should be
 * shown, a confirmed treatment list, official photographs or reuse
 * permission, and the production https domain. Tracking IDs stay empty
 * until the clinic supplies them and a privacy notice is in place.
 */
export const clinic: ClinicConfig = {
  name: "Nand Multispeciality Dental Clinic",
  listedName: "Nand Multispeciality Dental Clinic & Implant Center",
  tagline: "Dental care in New Sama, Vadodara",
  description:
    "Nand Multispeciality Dental Clinic & Implant Center is listed in New Sama, Vadodara. This website explains how a dental consultation is discussed and how to find the clinic.",
  phone: null,
  dentist: {
    name: "Dr. Apexa Tuvar",
    qualifications: null,
  },
  address: {
    line1: "103, Ansh Complex, 7 Vasant Vihar Society",
    line2: "Chanakyapuri Road, Opposite GIPCL Circle",
    area: "New Sama",
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390024",
    country: "India",
  },
  openingHours: [],
  googleMapsUrl: "https://maps.app.goo.gl/pWD3TNHeqSPnvLoZ8",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=22.337236,73.1918886&z=16&output=embed",
  googleReviewsUrl: "https://maps.app.goo.gl/pWD3TNHeqSPnvLoZ8",
  rating: null,
  services: [],
  heroImage: {
    src: "/images/dental/dental-team-treating-patient.webp",
    alt: "Two dental professionals treating a patient in a dental chair.",
    width: 1200,
    height: 1500,
  },
  aboutImage: {
    src: "/images/dental/dental-consultation.webp",
    alt: "A dentist speaking with a patient seated in a dental chair.",
    width: 1600,
    height: 1200,
  },
  servicesImage: {
    src: "/images/dental/dental-treatment-room.webp",
    alt: "A dental treatment room with a chair, overhead light, and instrument tray.",
    width: 1800,
    height: 900,
  },
  gallery: [
    {
      src: "/images/gallery/dental-team-in-treatment-room.webp",
      alt: "Two dental professionals treating a patient in a white treatment room.",
      caption: "A treatment room",
      width: 1800,
      height: 900,
    },
    {
      src: "/images/gallery/clinicians-reviewing-dental-xray.webp",
      alt: "Two clinicians looking at a dental X-ray with a patient seated in a dental chair.",
      caption: "Reviewing an X-ray",
      width: 1800,
      height: 1200,
    },
    {
      src: "/images/gallery/dentist-examining-patient.webp",
      alt: "A dentist in a face shield examining a patient.",
      caption: "An examination",
      width: 1800,
      height: 1200,
    },
    {
      src: "/images/gallery/dental-instruments-on-tray.webp",
      alt: "Dental instruments arranged on a tray in front of a patient.",
      caption: "Instruments on a tray",
      width: 1800,
      height: 1200,
    },
  ],
  siteUrl: null,
  indexing: {
    enabled: false,
  },
  contentRevisedOn: "2026-10-26",
};

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  gallery: "/gallery",
  contact: "/contact",
  doctors: "/doctors",
  guide: "/#guide",
  questions: "/#faq",
  reviews: "/#reviews",
} as const;

export const publicPaths = [
  routes.home,
  routes.about,
  routes.services,
  routes.gallery,
  routes.contact,
  routes.doctors,
] as const;

export const navigation = [
  { href: routes.about, label: "About" },
  { href: routes.services, label: "Services" },
  { href: routes.gallery, label: "Gallery" },
  { href: routes.reviews, label: "Reviews" },
  { href: routes.contact, label: "Contact" },
] as const satisfies readonly NavItem[];

export const siteDescription = clinic.description ?? clinic.name;
