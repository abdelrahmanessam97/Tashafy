"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types/features";
import Image from "next/image";

type FeatureCardProps = {
  feature: FeatureItem;
  isRtl: boolean;
};

export function FeatureCard({ feature, isRtl }: FeatureCardProps) {
  return (
    <Card className="relative h-[130px] overflow-visible bg-white rounded-2xl shadow-md">
      <CardContent className="relative flex flex-col  pt-6 sm:pt-7 md:pt-8 pb-5 sm:pb-6 md:pb-8 px-4 sm:px-5 md:px-6 overflow-hidden">
        {/* Icon: right side in RTL, left side in LTR — overlaps card edge */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
            isRtl ? "-right-4 sm:-right-5 md:-right-6" : "-left-4 sm:-left-5 md:-left-6",
          )}
        >
          <Image src={feature.icon} alt="" width={80} height={80} className="w-full h-full object-contain" aria-hidden />
        </div>
        {/* Text: padding on the side opposite the icon; alignment follows dir */}
        <div className={cn("flex flex-col gap-1 min-w-0", isRtl ? "pr-10 sm:pr-12 md:pr-14 text-right" : "pl-10 sm:pl-12 md:pl-14 text-left")}>
          <h3 className="text-xl lg:text-2xl font-bold text-(--text-brand)">{feature.title}</h3>
          <p className="text-base md:text-lg text-(--text-secondary) leading-snug">{feature.subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
}
