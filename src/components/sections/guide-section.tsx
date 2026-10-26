import { SectionHeading } from "@/components/ui/section-heading";
import { guideSteps } from "@/content/site-copy";

export function GuideSection() {
  return (
    <section id="guide" aria-labelledby="guide-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Before a visit"
          title="Prepare for a consultation"
          titleId="guide-heading"
        >
          A few notes can make a consultation easier to follow. They do not replace an examination.
        </SectionHeading>
        <ol className="mt-10 max-w-3xl border-t border-line">
          {guideSteps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-line py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
            >
              <p className="font-serif text-2xl text-accent">{step.number}</p>
              <div className="min-w-0">
                <h3 className="font-serif text-2xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
