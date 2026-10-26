import { clinic } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";

const practiceNotes = [
  {
    label: "This page",
    text: "It gathers the clinic’s introduction, photographs of dental care, and the link to the public Google profile.",
  },
  {
    label: "A visit",
    text: "Tell the dentist what you have noticed and what you want to understand. The explanation should match your examination.",
  },
  {
    label: "Photographs",
    text: "The pictures show dental care in general. They are not this clinic’s rooms, dentist, staff, or patients.",
  },
] as const;

export function AboutSection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const dentistName = clinic.dentist.name?.trim() || null;
  const qualifications = clinic.dentist.qualifications?.trim() || null;

  return (
    <section id="about" aria-labelledby="about-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
        {clinic.aboutImage ? (
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-5">
            <FramedPhotograph
              image={clinic.aboutImage}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
        ) : null}
        <div className="order-1 min-w-0 lg:order-2 lg:col-span-7">
          <SectionHeading
            eyebrow="The practice"
            title="About the clinic"
            titleId="about-heading"
            level={headingLevel}
          />
          <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            <p>
              {clinic.description ??
                "Nand Multispeciality Dental Clinic is a dental practice. This page introduces the clinic for patients who want to read about it before getting in touch."}
            </p>
            <p>
              A useful visit starts with a clear conversation. This page can help you prepare for
              that conversation. It does not replace an examination, and it does not take
              appointments or payments.
            </p>
          </div>
          <ul className="mt-8 max-w-xl border-t border-line">
            {practiceNotes.map((note) => (
              <li
                key={note.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-6"
              >
                <p className="text-sm font-semibold text-accent">{note.label}</p>
                <p className="text-sm leading-6 text-muted">{note.text}</p>
              </li>
            ))}
          </ul>
          {dentistName || qualifications ? (
            <dl className="mt-8 max-w-xl border-t border-line">
              {dentistName ? (
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[7.5rem_1fr] sm:items-baseline">
                  <dt className="text-sm font-semibold text-muted">Dentist</dt>
                  <dd>{dentistName}</dd>
                </div>
              ) : null}
              {qualifications ? (
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[7.5rem_1fr] sm:items-baseline">
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
