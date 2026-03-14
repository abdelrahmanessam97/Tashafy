import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainSection from "@/components/home/MainSection";
import { getTranslations } from "@/lib/localization/i18n-server";
import { getNavAndFooterLabels } from "@/data/global";
import { getOurServices } from "@/data/ourServices";
import { getCertifications } from "@/data/certifications";
import { getFeatures } from "@/data/features";
import { getOurPartners } from "@/data/ourPartners";
import { getFaqItems } from "@/data/faq";
import { getOurStoryStats } from "@/data/ourStory";
import { getWhyChooseFeatures, getWhyChooseStats } from "@/data/whyChoose";
import { getArticles } from "@/data/articles";
import { getPrograms } from "@/data/programs";
import { getStartJourneySteps } from "@/data/recoveryJourney";

const ServiceSection = dynamic(() => import("@/components/home/services/ServiceSection").then((m) => m.ServiceSection), { ssr: true });
const StartJourneySection = dynamic(() => import("@/components/home/startJourney/StartJourneySection").then((m) => m.StartJourneySection), { ssr: true });
const ProgramsSection = dynamic(() => import("@/components/home/programs/ProgramsSection").then((m) => m.ProgramsSection), { ssr: true });
const LatestArticlesSection = dynamic(() => import("@/components/home/artical/LatestArticlesSection").then((m) => m.LatestArticlesSection), { ssr: true });
const WhyChooseSection = dynamic(() => import("@/components/home/WhyChooseSection").then((m) => m.WhyChooseSection), { ssr: true });
const OurPartners = dynamic(() => import("@/components/home/partners/Partners").then((m) => m.Partners), { ssr: true });
const FeaturesBanner = dynamic(() => import("@/components/home/features/FeaturesBanner").then((m) => m.FeaturesBanner), { ssr: true });
const Certificationssection = dynamic(() => import("@/components/home/certifications/Certificationssection").then((m) => m.Certificationssection), { ssr: true });
const FaqSection = dynamic(() => import("@/components/home/FaqSection").then((m) => m.FaqSection), { ssr: true });
const OurStory = dynamic(() => import("@/components/home/OurStory").then((m) => m.OurStory), { ssr: true });

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Tashafy - Home",
  description: "Home page of Tashafy",
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const { t } = getTranslations(locale);
  const { labels } = getNavAndFooterLabels(t);
  const services = getOurServices(t, locale);
  const partners = getOurPartners(t);
  const features = getFeatures(t);
  const certifications = getCertifications(t);
  const faqItems = getFaqItems(t);
  const ourStoryStats = getOurStoryStats(t);
  const whyChooseFeatures = getWhyChooseFeatures(t);
  const whyChooseStats = getWhyChooseStats(t);
  const articles = getArticles(t);
  const programs = getPrograms(t);
  const startJourneySteps = getStartJourneySteps(t);

  return (
    <main className="flex flex-col items-center">
      <MainSection
        locale={locale}
        labels={labels}
        motto={t("hero.motto")}
        heading={t("hero.heading")}
        searchPlaceholder={t("nav.searchPlaceholder")}
        loadingLabel={t("common.loading")}
      />
      <StartJourneySection
        locale={locale}
        title={t("recoveryJourney.title")}
        subtitle={t("recoveryJourney.subtitle")}
        steps={startJourneySteps}
        ctaTitle={t("recoveryJourney.cta.title")}
        ctaSubtitle={t("recoveryJourney.cta.subtitle")}
        ctaButtonLabel={t("recoveryJourney.cta.button")}
        ctaButtonHref="https://wa.me/1234567890"
      />
      <ServiceSection
        locale={locale}
        title={t("services.title")}
        titleHighlight={t("services.titleHighlight")}
        subtitle={t("services.subtitle")}
        services={services}
        learnMoreLabel={t("services.learnMore")}
      />
      <ProgramsSection
        locale={locale}
        title={t("programs.title")}
        subtitle={t("programs.subtitle")}
        programs={programs}
        bookLabel={t("programs.bookLabel")}
        bestSellerLabel={t("programs.bestSeller")}
      />
      <OurPartners locale={locale} title={t("partners.title")} subtitle={t("partners.subtitle")} partners={partners} />
      <WhyChooseSection
        locale={locale}
        title={t("whyChoose.title")}
        subtitle={t("whyChoose.subtitle")}
        features={whyChooseFeatures}
        stats={whyChooseStats}
        ctaPrimary={t("whyChoose.ctaPrimary")}
        ctaSecondary={t("whyChoose.ctaSecondary")}
        ctaPrimaryHref={`/${locale}`}
        ctaSecondaryHref={`/${locale}`}
      />
      <FeaturesBanner locale={locale} features={features} />
      <Certificationssection
        locale={locale}
        title={t("certifications.title")}
        titleHighlight={t("certifications.titleHighlight")}
        subtitle={t("certifications.subtitle")}
        certifications={certifications}
      />
      <FaqSection locale={locale} title={t("faq.title")} intro={t("faq.intro")} items={faqItems} />
      <LatestArticlesSection
        locale={locale}
        title={t("articles.title")}
        subtitle={t("articles.subtitle")}
        viewAllLabel={t("articles.viewAll")}
        viewAllHref={`/${locale}/blog`}
        readMoreLabel={t("articles.readMore")}
        articles={articles}
      />
      <OurStory locale={locale} title={t("ourStory.title")} subtitle={t("ourStory.subtitle")} stats={ourStoryStats} />
    </main>
  );
}
