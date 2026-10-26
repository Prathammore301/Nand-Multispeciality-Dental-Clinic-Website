import type { ReactNode } from "react";

import { cx } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  level = 2,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleId: string;
  level?: 1 | 2;
  children?: ReactNode;
}) {
  const Title = level === 1 ? "h1" : "h2";

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Title
        id={titleId}
        className={cx(
          "font-serif text-3xl leading-tight text-ink sm:text-4xl",
          eyebrow ? "mt-3" : undefined,
        )}
      >
        {title}
      </Title>
      {children ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{children}</p>
      ) : null}
    </div>
  );
}
