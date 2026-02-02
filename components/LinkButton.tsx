import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium transition",
        variant === "primary" &&
          "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        variant === "outline" &&
          "border border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-text)] hover:bg-[var(--chip-border)] dark:border-[var(--chip-border)]",
        variant === "ghost" &&
          "text-[var(--muted)] hover:text-[var(--accent)] dark:text-[var(--muted)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
