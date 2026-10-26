import { clinic, routes } from "@/config/clinic";
import { ClinicImage } from "@/components/ui/clinic-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { stockPhotographNotice } from "@/content/image-sources";
import { serviceTopics, servicesIntro } from "@/content/site-copy";
import { getConfirmedServices } from "@/lib/utils";

const iconPaths = [
  "M8 7.2C8.5 5.2 10 4 12 4s3.5 1.2 4 3.2c.4 1.8-.1 3.4-.8 4.8-.4.8-.3 1.7.1 2.7.4 1-.1 2.3-1.2 2.3-.8 0-1.1-.7-1.4-1.6-.3-.7-.5-.8-.9-.8s-.6.1-.9.8c-.3.9-.6 1.6-1.4 1.6-1.1 0-1.6-1.3-1.2-2.3.4-1 .5-1.9.1-2.7C8.1 10.6 7.6 9 8 7.2z",
  "M8 13c.8 1.4 2.2 2.2 4 2.2s3.2-.8 4-2.2M9 9.5h.01M15 9.5h.01M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
  "M12 4v16M8 8h8M9 16h6",
  "M5 15.5 8 8l4 4 4-6 3 9.5",
  "M8 16c1.2 1.4 2.5 2 4 2s2.8-.6 4-2M9 10h.01M15 10h.01M6 8.5C7 6.5 9.2 5 12 5s5 1.5 6 3.5",
] as const;

export function ServicesSection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const services = getConfirmedServices(clinic.services);

  return (
    <section id="services" aria-labelledby="services-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Care"
          title="Dental Care and Treatment Options"
          titleId="services-heading"
          level={headingLevel}
        >
          {servicesIntro}
        </SectionHeading>
        {clinic.servicesImage ? (
          <figure className="mt-10">
            <div className="relative aspect-[2/1] bg-accent-soft">
              <ClinicImage
                image={clinic.servicesImage}
                fill
                sizes="(min-width: 1024px) 72rem, 100vw"
              />
            </div>
            <figcaption className="pt-3 text-xs leading-5 tracking-wide text-muted">
              {stockPhotographNotice}
            </figcaption>
          </figure>
        ) : null}
        {services.length > 0 ? (
          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.id} className="min-w-0 border border-line bg-surface p-6 sm:p-8">
                <p className="font-serif text-2xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">{service.name}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
              </li>
            ))}
          </ol>
        ) : null}
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {serviceTopics.map((topic, index) => (
            <li key={topic.title} className="flex min-w-0 flex-col border border-line bg-surface p-6 sm:p-8">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={iconPaths[index] ?? iconPaths[0]} />
              </svg>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">{topic.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{topic.body}</p>
              <div className="mt-auto pt-5">
                <ButtonLink href={routes.contact} variant="secondary">
                  Contact the clinic
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
