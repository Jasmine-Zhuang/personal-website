import { getTranslations } from "next-intl/server";
import { profile } from "@/content/data/profile";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-[var(--border)] py-8 dark:border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:px-8">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            className="transition hover:text-[var(--accent)]"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            className="transition hover:text-[var(--accent)]"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
