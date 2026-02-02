import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { CSSProperties } from "react";
import { profile } from "@/content/data/profile";
import { LinkButton } from "@/components/LinkButton";
import { FadeIn } from "@/components/FadeIn";

export async function Hero({ locale }: { locale: "en" | "zh" }) {
  const t = await getTranslations("hero");
  const facts = t.raw("facts") as Array<{ label: string; value: string }>;
  const heroStyle = {
    ["--hero-overlay" as never]:
      "linear-gradient(120deg, rgba(255,255,255,0.65), rgba(255,255,255,0.2))"
  } as CSSProperties;

  return (
    <section
      className="hero-surface relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--accent-soft)] to-transparent px-6 py-10 shadow-soft dark:border-[var(--border)] dark:from-[var(--accent-soft)] md:px-10 md:py-12"
      style={heroStyle}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-2)]">
              {t("eyebrow")}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-3xl font-semibold text-[var(--text)] dark:text-[var(--text)] md:text-4xl">
              {profile.name}
              <span className="mt-3 block text-lg font-medium text-[var(--muted-2)] dark:text-[var(--muted)] md:text-xl">
                {profile.title[locale]}
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-prose text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)] md:text-base">
              {profile.bio[locale]}
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                >
                  <span className="text-[var(--muted-2)]">{fact.label}</span>
                  <span className="text-[var(--text)]">
                    {fact.value}
                  </span>
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/projects">{t("ctaProjects")}</LinkButton>
              <LinkButton href="/contact" variant="outline">
                {t("ctaContact")}
              </LinkButton>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-hero-glow opacity-40 blur-2xl" />
            <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm backdrop-blur dark:border-[var(--border)] dark:bg-[var(--surface)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={400}
                height={480}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="mt-4 space-y-1 text-sm text-[var(--muted)] dark:text-[var(--muted)]">
                <p>{profile.location[locale]}</p>
                <p>{profile.email}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
