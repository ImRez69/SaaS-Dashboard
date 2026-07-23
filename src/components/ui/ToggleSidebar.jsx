import SidebarCloseIcon from "@mui/icons-material/ArrowBackIosRounded";
import SidebarOpenIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "../ui/Button";
import { useState } from "react";

export default function ToggleSidebar({ isOpen, onClick }) {
  return (
    <Button hover={false} onClick={onClick}>
      {isOpen ? (
        <SidebarOpenIcon
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotateY(-180deg)",
            },
          }}
        />
      ) : (
        <SidebarCloseIcon
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotateY(-180deg)",
            },
          }}
        />
      )}
    </Button>
  );
}
