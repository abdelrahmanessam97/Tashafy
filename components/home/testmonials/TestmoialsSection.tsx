"use client";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { TestmoialsCard } from "./TestmoialsCard";

export type TestmoialsSectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  countryLabel: string;
  testimonials: TestimonialItem[];
};
export function TestmoialsSection({ locale, title, subtitle, durationLabel, countryLabel, testimonials }: TestmoialsSectionProps) {
  const isRtl = locale === "ar";
  const navPrevClass = "testimonials-swiper-prev";
  const navNextClass = "testimonials-swiper-next";

  return (
    <section
      className="relative w-full overflow-hidden bg-muted/50 py-16 md:py-24 [content-visibility:auto] [contain-intrinsic-size:auto_600px]"
      dir={isRtl ? "rtl" : "ltr"}
      aria-label={title}
    >
      <SectionContainer className="relative">
        {/* Top row: title + quote | description + nav + pagination */}
        <div className="flex flex-col gap-8 lg:gap-4 mb-12 md:mb-16 lg:flex-row lg:items-start">
          <div className={cn("flex-1 flex flex-col gap-3")}>
            <h2 className="flex items-center gap-2 text-2xl md:text-4xl lg:text-5xl font-bold text-(--text-brand) leading-tight text-start w-full md:max-w-70 ltr:max-w-[75%]">
              {title}
              <div className="shrink-0 w-8 h-8 flex items-center gap-2 text-destructive/30" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="31" viewBox="0 0 19 31" fill="none">
                  <path
                    d="M1.67737 13.0527H15.4899C15.9208 13.0527 16.3342 13.2239 16.6389 13.5287C16.9437 13.8334 17.1149 14.2468 17.1149 14.6777V27.6777C17.1149 28.1087 16.9437 28.522 16.6389 28.8268C16.3342 29.1315 15.9208 29.3027 15.4899 29.3027H3.30237C2.87139 29.3027 2.45807 29.1315 2.15332 28.8268C1.84857 28.522 1.67737 28.1087 1.67737 27.6777V9.80273C1.67737 7.64785 2.53339 5.58122 4.05713 4.05749C5.58086 2.53376 7.64748 1.67773 9.80237 1.67773"
                    stroke="#EF4444"
                    strokeWidth="3.35484"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="31" viewBox="0 0 19 31" fill="none">
                  <path
                    d="M1.67737 13.0527H15.4899C15.9208 13.0527 16.3342 13.2239 16.6389 13.5287C16.9437 13.8334 17.1149 14.2468 17.1149 14.6777V27.6777C17.1149 28.1087 16.9437 28.522 16.6389 28.8268C16.3342 29.1315 15.9208 29.3027 15.4899 29.3027H3.30237C2.87139 29.3027 2.45807 29.1315 2.15332 28.8268C1.84857 28.522 1.67737 28.1087 1.67737 27.6777V9.80273C1.67737 7.64785 2.53339 5.58122 4.05713 4.05749C5.58086 2.53376 7.64748 1.67773 9.80237 1.67773"
                    stroke="#EF4444"
                    strokeWidth="3.35484"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </h2>
          </div>
          <div className={cn("px-2 md:px-8 flex-1 max-w-[652px] w-full", isRtl ? "items-end justify-end text-right" : "items-start justify-start text-left")}>
            <p className={cn("text-base font-medium text-(--text-secondary) leading-6 w-full max-w-[1000px]", isRtl ? "text-right" : "text-left")}>{subtitle}</p>
            <div className={cn("flex justify-center gap-5 mt-4 w-50")}>
              <button
                type="button"
                aria-label={isRtl ? "Next" : "Previous"}
                className={`${navPrevClass} p-3 cursor-pointer rounded-3xl bg-white border border-primary/30 opacity-50 hover:opacity-100 transition-opacity`}
              >
                {isRtl ? <ChevronRight className="h-5 w-5 text-(--text-brand)" aria-hidden /> : <ChevronLeft className="h-5 w-5 text-(--text-brand)" aria-hidden />}
              </button>
              <div className="testimonials-pagination flex justify-center items-center gap-2.5 " />
              <button
                type="button"
                aria-label={isRtl ? "Previous" : "Next"}
                className={`${navNextClass} p-3 cursor-pointer rounded-3xl bg-white border border-primary/30 opacity-50 hover:opacity-100 transition-opacity`}
              >
                {isRtl ? <ChevronLeft className="h-5 w-5 text-(--text-brand)" aria-hidden /> : <ChevronRight className="h-5 w-5 text-(--text-brand)" aria-hidden />}
              </button>
            </div>
          </div>
        </div>

        {/* Swiper carousel */}
        <div className="!overflow-visible">
          <Swiper
            dir={isRtl ? "rtl" : "ltr"}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: `.${navPrevClass}`,
              nextEl: `.${navNextClass}`,
            }}
            pagination={{
              el: ".testimonials-pagination",
              clickable: true,
              bulletClass: "inline-block w-3 h-3 rounded-xl bg-primary/20 transition-all cursor-pointer",
              bulletActiveClass: "!w-6 !h-3 !bg-primary rounded-full shadow-[0px_1px_2px_0px_rgba(15,17,20,0.06)]",
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.name}-${index}`}>
                <TestmoialsCard testimonial={testimonial} isRtl={isRtl} durationLabel={durationLabel} countryLabel={countryLabel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
}
