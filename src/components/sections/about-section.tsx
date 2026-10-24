import { clinic } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";

const covered = [
  {
    label: "A checkup",
    text: "What the visit is for, and why the next visit is decided after an examination.",
  },
  {
    label: "Daily care",
    text: "The brushing and cleaning habits dentists most often recommend.",
  },
  {
    label: "Your history",
    text: "Medicines, allergies, and health conditions worth mentioning before treatment.",
  },
  {
    label: "Google profile",
    text: "Where the clinic’s public listing and patient reviews are published.",
  },
] as const;

export function AboutSection() {
  const dentistName = clinic.dentist.name?.trim() || null;
  const qualifications = clinic.dentist.qualifications?.trim() || null;

  return (
    <section id="about" aria-labelledby="about-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
        {clinic.aboutImage ? (
          <div className="order-2 min-w-0 lg:sticky lg:top-28 lg:order-1 lg:col-span-5">
            <FramedPhotograph
              image={clinic.aboutImage}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 28rem, 100vw"
              caption="Photograph of a dental consultation, not this clinic."
            />
          </div>
        ) : null}
        <div className="order-1 min-w-0 lg:order-2 lg:col-span-7">
          <SectionHeading eyebrow="The practice" title="About the clinic" titleId="about-heading" />
          <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            <p>
              {clinic.description ??
                "Nand Multispeciality Dental Clinic is a dental practice. This page introduces the clinic for patients who want to read about a visit before getting in touch."}
            </p>
            <p>
              Use it to prepare. Write down what you want to ask, list your medicines, and note any
              change you have noticed. The dentist still needs to examine you. Nothing here is a
              diagnosis, a treatment plan, or a way to book.
            </p>
          </div>
          <h3 className="mt-10 font-serif text-2xl leading-tight text-ink">What you can learn</h3>
          <ul className="mt-4 max-w-xl border-t border-line">
            {covered.map((item) => (
              <li
                key={item.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6"
              >
                <p className="text-sm font-semibold text-accent">{item.label}</p>
                <p className="text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            The photographs show dental care in general. They are not this clinic’s rooms, dentist,
            staff, or patients.
          </p>
          {dentistName || qualifications ? (
            <dl className="mt-8 max-w-xl border-t border-line">
              {dentistName ? (
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8.5rem_1fr] sm:items-baseline">
                  <dt className="text-sm font-semibold text-muted">Dentist</dt>
                  <dd>{dentistName}</dd>
                </div>
              ) : null}
              {qualifications ? (
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8.5rem_1fr] sm:items-baseline">
                  <dt className="text-sm font-semibold text-muted">Qualifications</dt>
                  <dd>{qualifications}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
