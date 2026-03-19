import type { Metadata } from "next";
import { headers } from "next/headers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { mahoorFont } from "@/lib/fonts/fonts";

export const metadata: Metadata = {
  title: "Tashafy",
  description: "Tashafy is a platform for managing your business.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-next-locale") ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={`${mahoorFont.className} antialiased`} suppressHydrationWarning cz-shortcut-listen="true">
        <main className="">{children}</main>
        <Toaster position={dir === "rtl" ? "top-left" : "top-right"} richColors closeButton />
      </body>
    </html>
  );
}
