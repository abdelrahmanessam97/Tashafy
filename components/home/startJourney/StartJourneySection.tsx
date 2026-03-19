import { cn } from "@/lib/utils";
import type { StartJourneyStep } from "@/types/recoveryJourney";
import Image from "next/image";
import { memo } from "react";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { StepCard } from "./StepCard";
import { StepConnector } from "./StepConnector";
import { StartJourneyCtaCard } from "./StartJourneyCtaCard";

export type StartJourneySectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  steps: StartJourneyStep[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
};

export const StartJourneySection = memo(function StartJourneySection({
  locale,
  title,
  subtitle,
  steps,
  ctaTitle,
  ctaSubtitle,
  ctaButtonLabel,
  ctaButtonHref,
}: StartJourneySectionProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      style={{
        background: "linear-gradient(180deg, #F8F4FF 0%, #F9FAFC 100%)",
      }}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <SectionContainer className="relative">
        <div className="">
          <div className={isRtl ? "text-right" : "text-left"}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-(--text-brand)">
              {title}
              <span className={cn("relative inline-block align-middle", isRtl ? "mr-2" : "ml-2")}>
                <span className="hidden lg:inline-block w-[120px] min-[380px]:w-[160px] sm:w-[200px] md:w-[200px] h-1 bg-[#cfcde9] rounded-xl shrink-0" aria-hidden />
                <span
                  className={cn("hidden lg:block absolute w-1 bg-[#cfcde9] rounded-xl h-28 sm:h-20 md:h-32 ltr:h-50 top-4 sm:top-8", !isRtl ? "right-0" : "left-0")}
                  aria-hidden
                />
              </span>
            </h2>
            {subtitle != null && subtitle.trim() !== "" && (
              <p className={cn("mt-4 text-base md:text-xl w-full max-w-[1000px] text-(--text-secondary) md:ltr:w-[50%]", isRtl ? "text-right" : "text-left")}>
                {subtitle}
              </p>
            )}
            <span className=" mt-3 inline-block">
              <Image
                className={cn("w-full min-w-[250px] object-contain")}
                src="/StartJourneyVector.svg"
                alt="Start Journey Vector"
                width={200}
                height={500}
                loading="lazy"
                decoding="async"
                aria-hidden
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start justify-start">
          <div className="min-w-0 col-span-1"></div>

          <div className=" col-span-2 w-full overflow-hidden">
            <div className="flex flex-col gap-0 relative w-full">
              {steps.map((step, index) => (
                <div key={`${step.label}-${index}`}>
                  <StepCard step={step} isRtl={isRtl} />
                  {index < steps.length - 1 && <StepConnector isRtl={isRtl} />}
                </div>
              ))}

              <StartJourneyCtaCard isRtl={isRtl} ctaTitle={ctaTitle} ctaSubtitle={ctaSubtitle} ctaButtonLabel={ctaButtonLabel} ctaButtonHref={ctaButtonHref} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
});
