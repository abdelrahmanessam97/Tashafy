import type { FooterLabels } from "@/components/shared/Footer";
import { NavLabels } from "@/types/global";

export function getNavAndFooterLabels(t: (key: string) => string): {
  labels: NavLabels;
  footerLabels: FooterLabels;
} {
  const labels: NavLabels = {
    home: t("nav.home"),
    rehabilitation: t("nav.rehabilitation"),
    wellness: t("nav.wellness"),
    examinations: t("nav.examinations"),
    blog: t("nav.blog"),
    aboutUs: t("nav.aboutUs"),
    contactUs: t("nav.contactUs"),
    freeConsultation: t("nav.freeConsultation"),
  };

  const footerLabels: FooterLabels = {
    tagline: t("footer.tagline"),
    copyright: t("footer.copyright"),
    mainTitle: t("footer.mainTitle"),
    aboutUs: t("footer.aboutUs"),
    legal: t("footer.legal"),
    rehabilitation: t("footer.rehabilitation"),
    wellnessPrograms: t("footer.wellnessPrograms"),
    medicalTravel: t("footer.medicalTravel"),
    checkupPackages: t("footer.checkupPackages"),
    ourDoctors: t("footer.ourDoctors"),
    blog: t("footer.blog"),
    contactUs: t("footer.contactUs"),
    faq: t("footer.faq"),
    termsOfUse: t("footer.termsOfUse"),
    privacyPolicy: t("footer.privacyPolicy"),
    email: t("footer.email"),
    facebook: t("footer.facebook"),
    x: t("footer.x"),
    instagram: t("footer.instagram"),
  };

  return { labels, footerLabels };
}
