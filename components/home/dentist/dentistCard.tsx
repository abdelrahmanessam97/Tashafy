import { cn } from "@/lib/utils";
import type { DestinationItem } from "@/types/destinations";
import Image from "next/image";
import { memo } from "react";

type DentistCardProps = {
  destination: DestinationItem;
  centersLabel: string;
  isRtl: boolean;
};

export const DentistCard = memo(function DentistCard({ destination, centersLabel, isRtl }: DentistCardProps) {
  return (
    <div className="w-full max-w-[384px] shrink-0 inline-flex flex-col justify-start items-center">
      <div className="relative w-full aspect-380/230 overflow-hidden rounded-2xl">
        <Image src={destination.image} alt="dentist image" className="w-full h-full object-cover" width={380} height={230} loading="lazy" unoptimized />
      </div>
      <div className={cn("w-full p-5 rounded-[20px] flex flex-col gap-5 bg-muted/80", isRtl ? "items-end text-right" : "items-start text-left")}>
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-2xl font-semibold text-(--text-brand) leading-7">{destination.city}</h3>
          <p className="text-base font-normal text-(--text-secondary) leading-6">{destination.country}</p>
        </div>
        <div className={cn("w-full h-6 inline-flex items-center gap-1.5", isRtl ? "justify-end flex-row-reverse" : "justify-start")}>
          <span className="text-base font-medium text-(--text-primary-hover) leading-6">{centersLabel}</span>
          <span className="text-base font-medium text-(--text-primary-hover) leading-6">{destination.centersCount}</span>
        </div>
      </div>
    </div>
  );
});
