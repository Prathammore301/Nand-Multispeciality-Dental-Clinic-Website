"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { MouseEvent, ReactNode } from "react";

const SCROLL_TARGET_KEY = "nand-scroll-target";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToSection(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
    return;
  }

  if (id === "main") {
    document.getElementById("main")?.focus();
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  target.focus({ preventScroll: true });
}

function clearHash() {
  if (!window.location.hash) {
    return;
  }

  window.history.replaceState(null, "", window.location.pathname);
}

export function SectionLink({
  sectionId,
  className,
  children,
}: {
  sectionId: string;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (pathname === "/") {
      scrollToSection(sectionId);
      clearHash();
      return;
    }

    try {
      sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId);
    } catch {
      // Navigation still opens the home page when storage is unavailable.
    }

    router.push("/");
  }

  return (
    <Link href="/" className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function HomeSectionScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let stored: string | null = null;

    if (pathname === "/") {
      try {
        stored = sessionStorage.getItem(SCROLL_TARGET_KEY);
        if (stored) {
          sessionStorage.removeItem(SCROLL_TARGET_KEY);
        }
      } catch {
        stored = null;
      }
    }

    const hash = window.location.hash.replace(/^#/, "");
    const id = stored || hash;

    if (id) {
      scrollToSection(id);
    }

    clearHash();
  }, [pathname]);

  return null;
}

export function SkipLink() {
  return (
    <button
      type="button"
      className="skip-link"
      onClick={() => {
        document.getElementById("main")?.focus();
      }}
    >
      Skip to content
    </button>
  );
}

export function BackToTop({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      }}
    >
      Back to top
    </button>
  );
}
