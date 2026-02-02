import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";

export async function Highlights() {
  const t = await getTranslations("highlights");
  const highlights = ["reliability", "performance", "cicd", "ai"] as const;
  const iconMap = {
    reliability: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    performance: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a8 8 0 1 0 16 0" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    cicd: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10l2 3-2 3H7l-2-3 2-3z" />
        <path d="M9 10h6" />
        <path d="M12 13v4" />
        <path d="M7 17h10" />
      </svg>
    ),
    ai: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v12" />
        <path d="M8 9v6" />
        <path d="M16 9v6" />
        <rect x="4" y="4" width="16" height="16" rx="3" />
      </svg>
    )
  } as const;

  return (
    <section className="space-y-8">
      <SectionHeading
        title={t("title")}
        description={t("subtitle")}
        className="text-center"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((key, index) => (
          <FadeIn key={key} delay={index * 0.05}>
            <Card className="p-7">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm dark:border-[var(--border)] dark:bg-[var(--surface)]">
                  {iconMap[key]}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)]">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-[var(--muted)]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
