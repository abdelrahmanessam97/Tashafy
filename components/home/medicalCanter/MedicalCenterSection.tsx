import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { cn } from "@/lib/utils";
import type { MedicalCenterCategory } from "@/types/medicalCenter";
import { MedicalCenterCard } from "./MedicalCenterCard";
import Image from "next/image";

export type MedicalCenterSectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  filterPlaceholder: string;
  startsFromLabel: string;
  categories: MedicalCenterCategory[];
};

export function MedicalCenterSection({ locale, title, subtitle, filterPlaceholder, startsFromLabel, categories }: MedicalCenterSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full overflow-hidden bg-background py-16 md:py-32 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      dir={isRtl ? "rtl" : "ltr"}
      aria-label={title}
    >
      <SectionContainer className="relative flex flex-col items-center gap-12">
        <div className={cn("flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-end")}>
          <div className={cn("relative flex-1 min-w-0", isRtl ? "text-right" : "text-left")}>
            <h2 className="text-2xl font-bold leading-tight text-(--text-brand) md:text-4xl lg:text-5xl">
              {title}
              <span className="inline-block">
                <Image
                  className={cn("w-7 h-7 md:w-10 md:h-10 object-contain ", !isRtl && "rotate-120")}
                  src="/Highlight_05.svg"
                  alt="Highlight"
                  width={50}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="text-lg font-normal leading-8 text-(--text-secondary) md:text-xl w-full max-w-[1000px]">{subtitle}</p>
          </div>

          <Select dir={isRtl ? "rtl" : "ltr"} defaultValue="all" aria-label={filterPlaceholder} aria-labelledby={filterPlaceholder}>
            <SelectTrigger className="w-full max-w-48 border border-[#E0E0E0] rounded-lg p-2 shadow-xs py-5 bg-white text-base cursor-pointer">
              <SelectValue placeholder={filterPlaceholder} className="text-black" />
            </SelectTrigger>
            <SelectContent className="bg-white text-(--text-secondary) border border-[#E0E0E0] shadow-xs py-2">
              <SelectItem value="all" className="text-lg cursor-pointer">
                {filterPlaceholder}
              </SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.categoryName} value={cat.categoryName} className="text-lg cursor-pointer">
                  {cat.categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category blocks */}
        <div className="flex w-full flex-col items-end gap-8">
          {categories.map((category) => (
            <div key={category.categoryName} className="flex w-full flex-col gap-5">
              <div className={cn("flex w-full items-center justify-between")}>
                <h3 className="text-right text-2xl font-semibold leading-9 text-(--text-brand) md:text-3xl">{category.categoryName}</h3>
                <a href="#centers" className="text-lg font-normal leading-7 text-(--text-secondary) underline hover:opacity-90">
                  {category.viewAllLabel}
                </a>
              </div>
              <div className={cn("w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center")}>
                {category.centers.map((center, index) => (
                  <MedicalCenterCard key={`${center.centerName}-${index}`} center={center} isRtl={isRtl} startsFromLabel={startsFromLabel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
