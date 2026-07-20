import { useState } from "react";
import Button from "./Button";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";

export default function ThemeToggle() {
  const [lightThemeStatus, setLightThemeStatus] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const root = document.documentElement;

  const toggleTheme = () => {
    const nextIsLight = !lightThemeStatus;

    setLightThemeStatus(nextIsLight);

    root.classList.add("disable-transitions");

    if (nextIsLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    requestAnimationFrame(() => {
      root.classList.remove("disable-transitions");
    });
  };

  return (
    <Button onClick={toggleTheme} hover={false}>
      {lightThemeStatus ? (
        <DarkModeIcon
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(25deg) scale(1.1)",
            },
          }}
        />
      ) : (
        <LightModeIcon
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(25deg) scale(1.1)",
            },
          }}
        />
      )}
    </Button>
  );
}
