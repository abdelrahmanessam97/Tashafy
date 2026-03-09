"use client";

import { usePathname } from "next/navigation";
import { isValidLocale } from "@/lib/localization/i18n-config";

const LOADING_LABELS: Record<string, string> = {
  en: "Loading...",
  ar: "جاري التحميل...",
};

export function LoadingScreen() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = segment && isValidLocale(segment) ? segment : "en";
  const label = LOADING_LABELS[locale] ?? LOADING_LABELS.en;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background" role="status" aria-live="polite" aria-label="Loading">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-secondary border-t-transparent" aria-hidden />
        <span className="text-sm text-white">{label}</span>
      </div>
    </div>
  );
}
