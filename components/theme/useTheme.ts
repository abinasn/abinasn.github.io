import { useSyncExternalStore } from "react";
import {
  getResolvedTheme,
  getServerResolvedTheme,
  getServerTheme,
  getTheme,
  setTheme,
  subscribeTheme,
} from "@/lib/theme";

export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const resolved = useSyncExternalStore(
    subscribeTheme,
    getResolvedTheme,
    getServerResolvedTheme,
  );

  return { theme, resolved, setTheme };
}
