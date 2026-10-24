import Link from "next/link";
import type { ReactNode } from "react";

import { cx } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong",
  secondary: "border border-accent bg-transparent text-accent hover:bg-accent-soft",
  inverse: "bg-on-accent text-accent-strong hover:bg-white",
} as const;

export function buttonClassName(
  variant: keyof typeof variants = "primary",
  className?: string,
): string {
  return cx(
    "inline-flex min-h-12 items-center justify-center px-5 py-3 text-center text-sm font-semibold transition-colors duration-150",
    variants[variant],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
}) {
  const classNameValue = buttonClassName(variant, className);

  if (!external && href.startsWith("/")) {
    return (
      <Link href={href} className={classNameValue}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classNameValue}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
