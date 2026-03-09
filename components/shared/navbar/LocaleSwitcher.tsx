"use client";

import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/lib/localization/i18n-config";

type LocaleSwitcherProps = {
  locale: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export function LocaleSwitcher({ locale, triggerClassName, contentClassName }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const isRtl = locale === "ar";

  const getLocalizedPath = (newLocale: string) => {
    if (!pathname.startsWith(`/${locale}`)) return `/${newLocale}`;
    return pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
  };

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = getLocalizedPath(newLocale);
    window.location.assign(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("gap-1.5 text-white hover:bg-white/10 hover:text-white cursor-pointer", triggerClassName)}>
          {locale === "ar" ? "Ar" : "En"}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isRtl ? "start" : "end"} className={cn(" border-white/10 bg-[#1A1D21] text-white cursor-pointer", contentClassName)}>
        {LOCALES.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLocaleChange(code)}
            className={cn("cursor-pointer my-1 focus:bg-white/10 focus:text-white", code === locale && "bg-white/10 font-medium")}
            disabled={code === locale}
          >
            {code === "en" ? "English" : "العربية"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
