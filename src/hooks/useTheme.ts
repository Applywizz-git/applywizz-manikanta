import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored ?? getSystemTheme();
  });

  const applyTheme = useCallback((t: Theme) => {
    const html = document.documentElement;
    html.classList.toggle("dark", t === "dark");
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, applyTheme]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
