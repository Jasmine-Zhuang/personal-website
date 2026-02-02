import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition",
        variant === "primary" &&
          "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        variant === "outline" &&
          "border border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-text)] hover:bg-[var(--chip-border)] dark:border-[var(--chip-border)]",
        variant === "ghost" &&
          "text-[var(--muted)] hover:text-[var(--accent)] dark:text-[var(--muted)]",
        className
      )}
      {...props}
    />
  );
}
