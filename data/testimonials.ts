import type { TestimonialItem } from "@/types/testimonials";

export function getTestimonials(t: (key: string) => string): TestimonialItem[] {
  return [
    {
      name: t("testimonials.items.0.name"),
      role: t("testimonials.items.0.role"),
      avatar: "/placehold1.svg",
      avatarBgClass: "bg-fuchsia-200",
      quote: t("testimonials.items.0.quote"),
      duration: t("testimonials.items.0.duration"),
      location: t("testimonials.items.0.location"),
    },
    {
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
      avatar: "/placehold2.svg",
      avatarBgClass: "bg-amber-200",
      quote: t("testimonials.items.1.quote"),
      duration: t("testimonials.items.1.duration"),
      location: t("testimonials.items.1.location"),
    },
    {
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
      avatar: "/placehold1.svg",
      avatarBgClass: "bg-pink-200",
      quote: t("testimonials.items.2.quote"),
      duration: t("testimonials.items.2.duration"),
      location: t("testimonials.items.2.location"),
    },
    {
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
      avatar: "/placehold2.svg",
      avatarBgClass: "bg-rose-200",
      quote: t("testimonials.items.3.quote"),
      duration: t("testimonials.items.3.duration"),
      location: t("testimonials.items.3.location"),
    },
    {
      name: t("testimonials.items.4.name"),
      role: t("testimonials.items.4.role"),
      avatar: "/placehold1.svg",
      avatarBgClass: "bg-teal-200",
      quote: t("testimonials.items.4.quote"),
      duration: t("testimonials.items.4.duration"),
      location: t("testimonials.items.4.location"),
    },
  ];
}
