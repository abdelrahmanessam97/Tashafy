import type { FeatureItem } from "@/types/features";

export function getFeatures(t: (key: string) => string): FeatureItem[] {
  return [
    {
      title: t("features.certified.title"),
      subtitle: t("features.certified.subtitle"),
      icon: "/support-icon.svg",
    },
    {
      title: t("features.reviews.title"),
      subtitle: t("features.reviews.subtitle"),
      icon: "/support-icon.svg",
    },
    {
      title: t("features.support.title"),
      subtitle: t("features.support.subtitle"),
      icon: "/support-icon.svg",
    },
  ];
}
