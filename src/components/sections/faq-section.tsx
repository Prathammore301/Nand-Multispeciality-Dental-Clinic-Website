import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/content/site-copy";

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="Common questions" title="Questions patients ask" titleId="faq-heading">
          General answers for patients. They are not a diagnosis, and they do not replace a dentist’s assessment.
        </SectionHeading>
        <dl className="mt-10 border-t border-line">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="grid min-w-0 gap-2 border-b border-line py-5 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:py-6"
            >
              <dt className="font-serif text-xl leading-snug text-ink">{item.question}</dt>
              <dd className="text-base leading-7 text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
