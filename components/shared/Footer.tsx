import { FOOTER_ABOUT_LINKS, FOOTER_LEGAL_LINKS, FOOTER_MAIN_LINKS } from "@/data/global";
import { cn } from "@/lib/utils";
import type { FooterColumnProps, FooterProps } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

export type { FooterLabels } from "@/types/global";

function FooterColumn({ title, links, locale, labels }: FooterColumnProps) {
  const prefix = `/${locale}`;
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map(({ key, path }) => (
          <li key={key}>
            <Link href={`${prefix}${path}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {labels[key]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale, labels }: FooterProps) {
  const prefix = `/${locale}`;
  const isRtl = locale === "ar";

  return (
    <footer
      className={cn("bg-[linear-gradient(139deg,#FAF5FF_10.51%,#EFE0FF_87.75%)] text-foreground", "dark:bg-[linear-gradient(139deg,#1a1625_10.51%,#2d2640_87.75%)]")}
      role="contentinfo"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* <div className="w-[96%] mx-auto px-0 md:px-4"> */}
      <div className="w-[96%] mx-auto px-0 md:px-4">
        <div className="px-0 sm:px-6 md:px-10 pt-16 pb-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto_auto_auto] lg:gap-8">
            {/* Brand column: logo + tagline */}
            <div className="flex max-w-sm flex-col lg:max-w-xs">
              <Link href={prefix || "/"} className="inline-flex flex-col leading-tight" aria-label="Tashafy Home">
                <Image className="h-25 w-25" loading="eager" src={locale === "ar" ? "/logo_ar.svg" : "/logo_en.svg"} alt="Tashafy" width={100} height={40} />
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">{labels.tagline}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Main links column */}
              <FooterColumn title={labels.mainTitle} links={FOOTER_MAIN_LINKS} locale={locale} labels={labels} />

              {/* About column */}
              <FooterColumn title={labels.aboutUs} links={FOOTER_ABOUT_LINKS} locale={locale} labels={labels} />

              {/* Legal column */}
              <FooterColumn title={labels.legal} links={FOOTER_LEGAL_LINKS} locale={locale} labels={labels} />

              {/* Contact: email only (social in bottom bar) */}
              <div className="flex flex-col gap-4">
                <h3 className="sr-only">{labels.contactUs}</h3>
                <a href={`mailto:${labels.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {labels.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar: copyright + social */}
          <div className="mt-12 border-t border-border/60 pt-8 dark:border-white/10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">{labels.copyright}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link href={`${prefix}/social/facebook`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {labels.facebook}
                </Link>
                <Link href={`${prefix}/social/x`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {labels.x}
                </Link>
                <Link href={`${prefix}/social/instagram`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {labels.instagram}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
