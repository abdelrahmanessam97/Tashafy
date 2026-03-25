"use client";

import { Navbar } from "@/components/shared/navbar/Navbar";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { cn } from "@/lib/utils";
import type { NavLabels } from "@/types/global";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HERO_TOP_OVERLAY = {
  backgroundImage: "linear-gradient(178.85deg, rgba(31, 36, 46, 0.72) 19.17%, rgba(54, 48, 133, 0) 135.32%)",
} as const;

const navPrevClass = "rehab-detail-hero-prev";
const navNextClass = "rehab-detail-hero-next";
const paginationClass = "rehab-detail-hero-pagination";

export type MainDetailsSectionProps = {
  locale: string;
  labels: NavLabels;
  searchPlaceholder: string;
  loadingLabel?: string;
  slides: string[];
  centerName: string;
  badgeLabel: string;
  location: string;
  rating: string;
  reviewsLabel: string;
};

export default function MainDetailsSection({
  locale,
  labels,
  searchPlaceholder,
  loadingLabel,
  slides,
  centerName,
  badgeLabel,
  location,
  rating,
  reviewsLabel,
}: MainDetailsSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section className="relative z-50 flex min-h-screen w-full flex-col scroll-smooth container-margin" dir={isRtl ? "rtl" : "ltr"} aria-label={centerName}>
      {/* Full-bleed Swiper background — `w-[99%]` + `rounded-b-4xl` aligned with MainSection hero frame */}
      <div className="absolute inset-0 z-0 mx-auto w-[99%] overflow-hidden rounded-b-4xl">
        <div className="absolute inset-0 min-h-screen">
          <Swiper
            className="h-full w-full"
            dir={isRtl ? "rtl" : "ltr"}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop
            speed={600}
            navigation={{
              prevEl: `.${navPrevClass}`,
              nextEl: `.${navNextClass}`,
            }}
            pagination={{
              el: `.${paginationClass}`,
              clickable: true,
              bulletClass: "rehab-hero-bullet inline-block size-3 shrink-0 cursor-pointer rounded-full bg-[#cfcde9] transition-all",
              bulletActiveClass: "rehab-hero-bullet-active !h-3 !w-6 rounded-full !bg-[#6660b7] shadow-[0px_1px_2px_0px_rgba(15,17,20,0.06)]",
            }}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={`${src}-${index}`} className="!h-full">
                <div className="relative h-full min-h-screen w-full">
                  <Image src={src} alt={index === 0 ? centerName : ""} fill className="object-cover" sizes="100vw" priority={index === 0} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pointer-events-none absolute inset-0 mix-blend-multiply" style={HERO_TOP_OVERLAY} aria-hidden />
        <Image
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-30"
          src="/Grid.svg"
          alt=""
          width={1440}
          height={800}
          priority
          aria-hidden
        />
      </div>

      {/* Bottom read legibility (Figma: gradient strip over imagery) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] mx-auto h-[min(55vh,520px)] w-[99%] rounded-b-4xl bg-linear-to-t from-black/85 via-black/45 to-transparent"
        aria-hidden
      />

      <div className="relative z-50 mx-auto w-full shrink-0 px-4 sm:w-[96%] sm:px-0">
        <Navbar className="navbar" locale={locale} labels={labels} searchPlaceholder={searchPlaceholder} loadingLabel={loadingLabel} />
      </div>

      <div className="relative z-10 mt-auto flex w-full flex-1 flex-col justify-end pb-8 md:pb-10">
        <SectionContainer>
          <div className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-6", isRtl && "md:flex-row-reverse")}>
            <div className="flex items-center gap-4 md:gap-6">
              <button
                type="button"
                className={cn(
                  navNextClass,
                  "flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#433ca6]/50 bg-white/90 opacity-90 shadow-sm transition-opacity hover:opacity-100",
                )}
                aria-label={isRtl ? "Previous slide" : "Next slide"}
              >
                {isRtl ? (
                  <ChevronRight className="size-5 text-(--color-text-brand)" aria-hidden />
                ) : (
                  <ChevronLeft className="size-5 text-(--color-text-brand)" aria-hidden />
                )}
              </button>

              <div className={cn(paginationClass, "flex min-h-3 items-center gap-2.5")} />

              <button
                type="button"
                className={cn(
                  navPrevClass,
                  "flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#433ca6]/50 bg-white/90 opacity-90 shadow-sm transition-opacity hover:opacity-100",
                )}
                aria-label={isRtl ? "Next slide" : "Previous slide"}
              >
                {isRtl ? (
                  <ChevronLeft className="size-5 text-(--color-text-brand)" aria-hidden />
                ) : (
                  <ChevronRight className="size-5 text-(--color-text-brand)" aria-hidden />
                )}
              </button>
            </div>

            <div className={cn("flex max-w-xl flex-col gap-3", isRtl ? "items-end text-right" : "items-start text-left")}>
              <div className={cn("flex flex-wrap items-center gap-3", isRtl && "flex-row-reverse")}>
                <span className="size-3 shrink-0 rounded-full bg-(--color-accent-rose)" aria-hidden />
                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{centerName}</h1>
              </div>

              <div className={cn("flex flex-wrap items-center gap-3 text-lg text-[#d1d5de] md:gap-4", isRtl && "flex-row-reverse justify-end")}>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-white/90">{rating}</span>
                  <Star className="size-5 fill-amber-400 text-amber-400" aria-hidden />
                  <span className="text-[#d1d5de]">{reviewsLabel}</span>
                </span>
                <span className="text-[#d1d5de]">{location}</span>
                <span className="inline-flex h-7 items-center rounded-full bg-[#433ca6] px-3 text-sm font-medium text-[#f2f1fa]">{badgeLabel}</span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
