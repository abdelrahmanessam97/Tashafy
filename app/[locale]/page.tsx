import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainSection from "@/components/home/MainSection";
import { getTranslations } from "@/lib/localization/i18n-server";
import { getNavAndFooterLabels } from "@/data/global";
import { getOurServices } from "@/data/ourServices";
import { getOurStoryStats } from "@/data/ourStory";

const OurService = dynamic(() => import("@/components/home/OurService").then((m) => m.OurService), { ssr: true });
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
  const ourStoryStats = getOurStoryStats(t);

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
      <OurService
        locale={locale}
        title={t("services.title")}
        titleHighlight={t("services.titleHighlight")}
        subtitle={t("services.subtitle")}
        services={services}
        learnMoreLabel={t("services.learnMore")}
      />
      <OurStory locale={locale} title={t("ourStory.title")} subtitle={t("ourStory.subtitle")} stats={ourStoryStats} />
    </main>
  );
}
