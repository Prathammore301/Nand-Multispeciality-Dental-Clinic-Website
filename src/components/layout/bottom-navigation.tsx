"use client";

import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

const tabs = [
  { id: "top", href: "/#top", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "services", href: "/#services", label: "Services" },
  { id: "gallery", href: "/#gallery", label: "Gallery" },
  { id: "contact", href: "/#contact", label: "Contact" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function readActiveSection() {
  const line = 140;
  let current: TabId = "top";

  for (const tab of tabs) {
    const section = document.getElementById(tab.id);
    if (section && section.getBoundingClientRect().top <= line) {
      current = tab.id;
    }
  }

  return current;
}

function TabIcon({ id }: { id: TabId }) {
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

  const paths: Record<TabId, ReactNode> = {
    top: <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />,
    about: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),
    services: (
      <path d="M8 7.2C8.5 5.2 10 4 12 4s3.5 1.2 4 3.2c.4 1.8-.1 3.4-.8 4.8-.4.8-.3 1.7.1 2.7.4 1-.1 2.3-1.2 2.3-.8 0-1.1-.7-1.4-1.6-.3-.7-.5-.8-.9-.8s-.6.1-.9.8c-.3.9-.6 1.6-1.4 1.6-1.1 0-1.6-1.3-1.2-2.3.4-1 .5-1.9.1-2.7C8.1 10.6 7.6 9 8 7.2z" />
    ),
    gallery: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" />
        <path d="m4 16 4.2-3.2 3 2.3L14 13l6 3" />
      </>
    ),
    contact: (
      <>
        <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z" />
        <circle cx="12" cy="11" r="1.6" />
      </>
    ),
  };

  return <svg {...common}>{paths[id]}</svg>;
}

export function BottomNavigation() {
  const [active, setActive] = useState<TabId>("top");

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((section): section is HTMLElement => section !== null);

    const sync = () => {
      setActive(readActiveSection());
    };
    const observer = new IntersectionObserver(sync, {
      threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
    });

    for (const section of sections) {
      observer.observe(section);
    }
    document.addEventListener("scrollend", sync);

    return () => {
      observer.disconnect();
      document.removeEventListener("scrollend", sync);
    };
  }, []);

  function onNavigate(event: MouseEvent<HTMLAnchorElement>, id: TabId) {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    setActive(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
  }

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface shadow-[0_-8px_24px_rgba(28,36,33,0.06)] xl:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1.5 pt-1 pb-[max(0.35rem,env(safe-area-inset-bottom))]">
        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <li key={tab.id}>
              <a
                href={tab.href}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  onNavigate(event, tab.id);
                }}
                className="flex min-h-14 w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span
                  className={
                    isActive
                      ? "flex flex-col items-center gap-1 rounded-2xl bg-accent-soft px-2 py-1.5 text-[0.68rem] leading-none font-semibold text-accent"
                      : "flex flex-col items-center gap-1 px-2 py-1.5 text-[0.68rem] leading-none font-semibold text-muted"
                  }
                >
                  <TabIcon id={tab.id} />
                  {tab.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
