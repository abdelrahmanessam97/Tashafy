import { cn } from "@/lib/utils";
import type { PartnerItem } from "@/types/ourPartners";
import Image from "next/image";
import { PartnerCard } from "./PartnerCard";

type PartnersProps = {
  locale: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  partners: PartnerItem[];
};

export function Partners({ locale, title, subtitle, partners }: PartnersProps) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden bg-muted/40 py-16 md:py-24" dir={isRtl ? "rtl" : "ltr"}>
      <div className="relative w-[96%] mx-auto container-padding">
        <div className={cn("mb-12 md:mb-16", isRtl ? "text-right" : "text-left")}>
          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-brand)  mb-3 inline-flex items-center gap-2 flex-wrap">
            <Image
              src="/cursor.svg"
              alt=""
              width={28}
              height={28}
              className={cn("shrink-0 absolute top-6", !isRtl ? "-right-8 transform rotate-270" : "-left-8")}
              aria-hidden
            />
            {title}
          </h2>
          {subtitle != null && subtitle.trim() !== "" && (
            <p
              className={cn(
                "mt-4 text-sm md:text-xl leading-relaxed text-pretty wrap-break-word max-w-full",
                "text-muted-foreground dark:text-muted-foreground",
                isRtl ? "text-right" : "text-left",
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)]">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
