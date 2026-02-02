import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsGrid } from "@/sections/ProjectsGrid";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "meta.projects" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description")
    }
  };
}

export default async function ProjectsPage({
  params
}: {
  params: { locale: "en" | "zh" };
}) {
  const t = await getTranslations("projects");

  return (
    <div className="space-y-10 pt-12 pb-12">
      <SectionHeading title={t("title")} description={t("subtitle")} size="lg" />
      <ProjectsGrid
        locale={params.locale}
        allLabel={t("filterAll")}
        githubLabel={t("github")}
        demoLabel={t("demo")}
      />
    </div>
  );
}
