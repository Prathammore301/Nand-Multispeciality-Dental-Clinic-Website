import { clinic, routes } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { ButtonLink } from "@/components/ui/button-link";
import { stockPhotographNotice } from "@/content/image-sources";
import { cx, formatAddress, formatOpeningHours, toTelHref } from "@/lib/utils";

const visitNotes = [
  {
    title: "Before the visit",
    body: "A checkup lets a dentist look at your teeth and gums and explain what they see.",
  },
  {
    title: "Questions to ask",
    body: "Ask what the visit involves, and which options fit an examination, before treatment begins.",
  },
  {
    title: "Google profile",
    body: "Patient reviews and the public listing stay on Google. This page links to them.",
  },
] as const;

export function HeroSection() {
  const callHref = toTelHref(clinic.phone);
  const address = formatAddress(clinic.address);
  const hours = formatOpeningHours(clinic.openingHours);
  const showPhone = Boolean(callHref && clinic.phone);
  const showHours = Boolean(hours);
  const showAddress = Boolean(address);
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
              Read about your visit before you come in
            </span>
            <span className="mt-4 block max-w-lg text-base font-semibold leading-7 text-accent sm:text-lg">
              {clinic.name}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Use this page to see how a dental visit is described, then open the clinic’s Google
            profile. A dentist explains suitable options after an examination. This website does
            not book appointments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={routes.contact} className="w-full sm:w-auto">
              Contact the clinic
            </ButtonLink>
            <ButtonLink href={routes.services} variant="secondary" className="w-full sm:w-auto">
              Read about dental care
            </ButtonLink>
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
          {visitNotes.map((note, index) => (
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
            {showAddress ? (
              <div className="px-5 py-5 sm:px-8">
                <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-lg">{address}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
