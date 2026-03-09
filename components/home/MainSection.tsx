import { Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Navbar } from "../shared/navbar/Navbar";
import { NavLabels } from "@/types/global";

type MainSectionProps = {
  locale: string;
  labels: NavLabels;
  motto: string;
  heading: string;
  searchPlaceholder: string;
  loadingLabel?: string;
};

const MainSection = ({ locale, labels, motto, heading, searchPlaceholder, loadingLabel }: MainSectionProps) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start my-1 ">
      <div className="overflow-hidden">
        <div className="sticky top-1 z-50 w-full max-w-[min(95%,80rem)] mx-auto px-0 md:px-4 shrink-0 ">
          <Navbar locale={locale} labels={labels} searchPlaceholder={searchPlaceholder} loadingLabel={loadingLabel} />
        </div>
      </div>

      <div className="container overflow-hidden flex-1 min-h-0 w-full">
        <div className="absolute inset-0 w-[99%] mx-auto rounded-4xl overflow-hidden">
          <video controls={false} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" aria-hidden>
            <source src="/home_main.mp4" type="video/mp4" />
          </video>
          {/* overlay*/}
          <div className="absolute inset-0 w-full h-full bg-linear-to-b from-[#000000] to-[#000000] opacity-40 " aria-hidden />
        </div>

        {/* Content */}
        <div className="relative z-10 w-[99%] mx-auto rounded-4xl flex flex-col min-h-[840px]">
          <div className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
            <p className="text-white/95 text-lg md:text-xl font-medium mb-3">{motto}</p>
            <div className="my-4">
              <Image src="/Vector.svg" className="w-full h-full" alt="Red Chevron" width={90} height={80} loading="lazy" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-white leading-tight mb-8 md:mb-10">{heading}</h3>
            <div className="w-full max-w-2xl relative">
              <Search className="absolute inset-s-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" aria-hidden />
              <Input
                type="text"
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                className="h-12 w-full bg-[rgba(0, 0, 0, 0.48)] border-(--borderBrandSecondary) shadow-[0_1px_2px_0_rgba(17,24,39,0.05)] rounded-xl py-4 ps-12 pe-4 text-white placeholder:text-white/60 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
