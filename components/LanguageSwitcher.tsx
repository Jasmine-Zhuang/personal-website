"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const COOKIE_NAME = "NEXT_LOCALE";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    startTransition(() => {
      document.cookie = `${COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000`;
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-medium text-[var(--muted)] shadow-sm dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-[var(--muted)]">
      {locales.map((item) => (
        <button
          key={item}
          onClick={() => switchLocale(item)}
          type="button"
          className={cn(
            "rounded-full px-2.5 py-1 transition",
            item === locale
              ? "bg-[var(--accent)] text-white"
              : "hover:text-[var(--accent)]",
            isPending && "opacity-60"
          )}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
