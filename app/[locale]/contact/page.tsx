import { getTranslations } from "next-intl/server";
import { profile } from "@/content/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCard } from "@/components/ContactCard";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "meta.contact" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description")
    }
  };
}

export default async function ContactPage({
  params
}: {
  params: { locale: "en" | "zh" };
}) {
  const t = await getTranslations("contact");
  const labels = {
    reachOut: t("reachOut"),
    links: t("links"),
    copyEmail: t("copyEmail"),
    copied: t("copied"),
    location: t("locationLabel"),
    email: t("emailLabel"),
    phone: t("phoneLabel"),
    github: t("githubLabel"),
    linkedin: t("linkedinLabel")
  };

  return (
    <div className="space-y-10 pt-12 pb-12">
      <SectionHeading title={t("title")} description={t("subtitle")} size="lg" />
      <div className="mx-auto max-w-5xl">
        <ContactCard
          labels={labels}
          location={profile.location[params.locale]}
          email={profile.email}
          phone={profile.phone}
          github={profile.social.github}
          linkedin={profile.social.linkedin}
          ctaEmail={t("ctaEmail")}
        />
      </div>
    </div>
  );
}
