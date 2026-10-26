"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

import { routes } from "@/config/clinic";
import { cx } from "@/lib/utils";

const tabs = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.services, label: "Services" },
  { href: routes.gallery, label: "Gallery" },
  { href: routes.contact, label: "Contact" },
] as const;

type TabHref = (typeof tabs)[number]["href"];

function TabIcon({ href }: { href: TabHref }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "size-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<TabHref, ReactNode> = {
    [routes.home]: <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />,
    [routes.about]: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),
    [routes.services]: (
      <path d="M8 7.2C8.5 5.2 10 4 12 4s3.5 1.2 4 3.2c.4 1.8-.1 3.4-.8 4.8-.4.8-.3 1.7.1 2.7.4 1-.1 2.3-1.2 2.3-.8 0-1.1-.7-1.4-1.6-.3-.7-.5-.8-.9-.8s-.6.1-.9.8c-.3.9-.6 1.6-1.4 1.6-1.1 0-1.6-1.3-1.2-2.3.4-1 .5-1.9.1-2.7C8.1 10.6 7.6 9 8 7.2z" />
    ),
    [routes.gallery]: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" />
        <path d="m4 16 4.2-3.2 3 2.3L14 13l6 3" />
      </>
    ),
    [routes.contact]: (
      <>
        <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z" />
        <circle cx="12" cy="11" r="1.6" />
      </>
    ),
  };

  return <svg {...common}>{paths[href]}</svg>;
}

function isCurrent(pathname: string, href: string) {
  return href === routes.home ? pathname === routes.home : pathname === href;
}

export function BottomNavigation() {
  const pathname = usePathname();

  function onHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== routes.home) {
      return;
    }

    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface shadow-[0_-8px_24px_rgba(28,36,33,0.06)] xl:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1.5 pt-1 pb-[max(0.35rem,env(safe-area-inset-bottom))]">
        {tabs.map((tab) => {
          const current = isCurrent(pathname, tab.href);

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={current ? "page" : undefined}
                onClick={tab.href === routes.home ? onHomeClick : undefined}
                className="group flex min-h-14 w-full items-center justify-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span
                  className={cx(
                    "flex flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[0.68rem] leading-none font-semibold transition-colors duration-150 motion-reduce:transition-none",
                    current
                      ? "bg-accent-soft text-accent group-active:brightness-95"
                      : "text-muted group-hover:bg-background group-hover:text-ink group-active:bg-line group-active:text-ink",
                  )}
                >
                  <TabIcon href={tab.href} />
                  {tab.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
