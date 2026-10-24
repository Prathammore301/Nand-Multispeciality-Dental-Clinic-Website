import Link from "next/link";

import { clinic, headerNavigation } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { toTelHref } from "@/lib/utils";

export function SiteHeader() {
  const callHref = toTelHref(clinic.phone);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:gap-8 lg:py-4">
        <Link href="/" aria-label={clinic.name} className="flex min-w-0 items-center gap-3">
          {/* Decorative mark. The link name is the clinic name. This is not an official logo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/mark.svg" alt="" width={40} height={40} className="size-10 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-serif text-[0.95rem] leading-none tracking-tight text-ink sm:text-base lg:text-[1.15rem]">
              Nand Multispeciality
            </span>
            <span className="mt-1.5 block text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase sm:text-[0.65rem] sm:tracking-[0.18em]">
              <span className="lg:hidden">Patient information</span>
              <span className="hidden lg:inline">Dental Clinic</span>
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4 xl:gap-8">
          <nav aria-label="Primary" className="hidden items-center gap-4 lg:flex xl:gap-7">
            {headerNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {callHref ? (
            <div className="hidden lg:flex">
              <ButtonLink href={callHref} className="px-4">
                Call the clinic
              </ButtonLink>
            </div>
          ) : (
            <div className="hidden lg:flex">
              <ButtonLink href="/#contact" className="px-4">
                Contact
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
