import type { StartJourneyStep } from "@/types/recoveryJourney";

export function getStartJourneySteps(t: (key: string) => string): StartJourneyStep[] {
  return [
    {
      label: t("recoveryJourney.steps.discover.title"),
      description: t("recoveryJourney.steps.discover.description"),
      icon: "search",
      iconBgClass: "bg-[#FEE2E2]",
      iconColorClass: "text-[#433CA6]",
    },
    {
      label: t("recoveryJourney.steps.consult.title"),
      description: t("recoveryJourney.steps.consult.description"),
      icon: "phone",
      iconBgClass: "bg-[#FEE2E2]",
      iconColorClass: "text-[#F97373]",
    },
    {
      label: t("recoveryJourney.steps.evaluate.title"),
      description: t("recoveryJourney.steps.evaluate.description"),
      icon: "search",
      iconBgClass: "bg-[#FEE2E2]",
      iconColorClass: "text-[#433CA6]",
    },
    {
      label: t("recoveryJourney.steps.arrange.title"),
      description: t("recoveryJourney.steps.arrange.description"),
      icon: "briefcase",
      iconBgClass: "bg-[#FEE2E2]",
      iconColorClass: "text-[#433CA6]",
    },
    {
      label: t("recoveryJourney.steps.followup.title"),
      description: t("recoveryJourney.steps.followup.description"),
      icon: "tag",
      iconBgClass: "bg-[#FEE2E2]",
      iconColorClass: "text-[#F97373]",
    },
  ];
}
