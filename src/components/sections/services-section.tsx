import { clinic } from "@/config/clinic";
import { ClinicImage } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getConfirmedServices } from "@/lib/utils";

const guidance = [
  {
    title: "Why checkups matter",
    body: "A checkup gives a dentist time to look at your teeth and gums and to explain what they see. Many problems are easier to talk about when they are noticed early. A checkup does not promise a particular result. It is a chance to understand your mouth and to ask questions.",
  },
  {
    title: "Ask what the visit involves",
    body: "Before treatment starts, ask what will happen, how long to allow, and what choices you have. The reason for a suggested treatment should be explained in plain language.",
  },
  {
    title: "What to tell the dentist",
    body: "Mention pain, swelling, a loose tooth, or any change you have noticed. Bring a list of medicines you take, and say if you are pregnant or have a medical condition the dentist should know about.",
  },
  {
    title: "How treatment is chosen",
    body: "The suitable option depends on an examination and on your dental and medical history. Two people with similar symptoms may not need the same care. A website cannot tell you which treatment you need.",
  },
] as const;

export function ServicesSection() {
  const services = getConfirmedServices(clinic.services);
  const [feature, ...supporting] = guidance;

  return (
    <section id="services" aria-labelledby="services-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Care" title="Dental services" titleId="services-heading">
            {services.length > 0
              ? "These are the treatments the clinic has described. A dentist still needs to examine you before recommending care."
              : "The notes below are general information about checkups and the questions worth asking. They are not a diagnosis, and they are not a list of treatments offered by this clinic."}
          </SectionHeading>
        </div>
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
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="min-w-0 border border-line bg-surface lg:col-span-2">
            {clinic.servicesImage ? (
              <div>
                <div className="relative aspect-[2/1] bg-accent-soft">
                  <ClinicImage
                    image={clinic.servicesImage}
                    fill
                    sizes="(min-width: 1024px) 72rem, 100vw"
                  />
                </div>
                <p className="px-6 pt-3 text-xs leading-5 tracking-wide text-muted sm:px-8">
                  Photograph of dental care, not this clinic.
                </p>
              </div>
            ) : null}
            <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:p-10">
              <h3 className="font-serif text-3xl leading-tight text-ink">{feature.title}</h3>
              <p className="text-base leading-7 text-muted">{feature.body}</p>
            </div>
          </article>
          {supporting.slice(0, 2).map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? "min-w-0 border border-line bg-accent-soft p-6 sm:p-8"
                  : "min-w-0 border border-line bg-surface p-6 sm:p-8"
              }
            >
              <h3 className="font-serif text-2xl leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
            </article>
          ))}
          <article className="min-w-0 border border-line bg-surface p-6 sm:p-8 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-12 lg:p-10">
            <h3 className="font-serif text-3xl leading-tight text-ink">{supporting[2].title}</h3>
            <p className="mt-3 text-base leading-7 text-muted lg:mt-0">{supporting[2].body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
