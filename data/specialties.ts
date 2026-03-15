import type { SpecialtyItem } from "@/types/specialties";

export function getSpecialties(t: (key: string) => string): SpecialtyItem[] {
  return [
    { title: t("specialties.items.0.title"), icon: "/mask-group.svg", description: t("specialties.items.0.description") },
    { title: t("specialties.items.1.title"), icon: "/mask-group.svg", description: t("specialties.items.1.description") },
    { title: t("specialties.items.2.title"), icon: "/mask-group.svg", description: t("specialties.items.2.description") },
    { title: t("specialties.items.3.title"), icon: "/mask-group.svg", description: t("specialties.items.3.description") },
    { title: t("specialties.items.4.title"), icon: "/mask-group.svg", description: t("specialties.items.4.description") },
    { title: t("specialties.items.5.title"), icon: "/mask-group.svg", description: t("specialties.items.5.description") },
    { title: t("specialties.items.6.title"), icon: "/mask-group.svg", description: t("specialties.items.6.description") },
    { title: t("specialties.items.7.title"), icon: "/mask-group.svg", description: t("specialties.items.7.description") },
    { title: t("specialties.items.8.title"), icon: "/mask-group.svg", description: t("specialties.items.8.description") },
    { title: t("specialties.items.9.title"), icon: "/mask-group.svg", description: t("specialties.items.9.description") },
    { title: t("specialties.items.10.title"), icon: "/mask-group.svg", description: t("specialties.items.10.description") },
  ];
}
