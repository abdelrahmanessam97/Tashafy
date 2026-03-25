import React from "react";
import { Metadata } from "next";
import { getTranslations } from "@/lib/localization/i18n-server";

export const metadata: Metadata = {
  title: "Tashafy - Wellness",
  description: "Wellness page of Tashafy",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WellnessPage({ params }: Props) {
  const { locale } = await params;
  const { t } = getTranslations(locale);
  return <div>WellnessPage</div>;
}
