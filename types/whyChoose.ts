export type WhyChooseFeature = {
  title: string;
  subtitle: string;
  icon: "tag" | "building" | "smile" | "star";
};

export type WhyChooseStat = {
  value: string;
  label: string;
};

export type WhyChooseSectionProps = {
  locale: string;
  title: string;
  subtitle: string;
  features: WhyChooseFeature[];
  stats: WhyChooseStat[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
};
