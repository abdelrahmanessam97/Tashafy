import { cn } from "@/lib/utils";
import type { OurServiceProps } from "@/types/ourServices";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";

export function OurService({ locale, title, titleHighlight, subtitle, services, learnMoreLabel }: OurServiceProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-[96%] mx-auto px-0 md:px-4">
        <div className="">
          <div className={cn("mb-12 md:mb-16", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f242e] dark:text-white mb-3">
              {title}
              {titleHighlight != null && (
                <span className="relative inline-block">
                  {titleHighlight}
                  <Image className={cn("absolute -bottom-6 w-full min-w-[100px] h-auto object-contain", isRtl ? "right-0 object-bottom-right" : "left-0 object-bottom-left")} src="/title-highlight.svg" alt="" width={200} height={24} aria-hidden />
                </span>
              )}
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} learnMoreLabel={learnMoreLabel} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
