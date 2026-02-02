import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted-2)] focus:ring-2 focus:ring-[var(--ring)] dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-[var(--text)]",
        className
      )}
      {...props}
    />
  );
}
