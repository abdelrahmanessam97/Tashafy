export type ArticleItem = {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  image: string;
  href: string;
};

export type CertificationItem = {
  name: string;
  description: string;
  logo: string;
};

export type DestinationItem = {
  city: string;
  country: string;
  image: string;
  centersCount: string;
};

export type FeatureItem = {
  title: string;
  subtitle: string;
  icon: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type ProgramItem = {
  title: string;
  price: string;
  duration: string;
  summary?: string;
  features: string[];
  image: string;
  bestSeller?: boolean;
  href: string;
};

export type StartJourneyStep = {
  label: string;
  description: string;
  icon: "search" | "phone" | "briefcase" | "tag";
  iconBgClass?: string;
  iconColorClass?: string;
};

export type SpecialtyItem = {
  title: string;
  description: string;
  icon?: string;
};

export type WhyChooseFeature = {
  title: string;
  subtitle: string;
  icon: "tag" | "building" | "smile" | "star";
};

export type WhyChooseStat = {
  value: string;
  label: string;
};
