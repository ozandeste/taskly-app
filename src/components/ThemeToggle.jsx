import { createPortal } from "react-dom";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return createPortal(
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:opacity-80 transition fixed top-4 right-4 z-50 cursor-pointer"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  , document.getElementById("theme-btn"));
}
