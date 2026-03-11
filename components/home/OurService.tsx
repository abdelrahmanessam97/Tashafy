import { cn } from "@/lib/utils";
import type { OurServiceProps } from "@/types/ourServices";
import Image from "next/image";
import { memo } from "react";
import { ServiceCard } from "./ServiceCard";

export const OurService = memo(function OurService({ locale, title, titleHighlight, subtitle, services, learnMoreLabel }: OurServiceProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 margin-top [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 w-full from-primary/10 via-primary/3 to-transparent",
          isRtl ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l",
        )}
        aria-hidden
      />
      <div className="relative w-[96%] mx-auto container-padding">
        <div className="">
          <div className={cn("mb-12 md:mb-16 ", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f242e] mb-3">
              {title}
              {titleHighlight != null && (
                <span className="relative inline-block">
                  {titleHighlight}
                  <Image
                    className={cn("absolute -bottom-6 w-full min-w-[100px] h-auto object-contain", isRtl ? "right-0 object-bottom-right" : "left-0 object-bottom-left")}
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
              <p
                className={cn(
                  "mt-8 text-sm md:text-xl leading-relaxed text-pretty wrap-break-word max-w-full",
                  "text-muted-foreground dark:text-muted-foreground",
                  isRtl ? "text-right" : "text-left",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.href} service={service} learnMoreLabel={learnMoreLabel} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
