import { createContext, useContext } from "react";

interface ThemeContextValues {
  isLight: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValues | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
