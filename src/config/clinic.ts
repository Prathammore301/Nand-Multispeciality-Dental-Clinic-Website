import type { ClinicConfig, NavItem } from "@/types/clinic";

/**
 * Single source for public clinic facts.
 *
 * Leave unknown fields null or empty. Do not add sample phone numbers,
 * addresses, hours, credentials, testimonials, ratings, or treatments.
 *
 * The share link below was supplied as a Google Business Profile reference.
 * A plain request did not resolve it to a Maps place, so it is not used as
 * the directions link and it is not treated as a verified rating source.
 *
 * A third-party page describes a Vadodara clinic with a similar name. That
 * page was not confirmed as this project’s Google profile, so its address,
 * hours, rating, dentist name, and treatment wording are not published here.
 *
 * Indexing stays off for previews. For the real production domain, set
 * `siteUrl` to the https origin and set `indexing.enabled` to true. Until
 * both are set, robots.txt disallows crawling and pages send noindex.
 */
export const clinic: ClinicConfig = {
  name: "Nand Multispeciality Dental Clinic",
  tagline: "Dental care",
  description:
    "Nand Multispeciality Dental Clinic is a dental practice. This website explains how a dental visit is usually discussed, so you can arrive with clearer questions. It also links to the clinic’s public Google profile.",
  phone: null,
  dentist: {
    name: null,
    qualifications: null,
  },
  address: {
    line1: null,
    line2: null,
    city: null,
    region: null,
    postalCode: null,
    country: null,
  },
  openingHours: [],
  googleMapsUrl: null,
  googleReviewsUrl: "https://share.google/ALv6DJhtud0ik8I9A",
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
      caption: "A treatment room during care",
      width: 1800,
      height: 1200,
    },
    {
      src: "/images/gallery/clinicians-reviewing-dental-xray.webp",
      alt: "Two clinicians looking at a dental X-ray with a patient seated in a dental chair.",
      caption: "Clinicians reviewing an X-ray",
      width: 1800,
      height: 1200,
    },
    {
      src: "/images/gallery/dentist-examining-patient.webp",
      alt: "A dentist in a face shield examining a patient.",
      caption: "An examination in progress",
      width: 1800,
      height: 1200,
    },
    {
      src: "/images/gallery/dental-instruments-on-tray.webp",
      alt: "Dental instruments arranged on a tray in front of a patient.",
      caption: "Instruments laid out on a tray",
      width: 1800,
      height: 1200,
    },
  ],
  siteUrl: null,
  indexing: {
    enabled: false,
  },
  contentRevisedOn: "2026-10-25",
};

export const headerNavigation = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#guide", label: "Guide" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
] as const satisfies readonly NavItem[];

export const footerNavigation = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#guide", label: "Guide" },
  { href: "/#faq", label: "Questions" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
] as const satisfies readonly NavItem[];

export const siteDescription =
  "A patient guide to Nand Multispeciality Dental Clinic. Read about checkups, questions to ask, and the clinic’s Google profile.";
