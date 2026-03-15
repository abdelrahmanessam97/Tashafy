import type { MedicalCenterCategory, MedicalCenterItem } from "@/types/medicalCenter";

function buildCenter(t: (key: string) => string, key: string, learnAboutLabel: string): MedicalCenterItem {
  const tags: string[] = [];
  const extra = t(`medicalCenters.${key}.extraTag`);
  if (extra) tags.push(extra);
  for (let i = 1; i <= 3; i++) {
    const tag = t(`medicalCenters.${key}.tag${i}`);
    if (tag) tags.push(tag);
  }
  return {
    image: "https://placehold.co/384x256",
    badgeLabel: t(`medicalCenters.${key}.badge`),
    priceFormatted: t(`medicalCenters.${key}.price`),
    centerName: t(`medicalCenters.${key}.name`),
    rating: t(`medicalCenters.${key}.rating`),
    location: t(`medicalCenters.${key}.location`),
    serviceTags: tags,
    learnAboutLabel,
  };
}

export function getMedicalCenters(t: (key: string) => string): MedicalCenterCategory[] {
  const learnAboutLabel = t("medicalCenters.learnAboutLabel");
  return [
    {
      categoryName: t("medicalCenters.categories.wellness"),
      viewAllLabel: t("medicalCenters.viewAllLabel"),
      centers: [buildCenter(t, "wellness.0", learnAboutLabel), buildCenter(t, "wellness.1", learnAboutLabel), buildCenter(t, "wellness.2", learnAboutLabel)],
    },
    {
      categoryName: t("medicalCenters.categories.rehabilitation"),
      viewAllLabel: t("medicalCenters.viewAllLabel"),
      centers: [buildCenter(t, "rehab.0", learnAboutLabel), buildCenter(t, "rehab.1", learnAboutLabel), buildCenter(t, "rehab.2", learnAboutLabel)],
    },
  ];
}
