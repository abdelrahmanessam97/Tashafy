import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MedicalCenterItem } from "@/types/medicalCenter";
import { MapPin, SaudiRiyal, Star } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

type MedicalCenterCardProps = {
  center: MedicalCenterItem;
  isRtl: boolean;
  startsFromLabel: string;
};

export const MedicalCenterCard = memo(function MedicalCenterCard({ center, isRtl, startsFromLabel }: MedicalCenterCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[450px] h-[400px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0px_1.75px_4px_-1px_rgba(15,17,20,0.10)]",
        "inline-flex flex-col items-stretch",
      )}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image src={center.image} alt={center.centerName} className="absolute inset-0 h-full w-full object-cover" width={384} height={300} loading="lazy" unoptimized />
        <div className="absolute inset-x-0 bottom-0 h-5 bg-linear-to-t from-[#433ca640] to-[#36308500]" />
        <div className={cn("absolute top-3 z-10 flex h-7 items-center justify-center rounded-full bg-(--text-rose) px-3", !isRtl ? "right-3" : "left-3")}>
          <span className="text-sm font-medium leading-5 text-pink-50">{center.badgeLabel}</span>
        </div>
      </div>

      <div className="flex  flex-col gap-4 p-3 h-[200px]">
        <div className="flex flex-col gap-2 h-[170px]">
          <div className={cn("flex items-center justify-between gap-2")}>
            <div className={cn("flex min-w-0 flex-1 flex-col gap-1")}>
              <div className={cn("flex w-full max-w-[288px] items-center gap-2")}>
                <h3 className="truncate text-lg font-bold leading-7 text-(--text-brand)">{center.centerName}</h3>
                <div className={cn("flex items-center gap-1")}>
                  <Star className="size-3 fill-neutral-400 text-neutral-400 mb-1" aria-hidden />
                  <span className="text-xs font-base leading-4 text-(--text-secondary)">{center.rating}</span>
                </div>
              </div>
              <div className={cn("flex items-center gap-1 text-xs font-base leading-4 text-(--text-secondary)")}>
                <MapPin className="size-4 mb-1 shrink-0 text-(--text-secondary)" aria-hidden />
                <span className="truncate">{center.location}</span>
              </div>
            </div>

            <div className={cn("flex flex-col")}>
              <span className="text-xs font-base leading-4 text-(--text-secondary)">{startsFromLabel}</span>
              <div className={cn("inline-flex items-center gap-1")}>
                <span className="text-xl font-bold leading-8 text-(--text-brand) flex items-center gap-1" aria-hidden>
                  {center.priceFormatted}
                  <SaudiRiyal className="size-4 shrink-0 text-(--text-brand) fill-current" aria-hidden />
                </span>
              </div>
            </div>
          </div>
          <div className={cn("flex flex-wrap flex-row-reverse justify-end items-center gap-3 ")}>
            {center.serviceTags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="flex h-6 items-center justify-center rounded-full border border-[#E0E0E0] bg-[#E9EBF0] px-2 text-xs font-medium leading-4 text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Button
          variant="default"
          size="lg"
          className="h-11 w-full rounded-lg border border-[#E0E0E0] bg-white hover:bg-[#E0E0E0]/20 px-5 text-(--text-secondary) text-base font-medium shadow-[0px_1px_2px_0px_rgba(15,17,20,0.06)]"
          asChild
        >
          <a href="#centers">{center.learnAboutLabel}</a>
        </Button>
      </div>
    </div>
  );
});
