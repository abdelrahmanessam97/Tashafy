import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types/testimonials";
import Image from "next/image";
import { memo } from "react";

type TestmoialsCardProps = {
  testimonial: TestimonialItem;
  isRtl: boolean;
  durationLabel: string;
  countryLabel: string;
};

export const TestmoialsCard = memo(function TestmoialsCard({ testimonial, isRtl, durationLabel, countryLabel }: TestmoialsCardProps) {
  return (
    <Card className="w-full max-w-[576px] shrink-0 rounded-3xl border-0 bg-white p-6 sm:p-8 shadow-[0px_1px_2px_0px_rgba(15,17,20,0.06)]">
      <CardContent className="flex flex-col gap-6 sm:gap-8 p-0">
        <div className={cn("flex items-center gap-2.5", isRtl && "flex-row-reverse")}>
          <div className={cn("h-12 w-12 shrink-0 rounded-full overflow-hidden flex items-center justify-center", testimonial.avatarBgClass)}>
            <Image src={testimonial.avatar} alt={testimonial.name} className="h-8 w-8 object-cover" width={32} height={32} />
          </div>
          <div className={cn("flex flex-col gap-0.5 min-w-0", isRtl ? "items-end text-right" : "items-start text-left")}>
            <p className="text-xl font-medium text-(--text-brand) leading-8">{testimonial.name}</p>
            <p className="text-sm font-bold text-(--text-secondary) leading-5 max-w-[13rem]">{testimonial.role}</p>
          </div>
        </div>
        <p className={cn("text-lg font-medium text-(--text-brand) leading-7", isRtl ? "text-right" : "text-left")}>{testimonial.quote}</p>
        <div className={cn("flex items-center gap-12 sm:gap-16", isRtl ? "justify-end" : "justify-start")}>
          <div className={cn("flex flex-col gap-1 min-w-0", isRtl ? "items-end text-right" : "items-start text-left")}>
            <span className="text-sm font-bold text-(--text-tertiary) leading-5">{durationLabel}</span>
            <span className="text-sm font-bold text-(--text-tertiary-hover) leading-5">{testimonial.duration}</span>
          </div>
          <div className={cn("flex flex-col gap-1 min-w-0 max-w-[11rem]", isRtl ? "items-end text-right" : "items-start text-left")}>
            <span className="text-sm font-bold text-(--text-tertiary) leading-5">{countryLabel}</span>
            <span className="text-sm font-bold text-(--text-tertiary-hover) leading-5">{testimonial.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
