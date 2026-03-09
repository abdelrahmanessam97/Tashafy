"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { NavbarProps } from "@/types/global";
import { NAV_ITEMS } from "@/data/global";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function Navbar({ locale, labels, searchPlaceholder, loadingLabel }: NavbarProps) {
  const pathname = usePathname();
  const localePrefix = `/${locale}`;
  const isRtl = locale === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    const fullPath = path ? `${localePrefix}${path}` : localePrefix;
    if (path === "") return pathname === localePrefix || pathname === `${localePrefix}/`;
    return pathname.startsWith(fullPath);
  };

  const ctaButton = (
    <Button asChild className="bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/50 shrink-0">
      <Link href={`${localePrefix}/contact`} className="inline-flex items-center gap-2">
        {labels.freeConsultation}
        {isRtl ? <ChevronLeft className="size-4" aria-hidden /> : <ChevronRight className="size-4" aria-hidden />}
      </Link>
    </Button>
  );

  return (
    <>
      <header className="w-full navbar mx-auto" dir={isRtl ? "rtl" : "ltr"}>
        <div className="flex h-14 items-center justify-between gap-4 px-0 sm:px-6 md:px-10 min-w-0">
          <div className="flex flex-1 items-center justify-between gap-4 min-w-0 md:justify-start md:gap-8">
            <Link href={localePrefix || "/"} className={cn("flex shrink-0 flex-col gap-0 leading-tight", isRtl ? "items-end" : "items-start")} aria-label="Tashafy Home">
              <Image src={locale === "ar" ? "/logo_ar.svg" : "/logo_en.svg"} className="w-25 h-25" alt="Tashafy Logo" width={100} height={100} loading="eager" />
            </Link>
            <div className="flex items-center gap-2 ms-auto xl:hidden">
              <span className="flex shrink-0">{ctaButton}</span>
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="size-6" />
              </button>
            </div>

            <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map(({ key, path }) => {
                const href = path ? `${localePrefix}${path}` : localePrefix;
                const active = isActive(path);
                return (
                  <Link
                    key={key}
                    href={href}
                    className={cn("relative px-3 py-2 text-sm font-medium text-white transition-colors hover:text-white/90", active && "text-white")}
                  >
                    {labels[key]}
                    {active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" aria-hidden />}
                  </Link>
                );
              })}

              <button
                type="button"
                className="ml-auto hidden xl:flex size-9 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Search"
              >
                <Search className="size-5" />
              </button>
            </nav>
          </div>

          <div className="hidden xl:flex shrink-0 items-center gap-2 sm:gap-3">
            <LocaleSwitcher locale={locale} loadingLabel={loadingLabel} />
            {ctaButton}
          </div>
        </div>
      </header>

      <MobileMenuDrawer
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        locale={locale}
        labels={labels}
        searchPlaceholder={searchPlaceholder}
        closeLabel={isRtl ? "اغلاق" : "Close"}
      />
    </>
  );
}
