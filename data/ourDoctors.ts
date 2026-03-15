import type { consultationsDoctorItem } from "@/types/consultationsDoctor";

export function getOurDoctors(t: (key: string) => string): consultationsDoctorItem[] {
  return [
    {
      name: t("ourDoctors.items.0.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.0.experience"),
      specialization: t("ourDoctors.items.0.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
    {
      name: t("ourDoctors.items.1.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.1.experience"),
      specialization: t("ourDoctors.items.1.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
    {
      name: t("ourDoctors.items.2.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.2.experience"),
      specialization: t("ourDoctors.items.2.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
    {
      name: t("ourDoctors.items.3.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.3.experience"),
      specialization: t("ourDoctors.items.3.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
    {
      name: t("ourDoctors.items.4.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.4.experience"),
      specialization: t("ourDoctors.items.4.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
    {
      name: t("ourDoctors.items.5.name"),
      image: "https://placehold.co/384x384",
      experience: t("ourDoctors.items.5.experience"),
      specialization: t("ourDoctors.items.5.specialization"),
      bookButtonLabel: t("ourDoctors.bookNowLabel"),
    },
  ];
}
