import Link from "next/link";

import { clinic, navigation } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { toTelHref } from "@/lib/utils";

export function SiteHeader() {
  const callHref = toTelHref(clinic.phone);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 xl:gap-10 xl:py-5">
        <Link href="/" aria-label={clinic.name} className="flex min-w-0 items-center gap-3">
          {/* Decorative mark. The link name is the clinic name. This is not an official logo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/mark.svg" alt="" width={40} height={40} className="size-10 shrink-0" />
          <span className="min-w-0">
            <span className="block font-serif text-[0.92rem] leading-none tracking-tight text-ink sm:text-base xl:text-[1.2rem]">
              Nand Multispeciality
            </span>
            <span className="mt-1.5 block text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
              Dental Clinic
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {navigation.map((item) => (
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
            <div className="hidden sm:flex">
              <ButtonLink href={callHref} className="px-4">
                Call the clinic
              </ButtonLink>
            </div>
          ) : (
            <div className="hidden xl:flex">
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
