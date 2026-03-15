import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      <div className="relative w-[96%] mx-auto container-padding flex flex-col items-center gap-12">
        {/* Header: filter dropdown | title + subtitle + decoration */}
        <div className={cn("flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-end")}>
          <div className={cn("relative flex-1 min-w-0", isRtl ? "text-right" : "text-left")}>
            <h2 className="max-w-[1056px] text-3xl font-bold leading-tight text-(--text-brand) md:text-4xl lg:text-5xl lg:leading-[56px]">
              {title}
              <span className="inline-block">
                <Image
                  className={cn("w-7 h-7 md:w-10 md:h-10 object-contain")}
                  src="/Highlight_05.svg"
                  alt=""
                  width={50}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="text-lg font-normal leading-8 text-(--text-secondary) md:text-xl">{subtitle}</p>
          </div>

          <Select dir={isRtl ? "rtl" : "ltr"} defaultValue="all">
            <SelectTrigger className="w-full max-w-48 border border-[#E0E0E0] rounded-lg p-2 shadow-xs py-5 bg-white text-lg cursor-pointer">
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
              <div className={cn("flex w-full items-center justify-between", isRtl && "flex-row-reverse")}>
                <a href="#centers" className="text-lg font-normal leading-7 text-(--text-secondary) underline hover:opacity-90">
                  {category.viewAllLabel}
                </a>
                <h3 className="text-right text-2xl font-semibold leading-9 text-(--text-brand) md:text-3xl">{category.categoryName}</h3>
              </div>
              <div className={cn("flex w-full flex-wrap items-center justify-between gap-4")}>
                {category.centers.map((center, index) => (
                  <MedicalCenterCard key={`${center.centerName}-${index}`} center={center} isRtl={isRtl} startsFromLabel={startsFromLabel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
