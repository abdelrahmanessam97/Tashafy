import type { DestinationItem } from "@/types/destinations";

export function getDestinations(t: (key: string) => string): DestinationItem[] {
  return [
    {
      city: t("destinations.items.0.city"),
      country: t("destinations.items.0.country"),
      image: "/Dentist.svg",
      centersCount: t("destinations.items.0.centersCount"),
    },
    {
      city: t("destinations.items.1.city"),
      country: t("destinations.items.1.country"),
      image: "/Dentist.svg",
      centersCount: t("destinations.items.1.centersCount"),
    },
    {
      city: t("destinations.items.2.city"),
      country: t("destinations.items.2.country"),
      image: "https://placehold.co/380x230",
      centersCount: t("destinations.items.2.centersCount"),
    },
    {
      city: t("destinations.items.2.city"),
      country: t("destinations.items.2.country"),
      image: "https://placehold.co/380x230",
      centersCount: t("destinations.items.2.centersCount"),
    },
    {
      city: t("destinations.items.2.city"),
      country: t("destinations.items.2.country"),
      image: "https://placehold.co/380x230",
      centersCount: t("destinations.items.2.centersCount"),
    },
  ];
}
