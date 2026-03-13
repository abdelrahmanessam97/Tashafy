import { cn } from "@/lib/utils";
import type { ProgramItem } from "@/types/programs";
import Image from "next/image";
import { memo } from "react";
import { ProgramCard } from "./ProgramCard";

type ProgramsSectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  programs: ProgramItem[];
  bookLabel: string;
  bestSellerLabel: string;
};
export const ProgramsSection = memo(function ProgramsSection({ locale, title, subtitle, programs, bookLabel, bestSellerLabel }: ProgramsSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden bg-muted/30 py-16 md:py-24 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="relative w-[96%] mx-auto container-padding">
        <div className="">
          <div className={cn("mb-12 md:mb-16", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-brand) mb-3">
              {title}
              <span className=" inline-block">
                <Image
                  className={cn("w-7 h-7 sm:w-16 sm:h-16 md:w-15 md:h-15 object-contain", isRtl ? "-right-2 object-bottom-right" : "-left-2 object-bottom-left")}
                  src="/Highlight_05.svg"
                  alt=""
                  width={50}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
            </h2>
            {subtitle != null && subtitle.trim() !== "" && (
              <p className={cn("mt-4 text-base md:text-xl max-w-full", "text-(--text-secondary)", isRtl ? "text-right" : "text-left")}>{subtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={`${program.title}-${index}`} program={program} bookLabel={bookLabel} bestSellerLabel={bestSellerLabel} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
