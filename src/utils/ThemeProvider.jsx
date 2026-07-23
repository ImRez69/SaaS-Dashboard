import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
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
