import { CertificationCard } from "@/components/home/certifications/CertificationCard";
import { cn } from "@/lib/utils";
import type { CertificationItem } from "@/types/certifications";
import Image from "next/image";

type CertificationsSectionProps = {
  locale: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  certifications: CertificationItem[];
};
export function Certificationssection({ locale, title, titleHighlight, subtitle, certifications }: CertificationsSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24" dir={isRtl ? "rtl" : "ltr"}>
      <div className="relative w-[96%] mx-auto container-padding">
        <header className={cn("mb-12 md:mb-16", isRtl ? "text-right" : "text-left")}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-brand)">
            {title}
            {titleHighlight != null && (
              <span className="relative inline-block">
                {titleHighlight}
                <Image
                  className={cn(
                    "absolute -bottom-2 lg:-bottom-6 w-full min-w-[100px] object-contain",
                    isRtl ? "right-0 object-bottom-right" : "left-0 object-bottom-left",
                  )}
                  src="/title-highlight.svg"
                  alt=""
                  width={200}
                  height={24}
                  sizes="200px"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
            )}
          </h2>
          {subtitle != null && subtitle.trim() !== "" && (
            <p className={cn("mt-6 text-base md:text-xl max-w-full", "text-(--text-secondary)", isRtl ? "text-right" : "text-left")}>{subtitle}</p>
          )}
        </header>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {certifications.map((certification, index) => (
            <div key={`${certification.name}-${index}`} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-1.125rem)]">
              <CertificationCard certification={certification} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
