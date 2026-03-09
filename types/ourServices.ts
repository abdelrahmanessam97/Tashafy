export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type OurServiceProps = {
  locale: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  services: ServiceItem[];
  learnMoreLabel: string;
  profileImage?: string;
};
