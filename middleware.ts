import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/localization/i18n-config";

function getLocaleFromPathname(pathname: string): string | null {
  const segment = pathname.split("/")[1];
  return segment && isValidLocale(segment) ? segment : null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Root: redirect to default locale (optional: use Accept-Language for /ar)
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const prefersAr = acceptLanguage.toLowerCase().includes("ar");
    const locale = prefersAr ? "ar" : DEFAULT_LOCALE;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const locale = getLocaleFromPathname(pathname);

  // Path already has valid locale: forward with x-next-locale header
  if (locale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-locale", locale);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // No locale in path: redirect to default locale prefix
  const newUrl = new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|locales|.*\\..*).*)"],
};
