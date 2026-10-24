import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 py-24 sm:px-8">
      <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">404</p>
      <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
        This page is not on the site
      </h1>
      <p className="max-w-xl text-lg leading-8 text-muted">
        The address may be mistyped. Clinic information is on the home page.
      </p>
      <div>
        <ButtonLink href="/">Back to the clinic page</ButtonLink>
      </div>
    </div>
  );
}
