import { resume } from "@/content/data/resume";
import { Tag } from "@/components/Tag";
import { FadeIn } from "@/components/FadeIn";

interface ResumeTimelineProps {
  locale: "en" | "zh";
  educationLabel: string;
  experienceLabel: string;
  skillsLabel: string;
}

export function ResumeTimeline({
  locale,
  educationLabel,
  experienceLabel,
  skillsLabel
}: ResumeTimelineProps) {
  return (
    <section className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
              {experienceLabel}
            </h3>
            <div className="space-y-8 border-l border-base-200/70 pl-6 dark:border-base-700/70">
              {resume.experience.map((item, index) => (
                <FadeIn key={item.period} delay={index * 0.05}>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-[var(--muted-2)]">
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-[var(--text)] dark:text-[var(--text)]">
                      {item.title[locale]}
                    </h4>
                    <p className="text-sm font-medium text-[var(--muted-2)] dark:text-[var(--muted-2)]">
                      {item.company[locale]}
                    </p>
                    {Array.isArray(item.description[locale]) ? (
                      <ul className="mt-3 max-w-prose list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)]">
                        {item.description[locale].map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)]">
                        {item.description[locale]}
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
              {educationLabel}
            </h3>
            <div className="space-y-8 border-l border-base-200/70 pl-6 dark:border-base-700/70">
              {resume.education.map((item, index) => (
                <FadeIn key={item.period} delay={index * 0.05}>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-[var(--muted-2)]">
                      {item.period}
                    </p>
                    <h4 className="text-lg font-semibold text-[var(--text)] dark:text-[var(--text)]">
                      {item.title[locale]}
                    </h4>
                    <p className="text-sm font-medium text-[var(--muted-2)] dark:text-[var(--muted-2)]">
                      {item.institution[locale]}
                    </p>
                    {Array.isArray(item.description[locale]) ? (
                      <ul className="mt-3 max-w-prose list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)]">
                        {item.description[locale].map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)]">
                        {item.description[locale]}
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 lg:sticky lg:top-24">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
            {skillsLabel}
          </h3>
          <div className="space-y-4">
            {resume.skills.map((skill) => (
              <div key={skill.category[locale]} className="space-y-2">
                <p className="text-sm font-semibold text-[var(--muted)] dark:text-[var(--muted)]">
                  {skill.category[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
