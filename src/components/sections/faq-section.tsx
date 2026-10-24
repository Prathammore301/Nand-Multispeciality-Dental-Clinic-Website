import { SectionHeading } from "@/components/ui/section-heading";

const questions = [
  {
    question: "How often should I see a dentist?",
    answer:
      "There is no single interval for every person. Many people are seen once or twice a year. The dentist suggests the next visit after looking at your mouth.",
  },
  {
    question: "What should I say at the start of a visit?",
    answer:
      "Describe what you have noticed, what concerns you, and which medicines you take. Mention allergies, pregnancy, and medical conditions that could affect dental care.",
  },
  {
    question: "Can this website tell me which treatment I need?",
    answer:
      "No. It explains how dental care is usually discussed. A recommendation depends on an examination and on your dental and medical history.",
  },
  {
    question: "Does a checkup mean something is wrong?",
    answer:
      "No. A checkup is a routine look at your teeth, gums, and mouth. The dentist may find nothing that needs treatment.",
  },
  {
    question: "Where can I read this clinic’s reviews?",
    answer:
      "On the clinic’s Google profile. This page links to that profile and does not copy the reviews or display a rating.",
  },
  {
    question: "Can I book an appointment here?",
    answer:
      "No. This website does not take appointment requests or payments. Use the Google profile for the public listing, then speak with the clinic.",
  },
] as const;

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" tabIndex={-1}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="Common questions" title="Questions patients ask" titleId="faq-heading">
          Short answers to general questions. They do not replace a conversation with a dentist.
        </SectionHeading>
        <dl className="mt-10 border-t border-line">
          {questions.map((item) => (
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
