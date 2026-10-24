"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { NavItem } from "@/types/clinic";

export function MobileNavigation({
  items,
  callHref,
}: {
  items: readonly NavItem[];
  callHref: string | null;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(false);
  const pendingFocusId = useRef<string | null>(null);
  const links = [{ href: "/", label: "Home" }, ...items];

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("[data-close-menu]")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const media = window.matchMedia("(min-width: 1280px)");
    function closeIfDesktop() {
      if (media.matches) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocus.current = true;
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const focusable = [...panel.querySelectorAll<HTMLElement>("a, button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", closeIfDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", closeIfDesktop);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      return;
    }

    if (restoreFocus.current) {
      buttonRef.current?.focus();
      restoreFocus.current = false;
      pendingFocusId.current = null;
      return;
    }

    const focusId = pendingFocusId.current;
    if (!focusId) {
      return;
    }

    pendingFocusId.current = null;
    const target = document.getElementById(focusId);
    if (!target) {
      return;
    }

    target.scrollIntoView({ block: "start" });
    target.focus({ preventScroll: true });
  }, [open]);

  function closeFromLink(href: string) {
    const hashIndex = href.indexOf("#");
    pendingFocusId.current = hashIndex >= 0 ? href.slice(hashIndex + 1) : "main";
    setOpen(false);
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-12 items-center justify-center border border-line bg-surface text-ink xl:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setOpen((current) => !current);
        }}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
          )}
        </svg>
      </button>
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        {...(open
          ? { role: "dialog" as const, "aria-modal": true, "aria-label": "Menu" }
          : {})}
        className={`${open ? "flex" : "hidden"} fixed inset-0 z-40 flex-col bg-surface xl:hidden`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-serif text-xl text-ink">Menu</p>
          <button
            type="button"
            data-close-menu
            className="inline-flex min-h-12 items-center px-3 text-sm font-semibold text-ink"
            onClick={() => {
              restoreFocus.current = true;
              setOpen(false);
            }}
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile" className="px-5 py-2">
          <ul>
            {links.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  className="flex min-h-14 items-center text-lg text-ink"
                  onClick={() => {
                    closeFromLink(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {callHref ? (
            <a
              href={callHref}
              className="mt-6 inline-flex min-h-12 items-center bg-accent px-5 text-sm font-semibold text-on-accent"
            >
              Call the clinic
            </a>
          ) : null}
        </nav>
      </div>
    </>
  );
}
