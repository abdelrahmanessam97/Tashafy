import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/localization/i18n-config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  return <>{children}</>;
}
