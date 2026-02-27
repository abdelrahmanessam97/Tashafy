import Link from "next/link";
import { getTranslations } from "@/lib/localization/i18n-server";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const { t } = getTranslations(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 font-sans dark:bg-black">
      <LocaleSwitcher locale={locale} />
      <h1 className="text-2xl font-semibold">
        {t("hello")} — {t("welcome")}
      </h1>
      <Button asChild>
        <Link href={`/${locale}/users`}>{t("goToUsers")}</Link>
      </Button>
    </div>
  );
}
