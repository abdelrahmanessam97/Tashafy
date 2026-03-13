import type { ProgramItem } from "@/types/programs";

export function getPrograms(t: (key: string) => string): ProgramItem[] {
  return [
    {
      title: t("programs.integrated.title"),
      price: t("programs.integrated.price"),
      duration: t("programs.integrated.duration"),
      summary: t("programs.integrated.summary"),
      features: [t("programs.integrated.f1"), t("programs.integrated.f2"), t("programs.integrated.f3")],
      image: "/service1.svg",
      href: "#",
    },
    {
      title: t("programs.comprehensive.title"),
      price: t("programs.comprehensive.price"),
      duration: t("programs.comprehensive.duration"),
      summary: t("programs.comprehensive.summary"),
      features: [t("programs.comprehensive.f1"), t("programs.comprehensive.f2"), t("programs.comprehensive.f3")],
      image: "/service2.svg",
      bestSeller: true,
      href: "#",
    },
    {
      title: t("programs.genetic.title"),
      price: t("programs.genetic.price"),
      duration: t("programs.genetic.duration"),
      summary: t("programs.genetic.summary"),
      features: [t("programs.genetic.f1"), t("programs.genetic.f2"), t("programs.genetic.f3"), t("programs.genetic.f4")],
      image: "/service3.svg",
      href: "#",
    },
  ];
}
