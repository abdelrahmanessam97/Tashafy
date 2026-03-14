import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DoctorItem } from "@/types/doctors";
import { Star } from "lucide-react";
import { memo } from "react";

type ConsultationsDoctorCardProps = {
  doctor: DoctorItem;
  isRtl: boolean;
};

export const ConsultationsDoctorCard = memo(function ConsultationsDoctorCard({ doctor, isRtl }: ConsultationsDoctorCardProps) {
  return (
    <div className="w-full max-w-[384px] shrink-0 inline-flex flex-col items-center gap-2.5">
      <div className="relative w-full aspect-square rounded-[20px] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={doctor.image} alt="" className="absolute inset-0 w-full h-full object-cover" width={384} height={384} loading="lazy" />
        {/* Experience badge - start corner (left in LTR, right in RTL) */}
        <div className={cn("absolute top-3 h-6 px-2 rounded-full bg-rose-600/60 inline-flex items-center justify-center z-10", isRtl ? "right-3" : "left-3")}>
          <span className="text-xs font-normal text-white leading-4">{doctor.experience}</span>
        </div>
        {/* Bottom gradient overlay */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-zinc-800 to-transparent rounded-b-[20px] backdrop-blur-sm flex flex-col gap-5",
            isRtl ? "items-end text-right" : "items-start text-left",
          )}
        >
          <div className="flex flex-col gap-2 w-full min-h-[130px]">
            <h3 className="text-2xl font-semibold text-white leading-7">{doctor.name}</h3>
            <p className="text-base font-bold text-white/80 leading-6">{doctor.specialization}</p>
            {doctor.recommendationText && (
              <div className={cn("flex flex-col gap-1")}>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <span className="text-xs font-normal text-amber-400/90 leading-4">{doctor.recommendationText}</span>
              </div>
            )}
          </div>
          <Button variant="default" size="lg" className="w-full h-11 rounded-lg px-5 text-base font-medium" asChild>
            <a href="#book">{doctor.bookButtonLabel}</a>
          </Button>
        </div>
      </div>
    </div>
  );
});
