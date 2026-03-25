import MainDetailsSection from "@/components/rehabilitation/mainDetailsSection/MainDetailsSection";
import { getNavAndFooterLabels } from "@/data/global";
import { getRehabilitationCenterHeroDetail } from "@/data/rehabilitation";
import { getTranslations } from "@/lib/localization/i18n-server";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export const metadata: Metadata = {
  title: "Tashafy - Rehabilitation Details",
  description: "Rehabilitation details page of Tashafy",
};

export default async function RehabilitationDetailsPage({ params }: Props) {
  const { locale, id } = await params;
  const { t } = getTranslations(locale);
  const hero = getRehabilitationCenterHeroDetail(id, t);
  if (!hero) notFound();

  const { labels } = getNavAndFooterLabels(t);

  return (
    <main className="flex flex-col items-center">
      <MainDetailsSection
        locale={locale}
        labels={labels}
        searchPlaceholder={t("nav.searchPlaceholder")}
        loadingLabel={t("common.loading")}
        slides={hero.slides}
        centerName={hero.centerName}
        badgeLabel={hero.badgeLabel}
        location={hero.location}
        rating={hero.rating}
        reviewsLabel={hero.reviewsLabel}
      />
    </main>
  );
}
