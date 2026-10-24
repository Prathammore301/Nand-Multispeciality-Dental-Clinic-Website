import { clinic } from "@/config/clinic";
import { ClinicImage } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { cx, getConfirmedServices } from "@/lib/utils";

const topics = [
  {
    number: "01",
    title: "Preventive checkups",
    body: "A checkup gives a dentist time to look at your teeth and gums and explain what they see. Mention pain, sensitivity, or any change you have noticed. How soon to return is decided with you. It is not the same interval for every person, and a checkup does not promise a particular result.",
  },
  {
    number: "02",
    title: "Oral hygiene",
    body: "Brushing twice a day with a fluoride toothpaste, for about two minutes, and cleaning between the teeth once a day are the habits dentists most often recommend. A soft brush is the usual suggestion, and a worn brush should be replaced. The dentist can show a method that fits your mouth. This page cannot see your teeth, so it cannot say that your routine is enough.",
  },
  {
    number: "03",
    title: "A dental consultation",
    body: "A consultation is a conversation about a concern, or about a treatment you have heard about. Bring the questions you want answered. The dentist needs to examine you before suggesting care. Reading this page is not a consultation, and it is not an offer of a particular treatment.",
  },
  {
    number: "04",
    title: "Understanding treatment options",
    body: "If care is suggested, ask what it is for, what will happen, what else could be done, and what happens if you wait. Two people with a similar problem may not be offered the same care. The suitable choice depends on the examination and on your dental and medical history.",
  },
] as const;

export function ServicesSection() {
  const services = getConfirmedServices(clinic.services);
  const [checkups, hygiene, consultation, options] = topics;

  return (
    <section id="services" aria-labelledby="services-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Educational topics"
          title="Dental care, explained"
          titleId="services-heading"
        >
          These notes describe common parts of dental care. They are not a diagnosis, and they are
          not a list of treatments offered by this clinic.
        </SectionHeading>
        {services.length > 0 ? (
          <div className="mt-12">
            <h3 className="font-serif text-2xl text-ink">Described by the clinic</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              These are treatments the clinic has confirmed. A dentist still needs to examine you
              before recommending care.
            </p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <li key={service.id} className="min-w-0 rounded-panel border border-line bg-surface p-6 sm:p-8">
                  <p className="font-serif text-2xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 font-serif text-2xl leading-tight text-ink">{service.name}</h4>
                  <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        <article className="mt-12 overflow-hidden rounded-panel border border-line bg-surface lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {clinic.servicesImage ? (
            <div className="min-w-0">
              <div className="relative aspect-[3/2] bg-accent-soft">
                <ClinicImage
                  image={clinic.servicesImage}
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                />
              </div>
              <p className="px-6 pt-3 text-xs leading-5 tracking-wide text-muted sm:px-8">
                Photograph of dental care, not this clinic.
              </p>
            </div>
          ) : null}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Prevention
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
              Start with what you can prepare
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">
              Daily care and a checkup are the parts of a dental visit you can think about before
              anyone discusses treatment. The topics below are there to help you form questions. The
              dentist confirms what applies to you.
            </p>
          </div>
        </article>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {[checkups, hygiene].map((topic) => (
            <article key={topic.number} className="rounded-panel border border-line bg-surface p-6 sm:p-8">
              <p className="font-serif text-2xl text-accent">{topic.number}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">{topic.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{topic.body}</p>
            </article>
          ))}
          <article className="rounded-panel border border-line bg-accent-soft p-6 sm:p-8 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12 lg:p-10">
            <div>
              <p className="font-serif text-2xl text-accent">{consultation.number}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{consultation.title}</h3>
            </div>
            <p className="mt-4 text-base leading-7 text-muted lg:mt-2">{consultation.body}</p>
          </article>
          <article
            className={cx(
              "rounded-panel border border-line bg-surface p-6 sm:p-8 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12 lg:p-10",
            )}
          >
            <div>
              <p className="font-serif text-2xl text-accent">{options.number}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{options.title}</h3>
            </div>
            <p className="mt-4 text-base leading-7 text-muted lg:mt-2">{options.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
