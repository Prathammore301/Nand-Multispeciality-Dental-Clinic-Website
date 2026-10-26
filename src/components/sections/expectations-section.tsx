import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy } from "@/content/site-copy";

export function ExpectationsSection() {
  return (
    <section aria-labelledby="expectations-heading" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading title={homeCopy.expectationsTitle} titleId="expectations-heading">
          {homeCopy.expectationsIntro}
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {homeCopy.expectations.map((item) => (
            <li key={item.title} className="min-w-0 border border-line bg-background p-6 sm:p-8">
              <h3 className="font-serif text-2xl leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
