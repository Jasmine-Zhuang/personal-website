import { getTranslations } from "next-intl/server";
import { Hero } from "@/sections/Hero";
import { Highlights } from "@/sections/Highlights";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "meta.home" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description")
    }
  };
}

export default async function HomePage({
  params
}: {
  params: { locale: "en" | "zh" };
}) {
  return (
    <div className="space-y-14 pt-12 pb-12">
      <Hero locale={params.locale} />
      <Highlights />
    </div>
  );
}
