import { create } from "zustand";

// Read saved theme from localStorage, defaulting to "light"
const getSavedTheme = () => {
  try {
    return localStorage.getItem("chatty-theme") || "light";
  } catch {
    return "light";
  }
};

export const useThemeStore = create((set) => ({
  theme: getSavedTheme(),

  setTheme: (theme) => {
    // Persist to localStorage
    localStorage.setItem("chatty-theme", theme);
    // Apply to <html> element for DaisyUI
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));

// Apply theme immediately on import (before React renders)
document.documentElement.setAttribute("data-theme", getSavedTheme());
