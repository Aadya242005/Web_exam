import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// ThemeToggle: toggles 'dark' class on <html> and persists choice to localStorage.
// Behavior:
// - On mount, read localStorage 'theme'. If missing, use prefers-color-scheme if available.
// - Apply/remove `dark` class accordingly and persist changes.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // null until initialized on client

  // Initialize theme on mount (safe access to window/localStorage)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        return;
      }

      // Fallback to OS preference
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    } catch (err) {
      // If access to localStorage fails, default to light
      setTheme("light");
    }
  }, []);


  useEffect(() => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  
  if (theme === null) {
    return (
      <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 w-9 h-9" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-800" aria-hidden="true" />
      ) : (
        <Sun size={20} className="text-yellow-400" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
