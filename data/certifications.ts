import type { CertificationItem } from "@/types/certifications";

export function getCertifications(t: (key: string) => string): CertificationItem[] {
  return [
    { name: "WHO", description: t("certifications.who"), logo: "/Certifications.svg" },
    { name: "CBAHI", description: t("certifications.cbahi"), logo: "/Certifications.svg" },
    { name: "ISO 9001", description: t("certifications.iso9001"), logo: "/Certifications.svg" },
    { name: "JCI", description: t("certifications.jci"), logo: "/Certifications.svg" },
    { name: "WHO", description: t("certifications.who"), logo: "/Certifications.svg" },
    { name: "CBAHI", description: t("certifications.cbahi"), logo: "/Certifications.svg" },
    { name: "JCI", description: t("certifications.jci"), logo: "/Certifications.svg" },
  ];
}
