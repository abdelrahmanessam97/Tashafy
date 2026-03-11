import type { OurStoryStat } from "@/data/ourStory";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

export type OurStoryProps = {
  locale: string;
  title: string;
  subtitle: string;
  stats: OurStoryStat[];
};

export const OurStory = memo(function OurStory({ locale, title, subtitle, stats }: OurStoryProps) {
  const isRtl = locale === "ar";
  // RTL: show 1000+, 99%, 200+ right-to-left (closest to heading = 1000+)
  const displayStats = isRtl ? [...stats].reverse() : stats;

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 padding-x [content-visibility:auto] [contain-intrinsic-size:auto_400px]"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ backgroundColor: "#FCE7F3" }}
    >
      <div className="relative w-[96%] mx-auto container-padding">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className={cn("flex flex-1 flex-col max-w-xl")}>
            <div className="flex items-center gap-2 relative">
              <Image
                src="/our-story.svg"
                alt="Our Story"
                width={86}
                height={60}
                className={cn("absolute bottom-8 mb-3 w-14 h-auto md:w-20 transform-3d", isRtl ? "-right-14" : "-left-14 transform-[rotateY(180deg)]")}
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2B5B] mb-3 leading-tight">{title}</h2>
            </div>
            <p className="text-sm md:text-xl text-[#6B7280] leading-relaxed">{subtitle}</p>
          </div>

          <div className={cn("flex w-full items-center justify-center flex-1 flex-wrap gap-8 lg:gap-16")}>
            {displayStats.map((stat) => (
              <div key={stat.label} className={cn("flex flex-col items-center justify-center")}>
                <span className="text-3xl md:text-6xl font-bold text-secondary tabular-nums leading-none">{stat.value}</span>
                <span className="text-sm md:text-xl text-[#6B7280] mt-1.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
