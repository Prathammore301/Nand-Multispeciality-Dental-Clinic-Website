import type { ReactNode } from "react";

import { cx } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleId: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cx(
          "font-serif text-3xl leading-tight text-ink sm:text-4xl",
          eyebrow ? "mt-3" : undefined,
        )}
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{children}</p>
      ) : null}
    </div>
  );
}
