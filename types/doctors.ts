export type DoctorItem = {
  name: string;
  image: string;
  experience: string;
  specialization: string;
  /** If set, show 5 stars + this text (e.g. "Recommended by 90% of patients") */
  recommendationText?: string;
  bookButtonLabel: string;
};
