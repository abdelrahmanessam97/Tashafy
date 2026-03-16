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
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto_auto_auto] lg:gap-8">
            {/* Brand column: logo + tagline */}
            <div className="flex max-w-sm flex-col lg:max-w-xs">
              <Link href={prefix || "/"} className="inline-flex flex-col leading-tight" aria-label="Tashafy Home">
                <Image width={100} height={100} className="h-25 w-25" loading="eager" src={locale === "ar" ? "/logo_ar.svg" : "/logo_en.svg"} alt="Tashafy" />
              </Link>
              <p className="text-base text-[#4E5663]">{labels.tagline}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Main links column */}
              <FooterColumn title={labels.mainTitle} links={FOOTER_MAIN_LINKS} locale={locale} labels={labels} />

              {/* About column */}
              <FooterColumn title={labels.aboutUs} links={FOOTER_ABOUT_LINKS} locale={locale} labels={labels} />

              {/* Legal column */}
              <div className={cn("flex flex-col justify-between")}>
                <FooterColumn title={labels.legal} links={FOOTER_LEGAL_LINKS} locale={locale} labels={labels} />

                {/* Contact: email only (social in bottom bar) */}
                <div className="flex flex-col gap-4">
                  {/* <h3 className="sr-only">{labels.contactUs}</h3> */}
                  <a href={`mailto:${labels.email}`} className="text-base text-[#4E5663] transition-colors hover:text-[#363085]">
                    {labels.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar: copyright + social */}
          <div className="mt-12 border-t border-[#E9EBF0]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
              <p className="text-base text-[#4E5663]">{labels.copyright}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link href={`${prefix}/social/facebook`} className="text-base text-[#4E5663] transition-colors hover:text-[#363085]">
                  {labels.facebook}
                </Link>
                <Link href={`${prefix}/social/x`} className="text-base text-[#4E5663] transition-colors hover:text-[#363085]">
                  {labels.x}
                </Link>
                <Link href={`${prefix}/social/instagram`} className="text-base text-[#4E5663] transition-colors hover:text-[#363085]">
                  {labels.instagram}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
