import Link from "next/link";

import { clinic } from "@/config/clinic";
import { formatAddress, formatOpeningHours, toSafeGoogleHref, toTelHref } from "@/lib/utils";

export function SiteFooter() {
  const callHref = toTelHref(clinic.phone);
  const address = formatAddress(clinic.address);
  const hours = formatOpeningHours(clinic.openingHours);
  const mapsHref = toSafeGoogleHref(clinic.googleMapsUrl);
  const reviewsHref = toSafeGoogleHref(clinic.googleReviewsUrl);
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: "/#top", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#guide", label: "Guide" },
    { href: "/#faq", label: "Questions" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-accent-strong text-on-accent">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-12 lg:py-16">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl leading-tight">{clinic.name}</p>
          <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-on-accent-muted uppercase">
            Dental clinic
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-on-accent-muted">
            A patient guide to the clinic. Appointments and payments are not taken on this page.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">On this page</p>
          <ul className="mt-5 space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-on-accent-muted underline-offset-4 transition-colors duration-150 hover:text-on-accent hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">Visit</p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-on-accent-muted">
            {callHref && clinic.phone ? (
              <a href={callHref} className="underline decoration-white/40 underline-offset-4">
                {clinic.phone}
              </a>
            ) : null}
            {address ? <p>{address}</p> : null}
            {hours ? <p>{hours}</p> : null}
            {mapsHref ? (
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-on-accent"
              >
                Directions
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {reviewsHref ? (
              <a
                href={reviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-on-accent"
              >
                Google profile
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-4 text-sm text-on-accent-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {clinic.name}
          </p>
          <Link href="/#top" className="underline-offset-4 hover:text-on-accent hover:underline">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
