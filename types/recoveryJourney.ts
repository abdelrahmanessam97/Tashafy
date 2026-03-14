export type StartJourneyStep = {
  label: string;
  description: string;
  icon: "search" | "phone" | "briefcase" | "tag";
  iconBgClass?: string;
  iconColorClass?: string;
};
