import type { consultationsDoctorItem } from "@/types/consultationsDoctor";

export function getConsultationsDoctors(t: (key: string) => string): consultationsDoctorItem[] {
  return [
    {
      name: t("doctors.items.0.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.0.experience"),
      specialization: t("doctors.items.0.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookConsultationLabel"),
    },
    {
      name: t("doctors.items.1.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.1.experience"),
      specialization: t("doctors.items.1.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookNowLabel"),
    },
    {
      name: t("doctors.items.2.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.2.experience"),
      specialization: t("doctors.items.2.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookNowLabel"),
    },
    {
      name: t("doctors.items.3.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.3.experience"),
      specialization: t("doctors.items.3.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookConsultationLabel"),
    },
    {
      name: t("doctors.items.4.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.4.experience"),
      specialization: t("doctors.items.4.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookConsultationLabel"),
    },
    {
      name: t("doctors.items.5.name"),
      image: "https://placehold.co/384x384",
      experience: t("doctors.items.5.experience"),
      specialization: t("doctors.items.5.specialization"),
      recommendationText: t("doctors.recommendationLabel"),
      bookButtonLabel: t("doctors.bookConsultationLabel"),
    },
  ];
}
