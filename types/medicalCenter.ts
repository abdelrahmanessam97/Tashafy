export type MedicalCenterItem = {
  image: string;
  badgeLabel: string;
  priceFormatted: string;
  centerName: string;
  rating: string;
  location: string;
  serviceTags: string[];
  learnAboutLabel: string;
};

export type MedicalCenterCategory = {
  categoryName: string;
  viewAllLabel: string;
  centers: MedicalCenterItem[];
};
