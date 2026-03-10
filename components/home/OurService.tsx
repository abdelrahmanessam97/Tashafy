import { cn } from "@/lib/utils";
import type { OurServiceProps } from "@/types/ourServices";
import { ServiceCard } from "./ServiceCard";

export function OurService({ locale, title, titleHighlight, subtitle, services, learnMoreLabel }: OurServiceProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden bg-linear-to-b from-[#e8e4f3] to-white dark:from-[#1a1625] dark:to-[#0f0d14] py-16 md:py-24"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-[96%] mx-auto px-0 md:px-4">
        <div className="px-0 sm:px-6 md:px-10">
          <div className={cn("mb-12 md:mb-16", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f242e] dark:text-white mb-3">
              {title}
              {titleHighlight != null && (
                <>
                  <span className="border-b-4 border-secondary pb-0.5">{titleHighlight}</span>
                </>
              )}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} learnMoreLabel={learnMoreLabel} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
