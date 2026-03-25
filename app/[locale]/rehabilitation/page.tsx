import { JourneySection } from "@/components/shared/journey/JourneySection";
import { RehabilitationServicesSection } from "@/components/rehabilitation/RehabilitationServicesSection";
import { StickyNavbar } from "@/components/shared/navbar/StickyNavbar";
import { getNavAndFooterLabels } from "@/data/global";
import { getRehabilitationMedicalCenters, getRehabilitationPageSections } from "@/data/rehabilitation";
import { getTranslations } from "@/lib/localization/i18n-server";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainSection from "@/components/rehabilitation/mainSection/MainSection";

const MedicalCenterSection = dynamic(() => import("@/components/shared/medicalCanter/MedicalCenterSection").then((m) => m.MedicalCenterSection), { ssr: true });
const FaqSection = dynamic(() => import("@/components/shared/FaqSection").then((m) => m.FaqSection), { ssr: true });
const OurDoctorsSection = dynamic(() => import("@/components/shared/ourDoctors/OurDoctorsSection").then((m) => m.OurDoctorsSection), { ssr: true });
const TestmoialsSection = dynamic(() => import("@/components/shared/testmonials/TestmoialsSection").then((m) => m.TestmoialsSection), { ssr: true });

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Tashafy - Rehabilitation",
  description: "Rehabilitation page of Tashafy",
};

export default async function RehabilitationPage({ params }: Props) {
  const { locale } = await params;
  const { t } = getTranslations(locale);
  const { labels } = getNavAndFooterLabels(t);
  const rehabilitationCenters = getRehabilitationMedicalCenters(locale, t);
  const pageSections = getRehabilitationPageSections(t);
  return (
    <main className="flex flex-col items-center">
      <MainSection
        locale={locale}
        labels={labels}
        title={t("rehabilitation.hero.title")}
        subtitle={t("rehabilitation.hero.subtitle")}
        browseCentersLabel={t("rehabilitation.hero.browseCenters")}
        browseCentersHref={`/${locale}/rehabilitation#rehabilitation-medical-centers`}
        searchPlaceholder={t("nav.searchPlaceholder")}
        loadingLabel={t("common.loading")}
      />

      <StickyNavbar locale={locale} labels={labels} searchPlaceholder={t("nav.searchPlaceholder")} loadingLabel={t("common.loading")} />

      <RehabilitationServicesSection locale={locale} title={pageSections.services.title} subtitle={pageSections.services.subtitle} items={pageSections.services.items} />

      <div id="rehabilitation-medical-centers">
        <MedicalCenterSection
          locale={locale}
          title={rehabilitationCenters.title}
          subtitle={rehabilitationCenters.subtitle}
          filterPlaceholder={rehabilitationCenters.filterPlaceholder}
          startsFromLabel={rehabilitationCenters.startsFromLabel}
          categories={rehabilitationCenters.categories}
          viewAllLabel={false}
        />
      </div>

      <OurDoctorsSection
        locale={locale}
        title={pageSections.doctors.title}
        subtitle={pageSections.doctors.subtitle}
        doctors={pageSections.doctors.doctors}
        backgroundColor="#ffffff"
      />

      <TestmoialsSection
        locale={locale}
        title={pageSections.testimonials.title}
        subtitle={pageSections.testimonials.subtitle}
        durationLabel={pageSections.testimonials.durationLabel}
        countryLabel={pageSections.testimonials.countryLabel}
        testimonials={pageSections.testimonials.testimonials}
      />

      <FaqSection locale={locale} title={pageSections.faq.title} intro={pageSections.faq.intro} items={pageSections.faq.items} />

      <JourneySection
        locale={locale}
        title={t("recoveryJourney.cta.title")}
        subtitle={t("recoveryJourney.cta.subtitle")}
        primaryCardTitle={t("whyChoose.features.accreditedCenters.title")}
        primaryCardSubtitle={t("whyChoose.features.accreditedCenters.subtitle")}
        healthyLifeLabel={t("journey.healthyLife")}
        transparentPricesLabel={t("whyChoose.features.transparentPrices.title")}
        buttonLabel={t("recoveryJourney.cta.button")}
        buttonHref="https://wa.me/1234567890"
      />
    </main>
  );
}
