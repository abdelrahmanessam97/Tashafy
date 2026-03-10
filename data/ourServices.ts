import type { ServiceItem } from "@/types/ourServices";

export function getOurServices(t: (key: string) => string, locale: string): ServiceItem[] {
  return [
    {
      title: t("services.rehabilitation.title"),
      description: t("services.rehabilitation.description"),
      image: "/service1.svg",
      href: `/${locale}/services/rehabilitation`,
    },
    {
      title: t("services.wellness.title"),
      description: t("services.wellness.description"),
      image: "/service2.svg",
      href: `/${locale}/services/wellness`,
    },
    {
      title: t("services.med.title"),
      description: t("services.med.description"),
      image: "/service3.svg",
      href: `/${locale}/services/med`,
    },
  ];
}
