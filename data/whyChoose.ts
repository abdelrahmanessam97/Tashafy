import type { WhyChooseFeature, WhyChooseStat } from "@/types/whyChoose";

export function getWhyChooseFeatures(t: (key: string) => string): WhyChooseFeature[] {
  return [
    {
      title: t("whyChoose.features.transparentPrices.title"),
      subtitle: t("whyChoose.features.transparentPrices.subtitle"),
      icon: "tag",
    },
    {
      title: t("whyChoose.features.accreditedCenters.title"),
      subtitle: t("whyChoose.features.accreditedCenters.subtitle"),
      icon: "building",
    },
    {
      title: t("whyChoose.features.fastProcess.title"),
      subtitle: t("whyChoose.features.fastProcess.subtitle"),
      icon: "smile",
    },
    {
      title: t("whyChoose.features.integratedJourney.title"),
      subtitle: t("whyChoose.features.integratedJourney.subtitle"),
      icon: "star",
    },
  ];
}

export function getWhyChooseStats(t: (key: string) => string): WhyChooseStat[] {
  return [
    { value: "200+", label: t("whyChoose.stats.patientsPerDay") },
    { value: "1000+", label: t("whyChoose.stats.medicalTeam") },
  ];
}
