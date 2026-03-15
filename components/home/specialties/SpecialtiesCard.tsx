import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SpecialtyItem } from "@/types/specialties";
import Image from "next/image";
import { memo } from "react";

type DoctoresCardProps = {
  specialty: SpecialtyItem;
  isRtl: boolean;
};

export const DoctoresCard = memo(function DoctoresCard({ specialty, isRtl }: DoctoresCardProps) {
  return (
    <Card className="w-full h-full shrink-0 self-stretch rounded-3xl border-0 bg-white p-6 shadow-[0px_1px_2px_0px_rgba(15,17,20,0.06)]">
      <CardContent
        className={cn(
          "flex flex-col gap-1 p-0 h-[190px]",
        )}
      >
        <div className="h-12 w-12 shrink-0 rounded-full flex items-center justify-center">
          {specialty.icon && <Image src={specialty.icon} alt={specialty.title} className="h-full w-full object-contain" width={24} height={24} />}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-xl font-medium text-(--text-brand) leading-8">{specialty.title}</h3>
          <p className="text-base font-normal text-(--text-secondary) leading-6">{specialty.description}</p>
        </div>
      </CardContent>
    </Card>
  );
});
