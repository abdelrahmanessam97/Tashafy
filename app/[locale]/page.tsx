import { Metadata } from "next";
import MainSection from "@/components/home/MainSection";
import { getTranslations } from "@/lib/localization/i18n-server";
import { getNavAndFooterLabels } from "@/data/global";

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

  return (
    <main className="flex flex-col items-center  ">
      <MainSection locale={locale} labels={labels} motto={t("hero.motto")} heading={t("hero.heading")} searchPlaceholder={t("nav.searchPlaceholder")} loadingLabel={t("common.loading")} />
    </main>
  );
}
