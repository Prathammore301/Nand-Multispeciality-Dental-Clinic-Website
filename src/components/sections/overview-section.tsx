import { clinic, routes } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy } from "@/content/site-copy";
import { formatAddressLines } from "@/lib/utils";

export function OverviewSection() {
  const lines = formatAddressLines(clinic.address);

  return (
    <section aria-labelledby="overview-heading">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="min-w-0 lg:col-span-7">
          <SectionHeading title="Dental Care That Starts With a Conversation" titleId="overview-heading">
            {homeCopy.overview[0]}
          </SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {homeCopy.overview[1]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={routes.doctors} className="w-full sm:w-auto">
              Meet the Dentist
            </ButtonLink>
            <ButtonLink href={routes.services} variant="secondary" className="w-full sm:w-auto">
              Explore Dental Services
            </ButtonLink>
          </div>
        </div>
        <aside className="min-w-0 border border-line bg-surface p-6 sm:p-8 lg:col-span-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">Location</p>
          <p className="mt-3 font-serif text-3xl leading-tight text-ink">{clinic.listedName}</p>
          {lines.length > 0 ? (
            <address className="mt-4 text-base leading-7 text-muted not-italic">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          ) : null}
          <div className="mt-6">
            <ButtonLink href={routes.contact} variant="secondary">
              Contact the clinic
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
