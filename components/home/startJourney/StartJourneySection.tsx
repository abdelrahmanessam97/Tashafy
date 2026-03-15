import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StartJourneyStep } from "@/types/recoveryJourney";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { StepCard } from "./StepCard";
import { StepConnector } from "./StepConnector";

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
      <div className="relative w-[96%] mx-auto container-padding">
        <div className="">
          <div className={isRtl ? "text-right" : "text-left"}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-brand)">
              {title}
              <span className={cn("relative inline-block align-middle", isRtl ? "mr-2" : "ml-2")}>
                <span className="hidden md:inline-block w-[120px] min-[380px]:w-[160px] sm:w-[200px] md:w-[200px] h-1 bg-[#cfcde9] rounded-xl shrink-0" aria-hidden />
                <span
                  className={cn("hidden md:block absolute w-1 bg-[#cfcde9] rounded-xl h-28 sm:h-20 md:h-32 ltr:h-40 top-4 sm:top-8", !isRtl ? "right-0" : "left-0")}
                  aria-hidden
                />
              </span>
            </h2>
            {subtitle != null && subtitle.trim() !== "" && (
              <p className={cn("mt-6 text-base md:text-xl max-w-full text-(--text-secondary) ltr:w-[50%]", isRtl ? "text-right" : "text-left")}>{subtitle}</p>
            )}
            <span className="relative mt-3 inline-block">
              <Image
                className={cn("absolute -bottom-2 lg:-bottom-6 w-full min-w-[250px] object-contain", isRtl ? "right-0 object-bottom-right" : "left-0 object-bottom-left")}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-start">
          <div className="min-w-0 col-span-1"></div>

          <div className="justify-self-start col-span-2 w-full mt-10 overflow-hidden">
            <div className="flex flex-col gap-0 relative w-full">
              {steps.map((step, index) => (
                <div key={`${step.label}-${index}`}>
                  <StepCard step={step} isRtl={isRtl} />
                  {index < steps.length - 1 && <StepConnector isRtl={isRtl} />}
                </div>
              ))}

              <CardContent className=" flex items-center justify-between p-2 md:p-4 relative bg-[#CFCDE9] rounded-2xl mt-10 overflow-hidden">
                <div className={cn("flex flex-col md:flex-row md:items-center gap-6", isRtl && "md:flex-row-reverse")}>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-3xl font-bold text-(--text-brand) mb-2">{ctaTitle}</h3>
                    <p className="text-sm md:text-base text-(--text-secondary) mb-4">{ctaSubtitle}</p>
                    <Button asChild className="rounded-lg w-[60%] h-14 text-lg bg-[#10B981] hover:bg-[#10B981]/90 text-white font-semibold">
                      <Link href={ctaButtonHref} className="inline-flex items-center gap-2  text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {ctaButtonLabel}
                      </Link>
                    </Button>
                  </div>
                </div>
                <Image
                  src="/StartJourney.svg"
                  alt="Start Journey"
                  width={50}
                  height={50}
                  className={cn("hidden lg:block absolute top-5 h-40 w-40 object-contain", !isRtl ? "-right-2 rotate-270" : "left-0 rotate-90")}
                />
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
