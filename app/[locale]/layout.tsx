import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/localization/i18n-config";
import { getTranslations } from "@/lib/localization/i18n-server";
import { Footer } from "@/components/shared/footer/Footer";
import { getNavAndFooterLabels } from "@/data/global";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  const { t } = getTranslations(locale);
  const { footerLabels } = getNavAndFooterLabels(t);

  return (
    <>
      {children}
      <Footer locale={locale} labels={footerLabels} />
    </>
  );
}
