"use client";

import { ButtonLink, buttonClassName } from "@/components/ui/button-link";

export default function SiteError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 py-24 sm:px-8">
      <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
        This page could not be loaded
      </h1>
      <p className="text-lg leading-8 text-muted">Please try again in a moment.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" className={buttonClassName()} onClick={() => retry()}>
          Try again
        </button>
        <ButtonLink href="/" variant="secondary">
          Back to the clinic page
        </ButtonLink>
      </div>
    </div>
  );
}
