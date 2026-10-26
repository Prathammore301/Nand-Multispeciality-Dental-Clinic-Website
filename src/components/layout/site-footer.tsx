import Link from "next/link";

import { clinic, homeSections, routes } from "@/config/clinic";
import { BackToTop, SectionLink } from "@/components/layout/section-link";
import { formatAddressLines, formatOpeningHours, toSafeGoogleHref, toTelHref } from "@/lib/utils";

export function SiteFooter() {
  const callHref = toTelHref(clinic.phone);
  const addressLines = formatAddressLines(clinic.address);
  const hours = formatOpeningHours(clinic.openingHours);
  const mapsHref = toSafeGoogleHref(clinic.googleMapsUrl);
  const reviewsHref = toSafeGoogleHref(clinic.googleReviewsUrl);
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: routes.home, label: "Home" },
    { href: routes.about, label: "About" },
    { href: routes.doctors, label: "Dentist" },
    { href: routes.services, label: "Services" },
    { href: routes.home, label: "Guide", sectionId: homeSections.guide },
    { href: routes.home, label: "Questions", sectionId: homeSections.questions },
    { href: routes.gallery, label: "Gallery" },
    { href: routes.home, label: "Reviews", sectionId: homeSections.reviews },
    { href: routes.contact, label: "Contact" },
  ];
  const footerLinkClass =
    "text-sm text-muted underline-offset-4 transition-colors duration-150 hover:text-accent hover:underline";

  return (
    <footer className="border-t border-line bg-surface text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-12 lg:py-16">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl leading-tight">{clinic.listedName}</p>
          <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Dental clinic
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            Listed in New Sama, Vadodara. This website does not take appointments or payments.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Pages</p>
          <ul className="mt-5 space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.label}>
                {item.sectionId ? (
                  <SectionLink sectionId={item.sectionId} className={footerLinkClass}>
                    {item.label}
                  </SectionLink>
                ) : (
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Visit</p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-muted">
            {callHref && clinic.phone ? (
              <a href={callHref} className="underline decoration-line underline-offset-4">
                {clinic.phone}
              </a>
            ) : null}
            {addressLines.length > 0 ? (
              <p>
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
            {hours ? <p>{hours}</p> : null}
            {mapsHref ? (
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-accent"
              >
                Get Directions
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {reviewsHref ? (
              <a
                href={reviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-accent"
              >
                Google reviews
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {clinic.name}
          </p>
          <BackToTop className="text-left underline-offset-4 hover:text-accent hover:underline" />
        </div>
      </div>
    </footer>
  );
}
