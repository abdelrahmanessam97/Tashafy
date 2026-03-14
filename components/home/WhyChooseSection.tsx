import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { WhyChooseFeature, WhyChooseStat } from "@/types/whyChoose";
import Link from "next/link";
import { Tag, Building2, Smile, Star } from "lucide-react";
import Image from "next/image";

const iconMap = {
  tag: Tag,
  building: Building2,
  smile: Smile,
  star: Star,
};

type WhyChooseSectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  features: WhyChooseFeature[];
  stats: WhyChooseStat[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
};
export function WhyChooseSection({
  locale,
  title,
  subtitle,
  features,
  stats,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref = "#",
  ctaSecondaryHref = "#",
}: WhyChooseSectionProps) {
  const isRtl = locale === "ar";
  const sectionDir = isRtl ? "ltr" : "rtl";

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 mt-8 md:mt-12 lg:mt-16" dir={sectionDir} aria-label={title}>
      <div className="relative w-full max-w-[96%] mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-stretch">
          {/* Features card — order follows dir (right in RTL, left in LTR) */}
          <Card className="order-2 lg:order-1 rounded-lg border border-[#e5e7eb] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden h-fit">
            <CardContent className="p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div key={`${feature.title}-${index}`} className={cn("flex items-start gap-3 sm:gap-4", isRtl && "flex-row-reverse")}>
                    <div
                      className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-white border border-(--text-border) flex items-center justify-center"
                      aria-hidden
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-(--text-brand)" />
                    </div>
                    <div className={cn("min-w-0 flex-1", isRtl ? "text-right" : "text-left")}>
                      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-(--text-brand)">{feature.title}</h3>
                      <p className="mt-1 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed text-pretty">{feature.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* CTA block — alignment follows dir (start = right in RTL, end = right in LTR) */}
          <div className={cn("order-1 w-full p-4 sm:p-5 md:p-6 flex flex-col justify-start gap-5 sm:gap-6 md:gap-8", isRtl ? "items-start" : "items-end")}>
            <div className={cn("flex flex-col gap-3 sm:gap-4", isRtl ? "items-start" : "items-end")}>
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-brand)">
                {title}
                <Image
                  src="/Group.svg"
                  alt="Why Choose Tashafy"
                  width={50}
                  height={50}
                  className={cn(
                    "absolute w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-24 bottom-0",
                    !isRtl ? "-right-16 sm:-right-20 md:-right-20 transform rotate-130" : "-left-16 sm:-left-20 md:-left-20 ",
                  )}
                  aria-hidden
                />
              </h2>
              <p className="mt-4 text-base md:text-xl max-w-full">{subtitle}</p>
            </div>
            <div className={cn("flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12", isRtl ? "justify-start" : "justify-end")}>
              {stats.map((stat, index) => (
                <div key={`${stat.value}-${index}`} className={cn("flex flex-col items-center")}>
                  <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-(--text-brand)">{stat.value}</span>
                  <span className="text-xs sm:text-sm md:text-base lg:text-xl text-(--text-secondary) mt-1 max-w-[200px] sm:max-w-[250px] text-center">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className={cn("flex flex-wrap gap-3 sm:gap-4", !isRtl && "flex-row-reverse justify-start")}>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg md:text-xl font-medium py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 rounded-xl"
              >
                <Link href={ctaPrimaryHref}>{ctaPrimary}</Link>
              </Button>
              <Button
                asChild
                className="text-base sm:text-lg md:text-xl border border-[#D1D5DE] bg-white hover:bg-gray-100 text-[#1f242e] py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 rounded-xl font-medium"
              >
                <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
