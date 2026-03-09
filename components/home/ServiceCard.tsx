import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceItem } from "@/types/ourServices";

type ServiceCardProps = {
  service: ServiceItem;
  learnMoreLabel: string;
  isRtl: boolean;
};

export function ServiceCard({ service, learnMoreLabel, isRtl }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white dark:bg-white/5 hover:bg-[#433ca6] dark:hover:bg-[#5b52c4]">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-2xl bg-muted">
        <Image src={service.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden />
      </div>
      <CardContent className="pt-6 pb-6 px-6 text-[#1f242e] dark:text-white group-hover:text-white transition-colors duration-300">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-sm leading-relaxed mb-4 line-clamp-3 text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group-hover:text-white transition-colors duration-300"
        >
          {learnMoreLabel}
          {isRtl ? <ChevronLeft className="size-4 shrink-0" aria-hidden /> : <ChevronRight className="size-4 shrink-0" aria-hidden />}
        </Link>
      </CardContent>
    </Card>
  );
}
