import { FOOTER_ABOUT_LINKS, FOOTER_LEGAL_LINKS, FOOTER_MAIN_LINKS } from "@/data/global";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { cn } from "@/lib/utils";
import type { FooterProps } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { FooterColumn } from "./FooterColumn";

export type { FooterLabels } from "@/types/global";

export function Footer({ locale, labels }: FooterProps) {
  const prefix = `/${locale}`;
  const isRtl = locale === "ar";

  return (
    <footer
      className={cn("text-foreground")}
      style={{ background: "linear-gradient(139deg, #FAF5FF 10.51%, #EFE0FF 87.75%)" }}
      role="contentinfo"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <SectionContainer>
        <div className="pt-16 pb-6">
          {/* RTL: brand is first in DOM → appears on the right; link columns follow to the left */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)] lg:gap-12 xl:gap-16">
            {/* Brand column: logo + tagline */}
            <div className="flex max-w-lg flex-col items-start gap-4 text-start lg:max-w-xs">
              <Link href={prefix || "/"} className="inline-flex flex-col items-start" aria-label="Tashafy Home">
                <Image width={100} height={100} className="h-25 w-25" loading="eager" src={locale === "ar" ? "/logo_ar.svg" : "/logo_en.svg"} alt="Tashafy" />
              </Link>
              <p className="text-base leading-relaxed text-(--color-text-secondary)">{labels.tagline}</p>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-3 md:items-start md:gap-x-10 xl:gap-x-12">
              <FooterColumn title={labels.mainTitle} links={FOOTER_MAIN_LINKS} locale={locale} labels={labels} />

              <FooterColumn title={labels.aboutUs} links={FOOTER_ABOUT_LINKS} locale={locale} labels={labels} />

              <div className="flex min-w-0 flex-col items-start gap-6 text-start">
                <FooterColumn title={labels.legal} links={FOOTER_LEGAL_LINKS} locale={locale} labels={labels} />
                <a href={`mailto:${labels.email}`} className="text-base text-(--color-text-secondary) transition-colors hover:text-(--color-text-brand)">
                  {labels.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar: RTL → copyright (start) right, social (end) left */}
          <div className="mt-12 border-t border-[#E9EBF0]">
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base text-(--color-text-secondary)">{labels.copyright}</p>
              {/* LTR: keeps social order (Instagram → X → Facebook) on the physical left in RTL layouts */}
              <div className="flex flex-wrap items-center gap-4 text-sm" dir="ltr">
                <Link href={`${prefix}/social/instagram`} className="text-base text-(--color-text-secondary) transition-colors hover:text-(--color-text-brand)">
                  {labels.instagram}
                </Link>
                <Link href={`${prefix}/social/x`} className="text-base text-(--color-text-secondary) transition-colors hover:text-(--color-text-brand)">
                  {labels.x}
                </Link>
                <Link href={`${prefix}/social/facebook`} className="text-base text-(--color-text-secondary) transition-colors hover:text-(--color-text-brand)">
                  {labels.facebook}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
