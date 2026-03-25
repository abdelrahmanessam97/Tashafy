import { getTranslations } from "@/lib/localization/i18n-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tashafy - Tashafy Programs Details",
  description: "Tashafy programs details page of Tashafy",
};

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

const TashafyProgramsDetailsPage = async ({ params }: Props) => {
  const { locale, id } = await params;
  const { t } = getTranslations(locale);
  return (
    <div>
      <h1>Tashafy Programs Details Page {id}</h1>
    </div>
  );
};

export default TashafyProgramsDetailsPage;
