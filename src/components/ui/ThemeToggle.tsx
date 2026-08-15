import { useTheme } from "../../utils/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import Button from "./Button";

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} hover={false}>
      {isLight ? (
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
