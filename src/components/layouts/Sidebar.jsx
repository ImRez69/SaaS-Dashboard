import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { sidebarListItems } from "../../data/SidebarData";
import Logo from "../../assets/react.svg";
import ThemeToggle from "../ui/ThemeToggle";
import Avatar from "../ui/avatar";
import SidebarIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Button from "../ui/Button";
export default function Sidebar({ activeId, onSetStatus }) {
  const [isOpen, setIsOpen] = useState(
    () => JSON.parse(localStorage.getItem("sideBarIsOpen")) || true,
  );

  return (
    <aside
      className={twMerge(
        "bg-surface border-border sticky top-0 flex h-screen w-64 flex-col gap-0.5 overflow-hidden border-l transition-[width] duration-500",
        isOpen || "w-12",
      )}
    >
      <div className="border-border flex h-16 items-center border-b px-2">
        <img
          src={Logo}
          alt={"SaaS Logo"}
          className="w-7 cursor-pointer transition-[opacity,rotate,width] hover:rotate-45 hover:opacity-60"
        />

        <h4
          className={twMerge(
            "word-spacing-hover-anime opcaity-1 w-5/6 cursor-pointer text-center whitespace-nowrap transition-all hover:opacity-60",
            isOpen || "opacity-0",
          )}
        >
          داشبورد SaaS
        </h4>
      </div>

      <nav className={twMerge("flex-1", isOpen && "")}>
        <ul>
          {sidebarListItems.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              status={item.id === activeId}
              onSetStatus={onSetStatus}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </nav>

      <div
        className={twMerge(
          "border-border flex items-center justify-between border-t p-4",
          isOpen || "justify-center",
        )}
      >
        <div
          className={twMerge(
            "opcaity-1 transition-opacity",
            isOpen || "opcaity-0",
          )}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=50"
            alt={"ممد قلی"}
            onlyImage
          />
        </div>

        <div className="flex gap-2">
          <div className={twMerge(isOpen || "hidden")}>
            <ThemeToggle />
          </div>

          <Button
            hover={false}
            border={false}
            bg={false}
            onClick={() => {
              localStorage.setItem("sideBarIsOpen", JSON.stringify(!isOpen));
              setIsOpen((prev) => !prev);
            }}
          >
            <SidebarIcon
              sx={{
                transition: "transform 0.35s ease-in-out",
                transform: isOpen ? "rotate(-180deg)" : "",
              }}
            />
          </Button>
        </div>
      </div>
    </aside>
  );
}

function ListItem({ item, status, onSetStatus, isOpen }) {
  return (
    <li
      className={twMerge(
        "flex cursor-pointer items-center gap-3 p-3 text-lg whitespace-nowrap", // 1. Base & Layout Style
        "text-muted border-border w-full border-b font-semibold", // 2. Color, Border & Appearance
        "", // 3. Responsive & Dark Mode Style
        "hover:text-foreground hover:bg-muted/20 group", // 4. Interaction Style
        "transition-[background-color,color] duration-200", // 5. Animation Style
        [status && "text-foreground hover:text-foreground-h bg-muted/10"],
      )}
      onClick={() => onSetStatus(item.id)}
    >
      <span
        className={twMerge(
          "", // Responsive & Dark Mode Style
          "group-hover:scale-120 group-hover:rotate-5", // Interaction Style
          "transition-transform", // Animation Style
          [status && "rotate-0"],
        )}
      >
        {item.icon}
      </span>

      <span
        className={twMerge(
          "opcaity-1 transition-opacity",
          isOpen || "opacity-0",
        )}
      >
        {item.title}
      </span>
    </li>
  );
}
