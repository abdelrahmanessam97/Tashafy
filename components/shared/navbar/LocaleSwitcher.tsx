"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/lib/localization/i18n-config";
import { LoadingOverlay } from "@/components/shared/loading/LoadingOverlay";

type LocaleSwitcherProps = {
  locale: string;
  triggerClassName?: string;
  contentClassName?: string;
  loadingLabel?: string;
  /** "dark" = hero navbar (light text), "light" = sticky navbar (dark text, white bg) */
  variant?: "dark" | "light";
};

export function LocaleSwitcher({ locale, triggerClassName, contentClassName, loadingLabel, variant = "dark" }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const isRtl = locale === "ar";
  const [isChangingLocale, setIsChangingLocale] = useState(false);

  const getLocalizedPath = (newLocale: string) => {
    if (!pathname.startsWith(`/${locale}`)) return `/${newLocale}`;
    return pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
  };

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = getLocalizedPath(newLocale);
    setIsChangingLocale(true);
    // Allow overlay to paint before full-page redirect
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.location.assign(newPath);
      }, 80);
    });
  };

  const isLight = variant === "light";

  return (
    <>
      <LoadingOverlay open={isChangingLocale} message={loadingLabel} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "gap-1.5 cursor-pointer",
              isLight ? "text-(--text-secondary) hover:bg-black/5 hover:text-(--text-primary)" : "text-white/80 hover:bg-white/10 hover:text-white",
              triggerClassName,
            )}
          >
            {locale === "ar" ? "Ar" : "En"}
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={isRtl ? "start" : "end"}
          className={cn(
            "cursor-pointer",
            isLight ? "border-gray-200 bg-white text-(--text-primary) shadow-md" : "border-white/10 bg-[#1A1D21] text-white",
            contentClassName,
          )}
        >
          {LOCALES.map((code) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLocaleChange(code)}
              className={cn(
                "cursor-pointer my-1",
                isLight ? "focus:bg-gray-100 focus:text-(--text-primary)" : "focus:bg-white/10 focus:text-white",
                code === locale && (isLight ? "bg-gray-100 font-medium text-(--text-primary)" : "bg-white/10 font-medium"),
              )}
              disabled={code === locale || isChangingLocale}
            >
              {code === "en" ? "English" : "العربية"}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
