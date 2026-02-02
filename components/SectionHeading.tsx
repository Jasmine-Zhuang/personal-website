import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  size = "md",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const titleClass =
    size === "lg"
      ? "section-title text-3xl font-semibold text-[var(--text)] dark:text-[var(--text)] md:text-4xl"
      : "section-title text-2xl font-semibold text-[var(--text)] dark:text-[var(--text)] md:text-3xl";

  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-2)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={titleClass}>{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] dark:text-[var(--muted)] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
