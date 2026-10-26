import { clinic, routes } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { ButtonLink } from "@/components/ui/button-link";
import { homeCopy } from "@/content/site-copy";
import { stockPhotographNotice } from "@/content/image-sources";
import { cx, formatLocality, formatOpeningHours, toSafeGoogleHref, toTelHref } from "@/lib/utils";

export function HeroSection() {
  const callHref = toTelHref(clinic.phone);
  const directionsHref = toSafeGoogleHref(clinic.googleMapsUrl);
  const locality = formatLocality(clinic.address);
  const hours = formatOpeningHours(clinic.openingHours);
  const showPhone = Boolean(callHref && clinic.phone);
  const showHours = Boolean(hours);
  const showAddress = Boolean(locality);
  const factCount = Number(showPhone) + Number(showHours) + Number(showAddress);

  return (
    <section id="top" aria-labelledby="home-heading" tabIndex={-1}>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            {clinic.tagline ?? "Dental clinic"}
          </p>
          <h1 id="home-heading" className="mt-4 max-w-xl text-ink">
            <span className="block text-balance font-serif text-[1.85rem] leading-[1.15] min-[380px]:text-[2.15rem] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {homeCopy.headline}
            </span>
            <span className="mt-4 block max-w-lg text-base font-semibold leading-7 text-accent sm:text-lg">
              {clinic.listedName}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{homeCopy.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={callHref ?? routes.contact} className="w-full sm:w-auto">
              Call the Clinic
            </ButtonLink>
            {directionsHref ? (
              <ButtonLink
                href={directionsHref}
                external
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Get Directions
              </ButtonLink>
            ) : null}
          </div>
        </div>
        {clinic.heroImage ? (
          <FramedPhotograph
            image={clinic.heroImage}
            priority
            ratio="aspect-[4/5]"
            sizes="(min-width: 1024px) 32rem, 100vw"
            caption={stockPhotographNotice}
          />
        ) : null}
      </div>
      <div className="border-y border-line bg-surface">
        <ul className="mx-auto grid w-full max-w-6xl sm:grid-cols-3">
          {homeCopy.visitNotes.map((note, index) => (
            <li
              key={note.title}
              className={cx(
                "px-5 py-6 sm:px-8",
                index > 0 && "border-t border-line sm:border-t-0 sm:border-l",
              )}
            >
              <p className="font-serif text-xl leading-tight text-ink">{note.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{note.body}</p>
            </li>
          ))}
        </ul>
      </div>
      {factCount > 0 ? (
        <div className="border-b border-line">
          <dl
            className={cx(
              "mx-auto grid w-full max-w-6xl divide-y divide-line",
              factCount === 2 && "sm:grid-cols-2 sm:divide-x sm:divide-y-0",
              factCount >= 3 && "sm:grid-cols-3 sm:divide-x sm:divide-y-0",
            )}
          >
            {showPhone && clinic.phone && callHref ? (
              <div className="px-5 py-5 sm:px-8">
                <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  Phone
                </dt>
                <dd className="mt-2 text-lg">
                  <a href={callHref} className="underline decoration-line underline-offset-4">
                    {clinic.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            {showHours ? (
              <div className="px-5 py-5 sm:px-8">
                <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  Opening hours
                </dt>
                <dd className="mt-2 text-lg">{hours}</dd>
              </div>
            ) : null}
            {showAddress && locality ? (
              <div className="px-5 py-5 sm:px-8">
                <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-lg">{locality}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
