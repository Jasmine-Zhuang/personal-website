import { getTranslations } from "next-intl/server";
import { AnchorButton } from "@/components/AnchorButton";
import { ResumeTimeline } from "@/sections/ResumeTimeline";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "meta.resume" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description")
    }
  };
}

export default async function ResumePage({
  params
}: {
  params: { locale: "en" | "zh" };
}) {
  const t = await getTranslations("resume");

  return (
    <div className="space-y-10 pt-12 pb-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-[var(--text)] dark:text-[var(--text)] md:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)] md:text-base">
            {t("subtitle")}
          </p>
        </div>
        <AnchorButton href="/resume.pdf">
          {t("download")}
        </AnchorButton>
      </div>
      <ResumeTimeline
        locale={params.locale}
        educationLabel={t("education")}
        experienceLabel={t("experience")}
        skillsLabel={t("skills")}
      />
    </div>
  );
}
