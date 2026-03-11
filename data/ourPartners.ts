import type { PartnerItem } from "@/types/ourPartners";

export function getOurPartners(t: (key: string) => string): PartnerItem[] {
  return [
    { name: "GlobeMed", logo: "/our-partners.svg" },
    { name: t("partners.islamicInsurance"), logo: "/our-partners.svg" },
    { name: t("partners.university"), logo: "/our-partners.svg" },
    { name: t("partners.euroArab"), logo: "/our-partners.svg" },
    { name: t("partners.housingBank"), logo: "/our-partners.svg" },
    { name: t("partners.islamicInsurance"), logo: "/our-partners.svg" },
    { name: "AJIB", logo: "/our-partners.svg" },
    { name: "GlobeMed", logo: "/our-partners.svg" },
  ];
}
