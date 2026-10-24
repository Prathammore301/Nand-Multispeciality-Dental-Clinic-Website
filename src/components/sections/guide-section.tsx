import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Before you leave home",
    body: "Write the reason for the visit in one or two sentences. List the medicines and supplements you take, including ones bought without a prescription. If another clinic gave you recent dental images and you were asked to share them, bring those too.",
  },
  {
    number: "02",
    title: "Questions worth asking",
    body: "Ask what the dentist saw, what a suggested treatment is meant to do, what the other choices are, and how long to allow. If the situation is not urgent, you can ask for time to decide.",
  },
  {
    number: "03",
    title: "What to say about your health",
    body: "Mention allergies, pregnancy, conditions that affect bleeding or the heart, diabetes, and any change in your health. Also mention medicines that affect bleeding or bone. This is information for the dentist. It is not a checklist that decides your care.",
  },
  {
    number: "04",
    title: "How to read a recommendation",
    body: "A recommendation is advice given after an examination. Ask for the reason in plain language, and ask what happens if you wait. This website cannot tell you which option is suitable, and it cannot promise a result.",
  },
] as const;

export function GuideSection() {
  return (
    <section id="guide" aria-labelledby="guide-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Before a visit"
            title="Prepare for a consultation"
            titleId="guide-heading"
          >
            A short list is more useful than trying to remember everything in the chair.
          </SectionHeading>
        </div>
        <ol className="lg:col-span-8">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-line py-6 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6"
            >
              <p className="font-serif text-2xl text-accent">{step.number}</p>
              <div>
                <h3 className="font-serif text-2xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
