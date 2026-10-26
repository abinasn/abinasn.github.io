export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "system";

const DARK_QUERY = "(prefers-color-scheme: dark)";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function systemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? systemTheme() : theme;
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.dataset.theme = resolved;
}


const listeners = new Set<() => void>();
let watchingSystem = false;

function emit() {
  for (const listener of listeners) listener();
}

function watchSystem() {
  if (watchingSystem) return;
  watchingSystem = true;

  window.matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (getTheme() !== "system") return;
    applyTheme(systemTheme());
    emit();
  });
}

export function subscribeTheme(onChange: () => void) {
  watchSystem();
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export function getTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function getResolvedTheme(): ResolvedTheme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export const getServerTheme = () => DEFAULT_THEME;
export const getServerResolvedTheme = (): ResolvedTheme => "light";

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
  }
  applyTheme(resolveTheme(theme));
  emit();
}
