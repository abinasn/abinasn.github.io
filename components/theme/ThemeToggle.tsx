import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme } from "./useTheme";
import type { Theme } from "@/lib/theme";

const options: { value: Theme; label: string; Icon: LucideIcon }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="bg-chip flex items-center gap-0.5 rounded-full p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`focus-visible:outline-accent flex cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              compact ? "h-6 w-6" : "h-7 w-7"
            } ${active ? "bg-card text-ink" : "text-ink-muted hover:text-ink"}`}
          >
            <Icon size={compact ? 12 : 14} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
