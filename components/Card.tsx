import { cn } from "@/lib/utils";

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition backdrop-blur hover:-translate-y-0.5 hover:shadow-md dark:border-[var(--border)] dark:bg-[var(--surface)]",
        className
      )}
    >
      {children}
    </div>
  );
}
