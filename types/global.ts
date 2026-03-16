/** Navbar label keys and link item type */
export type NavLabels = {
  home: string;
  rehabilitation: string;
  wellness: string;
  examinations: string;
  blog: string;
  aboutUs: string;
  contactUs: string;
  freeConsultation: string;
};

export type NavItem = { key: keyof NavLabels; path: string };

/** Footer label keys and link item type */
export type FooterLabels = {
  tagline: string;
  copyright: string;
  mainTitle: string;
  aboutUs: string;
  legal: string;
  rehabilitation: string;
  wellnessPrograms: string;
  medicalTravel: string;
  checkupPackages: string;
  ourDoctors: string;
  blog: string;
  contactUs: string;
  faq: string;
  termsOfUse: string;
  privacyPolicy: string;
  email: string;
  facebook: string;
  x: string;
  instagram: string;
};

export type FooterNavItem = { key: keyof FooterLabels; path: string };

export type FooterColumnProps = {
  title: string;
  links: FooterNavItem[];
  locale: string;
  labels: FooterLabels;
};

export type FooterProps = {
  locale: string;
  labels: FooterLabels;
};
