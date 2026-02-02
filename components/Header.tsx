import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/content/data/profile";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl dark:border-[var(--border)] dark:bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold text-[var(--text)] dark:text-[var(--text)]">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex dark:text-[var(--muted)]">
          <Link href="/" className="transition hover:text-[var(--accent)]">
            {t("home")}
          </Link>
          <Link href="/projects" className="transition hover:text-[var(--accent)]">
            {t("projects")}
          </Link>
          <Link href="/resume" className="transition hover:text-[var(--accent)]">
            {t("resume")}
          </Link>
          <Link href="/contact" className="transition hover:text-[var(--accent)]">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
