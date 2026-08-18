import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sidebarListItems } from "../../data/SidebarData";
import Logo from "../../assets/react.svg";
import ThemeToggle from "../ui/ThemeToggle";
import Avatar from "../ui/Avatar";
import SidebarIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Button from "../ui/Button";

import type {
  SidebarListItem,
  SidebarListsId,
  OnChangePage,
} from "../../types/sidebar";

interface SidebarProps {
  activePageId: SidebarListsId;
  onChangePage: OnChangePage;
}

export default function Sidebar({ activePageId, onChangePage }: SidebarProps) {
  const [sideBarStatus, setSideBarStatus] = useState<"open" | "close">(() => {
    const savedSideBarStatus = localStorage.getItem("sideBarStatus");
    return savedSideBarStatus ? JSON.parse(savedSideBarStatus) : "open";
  });

  const isOpen = sideBarStatus === "open";

  useEffect(() => {
    localStorage.setItem("sideBarStatus", JSON.stringify(sideBarStatus));
  }, [sideBarStatus]);

  return (
    <aside
      className={twMerge(
        "bg-surface border-border sticky top-0 flex h-screen min-w-12 flex-col gap-0.5 overflow-hidden border-l transition-[width] duration-500",
        isOpen ? "w-64" : "w-12",
        "max-lg:w-12 max-md:w-12",
      )}
    >
      <div className="border-border flex min-h-16 items-center border-b px-2">
        <img
          src={Logo}
          alt={"SaaS Logo"}
          className="w-7 cursor-pointer transition-[opacity,rotate,width] hover:rotate-45 hover:opacity-60"
        />

        <h4
          className={twMerge(
            "word-spacing-hover-anime w-5/6 cursor-pointer text-center whitespace-nowrap opacity-100 transition-all hover:opacity-60",
            isOpen ? "" : "hidden",
            "max-lg:opacity-0 max-md:opacity-0",
          )}
        >
          داشبورد SaaS
        </h4>
      </div>

      <nav className="flex-1">
        <ul>
          {sidebarListItems.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              status={item.id === activePageId}
              onChangePage={onChangePage}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </nav>

      <div
        className={twMerge(
          "border-border flex items-center justify-between border-t p-4",
          isOpen ? "" : "justify-center",
          "max-md:justify-center",
        )}
      >
        <div
          className={twMerge(
            "opacity-100 transition-opacity",
            isOpen ? "" : "hidden",
            "max-md:opacity-0",
          )}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=50"
            alt={"ممد قلی"}
            onlyImage
          />
        </div>

        <div className="flex gap-2">
          <div className={isOpen ? "" : "hidden"}>
            <ThemeToggle />
          </div>

          <Button
            hover={false}
            border={false}
            bg={false}
            onClick={() => {
              setSideBarStatus((prev) => (prev === "open" ? "close" : "open"));
            }}
            customClassName={"max-md:hidden"}
          >
            <SidebarIcon
              sx={{
                transition: "transform 0.35s ease-in-out",
                transform: isOpen ? "" : "rotate(-180deg)",
              }}
            />
          </Button>
        </div>
      </div>
    </aside>
  );
}

interface ListItemProps {
  item: SidebarListItem;
  status: boolean;
  onChangePage: OnChangePage;
  isOpen: boolean;
}

function ListItem({ item, status, onChangePage, isOpen }: ListItemProps) {
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
      onClick={() => onChangePage(item.id)}
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
          "opacity-100 transition-opacity",
          isOpen ? "" : "hidden",
        )}
      >
        {item.title}
      </span>
    </li>
  );
}
