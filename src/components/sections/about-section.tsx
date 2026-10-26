import Link from "next/link";

import { clinic, routes } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCopy } from "@/content/site-copy";
import { stockPhotographNotice } from "@/content/image-sources";

export function AboutSection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  return (
    <section id="about" aria-labelledby="about-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {clinic.aboutImage ? (
            <div className="order-2 min-w-0 lg:order-1 lg:col-span-5">
              <FramedPhotograph
                image={clinic.aboutImage}
                ratio="aspect-[4/3]"
                sizes="(min-width: 1024px) 28rem, 100vw"
                caption={stockPhotographNotice}
              />
            </div>
          ) : null}
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-7">
            <SectionHeading
              eyebrow="The practice"
              title={aboutCopy.title}
              titleId="about-heading"
              level={headingLevel}
            />
            <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {aboutCopy.opening.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href={routes.doctors}
                className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4"
              >
                Meet the Dentist
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-14 max-w-3xl border-t border-line pt-10">
          <h2 className="font-serif text-3xl leading-tight text-ink">{aboutCopy.visitTitle}</h2>
          <ul className="mt-6 space-y-4">
            {aboutCopy.visitItems.map((item) => (
              <li key={item} className="border-b border-line pb-4 text-base leading-7 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
