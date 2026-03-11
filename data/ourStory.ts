export type OurStoryStat = {
  value: string;
  label: string;
};

export function getOurStoryStats(t: (key: string) => string): OurStoryStat[] {
  return [
    { value: "200+", label: t("ourStory.statSpecialists") },
    { value: "99%", label: t("ourStory.statSuccessRate") },
    { value: "1000+", label: t("ourStory.statPatients") },
  ];
}
