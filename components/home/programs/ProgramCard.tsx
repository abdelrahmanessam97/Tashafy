import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProgramItem } from "@/types/programs";
import { BadgeCheck, SaudiRiyal, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type ProgramCardProps = {
  program: ProgramItem;
  bookLabel: string;
  bestSellerLabel: string;
  isRtl: boolean;
};

export const ProgramCard = memo(function ProgramCard({ program, bookLabel, bestSellerLabel, isRtl }: ProgramCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full flex flex-col border-0 rounded-xl bg-white shadow-md overflow-hidden p-4",
        program.bestSeller && "border-2 border-primary bg-primary/5",
      )}
    >
      {program.bestSeller && (
        <span
          className={cn(
            "absolute top-0 z-10 inline-flex items-center gap-1.5 rounded-b-2xl px-8 py-3 text-xs font-medium text-white",
            "bg-[#FAB9C7] text-[#C92044]",
            !isRtl ? "right-10 flex-row-reverse" : "left-10",
          )}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full" aria-hidden>
            <Star className="size-3 fill-(--text-rose) text-(--text-rose)" />
          </span>
          {bestSellerLabel}
        </span>
      )}

      <div className="relative w-full aspect-7/3 overflow-hidden rounded-xl bg-muted shrink-0">
        <Image
          src={program.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
        />
        {/* Pink/red gradient overlay at bottom of image fading into white */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(4.16deg,rgba(239,39,82,0.6)_3.39%,rgba(239,39,82,0)_50%)]" aria-hidden />
      </div>
      <CardContent className={cn("flex flex-col flex-1 p-5 md:p-6 gap-3", isRtl ? "text-right" : "text-left")}>
        <h3 className="text-lg md:text-xl font-bold text-(--text-rose)">{program.title}</h3>
        <p className="text-2xl md:text-3xl font-bold text-(--text-brand) flex items-center gap-1">
          {program.price}
          <SaudiRiyal className="size-4 shrink-0 fill-(--text-brand) text-(--text-brand)" aria-hidden />
        </p>
        <div className="space-y-0.5">
          <p className="text-lg md:text-xl font-bold text-(--text-brand)">{program.duration}</p>
          {program.summary != null && program.summary.trim() !== "" && <p className="text-base font-semibold text-(--text-secondary)">{program.summary}</p>}
        </div>
        <ul className={cn("flex flex-col gap-2.5 text-base font-semibold text-(--text-secondary) leading-relaxed list-none", !isRtl ? "items-end" : "items-start")}>
          {program.features.map((feature, i) => (
            <li key={i} className={cn("flex gap-2 text-pretty wrap-break-word", !isRtl && "flex-row-reverse")}>
              <BadgeCheck className="size-4 shrink-0 fill-primary text-white mt-0.5" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold" size="lg">
            <Link href={program.href}>{bookLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});
