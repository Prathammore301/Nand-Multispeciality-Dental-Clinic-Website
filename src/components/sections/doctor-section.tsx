import { clinic, routes } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { doctorCopy } from "@/content/site-copy";
import { toTelHref } from "@/lib/utils";

export function DoctorSection({ headingLevel = 1 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const contactHref = toTelHref(clinic.phone) ?? routes.contact;

  return (
    <section id="doctors" aria-labelledby="doctor-heading">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="min-w-0 lg:col-span-7">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">The dentist</p>
          <Heading
            id="doctor-heading"
            className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl"
          >
            {clinic.dentist.name ? doctorCopy.title : "Meet the dentist"}
          </Heading>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {doctorCopy.intro}
          </p>
          <div className="mt-8">
            <ButtonLink href={contactHref}>Contact the Clinic</ButtonLink>
          </div>
        </div>
        <div className="min-w-0 border border-line bg-accent-strong p-8 text-on-accent lg:col-span-5">
          <p className="font-serif text-3xl leading-tight">{clinic.listedName}</p>
          <p className="mt-4 text-base leading-7 text-on-accent-muted">
            New Sama, Vadodara. Ask the clinic which dentist is available and which concerns the
            practice can assess.
          </p>
        </div>
      </div>
    </section>
  );
}
