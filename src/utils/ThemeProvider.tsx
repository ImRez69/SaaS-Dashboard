import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isLight, setIslight] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : false;
  });

  function toggleTheme() {
    const root = document.documentElement;
    const nextThemeIsLight = !isLight;

    root.classList.add("disable-transitions");

    if (nextThemeIsLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    requestAnimationFrame(() => {
      root.classList.remove("disable-transitions");
    });

    setIslight(nextThemeIsLight);
  }

  return (
    <ThemeContext value={{ isLight, toggleTheme }}>{children}</ThemeContext>
  );
}
