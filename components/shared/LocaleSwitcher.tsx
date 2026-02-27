import Link from "next/link";
import { LOCALES } from "@/lib/localization/i18n-config";

type LocaleSwitcherProps = {
  locale: string;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  return (
    <nav className="flex gap-2" aria-label="Switch language">
      {LOCALES.map((code) => (
        <Link key={code} href={`/${code}`} className={locale === code ? "font-semibold underline" : "text-muted-foreground hover:underline"}>
          {code === "en" ? "En" : "Ar"}
        </Link>
      ))}
    </nav>
  );
}
