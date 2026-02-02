import { cn } from "@/lib/utils";

export function Tag({
  children,
  active,
  className
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium",
        "border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-text)] transition hover:bg-[var(--chip-border)]",
        className
      )}
    >
      {children}
    </span>
  );
}
