import { clinic } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { ButtonLink } from "@/components/ui/button-link";
import { stockPhotographNotice } from "@/content/image-sources";
import { formatAddress, formatOpeningHours, toTelHref } from "@/lib/utils";

export function HeroSection() {
  const callHref = toTelHref(clinic.phone);
  const address = formatAddress(clinic.address);
  const hours = formatOpeningHours(clinic.openingHours);
  const showTrust = Boolean(callHref && clinic.phone && address && hours);

  return (
    <section id="top" aria-labelledby="home-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(17rem,0.88fr)] lg:gap-14 xl:gap-20">
          <div className="px-5 py-8 max-lg:rounded-panel max-lg:bg-accent-soft sm:px-8 sm:py-10 lg:px-0 lg:py-0">
            <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Your dental care guide
            </p>
            <h1
              id="home-heading"
              className="mt-4 text-balance font-serif text-[1.75rem] leading-[1.15] text-ink min-[380px]:text-[2.05rem] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]"
            >
              A better{"\u2011"}informed dental visit starts here.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Read how checkups, daily care, and treatment choices are usually explained, then open
              the clinic’s Google profile. A dentist confirms what applies to you after an
              examination.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#services" className="w-full sm:w-auto">
                Explore dental care
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary" className="w-full sm:w-auto">
                Contact the clinic
              </ButtonLink>
            </div>
          </div>
          {clinic.heroImage ? (
            <div className="relative min-w-0 lg:py-6 lg:pr-3">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 hidden h-[84%] w-[78%] rounded-panel bg-accent-soft lg:block"
              />
              <div className="relative lg:-ml-2">
                <FramedPhotograph
                  image={clinic.heroImage}
                  priority
                  ratio="aspect-[5/4] lg:aspect-[4/5]"
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  caption={stockPhotographNotice}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {showTrust && clinic.phone && callHref ? (
        <div className="border-y border-line bg-surface">
          <dl className="mx-auto grid w-full max-w-6xl sm:grid-cols-3 sm:divide-x sm:divide-line">
            <div className="px-5 py-5 sm:px-8">
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Phone</dt>
              <dd className="mt-2 text-lg">
                <a href={callHref} className="underline decoration-line underline-offset-4">
                  {clinic.phone}
                </a>
              </dd>
            </div>
            <div className="border-t border-line px-5 py-5 sm:border-t-0 sm:px-8">
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Opening hours
              </dt>
              <dd className="mt-2 text-lg">{hours}</dd>
            </div>
            <div className="border-t border-line px-5 py-5 sm:border-t-0 sm:px-8">
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Location
              </dt>
              <dd className="mt-2 text-lg">{address}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </section>
  );
}
