import { clinic } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { contactSteps } from "@/content/site-copy";
import { formatAddressLines, toSafeGoogleHref, toTelHref } from "@/lib/utils";

function mapEmbedSrc(url: string | null): string | null {
  if (!url) {
    return null;
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  const embeddable =
    parsed.protocol === "https:" &&
    (host === "google.com" || host === "maps.google.com") &&
    (parsed.pathname.startsWith("/maps/embed") || parsed.searchParams.get("output") === "embed");

  return embeddable ? parsed.toString() : null;
}

export function ContactSection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const callHref = toTelHref(clinic.phone);
  const addressLines = formatAddressLines(clinic.address);
  const mapsHref = toSafeGoogleHref(clinic.googleMapsUrl);
  const embedSrc = mapEmbedSrc(clinic.googleMapsEmbedUrl);
  const profileHref = toSafeGoogleHref(clinic.googleReviewsUrl);
  const hours = clinic.openingHours.filter(
    (entry) => entry.days.trim().length > 0 && entry.hours.trim().length > 0,
  );
  const hasDetails = Boolean((callHref && clinic.phone) || addressLines.length > 0 || hours.length > 0);
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid overflow-hidden border border-line lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="bg-accent-strong px-6 py-10 text-on-accent sm:px-10 sm:py-14">
            <p className="text-sm font-semibold tracking-[0.16em] text-on-accent-muted uppercase">
              {callHref ? "Visit or call" : addressLines.length > 0 ? "Visit" : "Get in touch"}
            </p>
            <Heading id="contact-heading" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Contact the clinic
            </Heading>
            <p className="mt-5 max-w-sm text-base leading-7 text-on-accent-muted">
              Use the address and Google Maps listing to find the clinic. This website does not
              take appointment requests or payments.
            </p>
          </div>
          <div className="bg-surface px-6 py-10 sm:px-10 sm:py-14">
            {hasDetails ? (
              <dl className="mb-8 border-t border-line">
                {callHref && clinic.phone ? (
                  <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                    <dt className="text-sm font-semibold text-muted">Phone</dt>
                    <dd>
                      <a
                        href={callHref}
                        className="text-lg underline decoration-line underline-offset-4"
                      >
                        {clinic.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                {addressLines.length > 0 ? (
                  <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                    <dt className="text-sm font-semibold text-muted">Address</dt>
                    <dd className="text-lg leading-7">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}
                {hours.length > 0 ? (
                  <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                    <dt className="text-sm font-semibold text-muted">Opening hours</dt>
                    <dd>
                      <ul className="space-y-1">
                        {hours.map((entry) => (
                          <li key={`${entry.days}-${entry.hours}`}>
                            <span className="font-semibold">{entry.days}</span>
                            <span className="text-muted"> · {entry.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            <ol className="space-y-6">
              {contactSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                  <span className="font-serif text-xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-tight text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3">
              {callHref ? (
                <ButtonLink href={callHref} className="w-full sm:w-auto">
                  Call the clinic
                </ButtonLink>
              ) : null}
              {mapsHref ? (
                <ButtonLink
                  href={mapsHref}
                  external
                  variant={callHref ? "secondary" : "primary"}
                  className="w-full sm:w-auto"
                >
                  Get Directions
                </ButtonLink>
              ) : null}
              {profileHref ? (
                <ButtonLink href={profileHref} external variant="secondary" className="w-full sm:w-auto">
                  View Google Profile
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
        {embedSrc ? (
          <div className="mt-6 border border-line">
            <iframe
              title="Map of Nand Multispeciality Dental Clinic in New Sama, Vadodara"
              src={embedSrc}
              className="aspect-[4/3] w-full sm:aspect-video sm:max-h-96"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
