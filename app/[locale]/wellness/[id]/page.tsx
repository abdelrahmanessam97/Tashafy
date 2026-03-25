import { getTranslations } from "@/lib/localization/i18n-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tashafy - Wellness Details",
  description: "Wellness details page of Tashafy",
};

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

const WellnessDetailsPage = async ({ params }: Props) => {
  const { locale, id } = await params;
  const { t } = getTranslations(locale);
  return (
    <div>
      <h1>Wellness Details Page {id}</h1>
    </div>
  );
};

export default WellnessDetailsPage;
