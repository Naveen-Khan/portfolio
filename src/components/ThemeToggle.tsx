import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

type Theme = "dark" | "light";

const getInitial = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("nk_theme") as Theme | null;
  return stored === "light" || stored === "dark" ? stored : "dark";
};

const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("nk_theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/60 text-foreground hover:text-copper-glow hover:border-copper/60 transition-all hover:shadow-[0_0_20px_-5px_hsl(var(--copper-glow)/0.7)]"
      style={{ background: "linear-gradient(135deg, hsl(var(--glass-bg) / 0.65), hsl(var(--secondary) / 0.4))" }}
    >
      {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
