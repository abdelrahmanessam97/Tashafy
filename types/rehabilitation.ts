import type { consultationsDoctorItem, FaqItem, MedicalCenterCategory, TestimonialItem } from "./global";

export type RehabilitationMedicalCentersContent = {
  title: string;
  subtitle: string;
  filterPlaceholder: string;
  startsFromLabel: string;
  categories: MedicalCenterCategory[];
};

export type RehabilitationServiceItem = {
  title: string;
  description: string;
  icon: "neuro" | "sports" | "postOp" | "physical";
};

export type RehabilitationServicesSectionContent = {
  title: string;
  subtitle: string;
  items: RehabilitationServiceItem[];
};

export type RehabilitationCenterHeroContent = {
  slides: string[];
  centerName: string;
  badgeLabel: string;
  location: string;
  rating: string;
  reviewsLabel: string;
};

export type RehabilitationPageSectionsContent = {
  services: RehabilitationServicesSectionContent;
  doctors: {
    title: string;
    subtitle: string;
    doctors: consultationsDoctorItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    durationLabel: string;
    countryLabel: string;
    testimonials: TestimonialItem[];
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
};
