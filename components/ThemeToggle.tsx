"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
      className="h-9 w-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-[var(--text)]"
        aria-label="Toggle theme"
      />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)] dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-[var(--text)]"
      aria-label="Toggle theme"
      type="button"
    >
      {currentTheme === "dark" ? "☾" : "☀"}
    </button>
  );
}
