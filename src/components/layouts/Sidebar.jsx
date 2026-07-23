import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { sidebarListItems } from "../../data/SidebarData";
import Logo from "../../assets/react.svg";
import ThemeToggle from "../ui/ThemeToggle";
import Avatar from "../ui/avatar";
import ToggleSidebar from "../ui/ToggleSidebar";

export default function Sidebar({ activeId, onSetStatus }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-surface border-border sticky top-0 flex h-screen w-64 flex-col gap-0.5 border-l">
      <div className="border-border flex h-16 items-center border-b px-2">
        <img
          src={Logo}
          alt={"SaaS Logo"}
          className="w-1/6 cursor-pointer transition-[opacity,rotate] hover:rotate-45 hover:opacity-60"
        />
        <h4 className="word-spacing-hover-anime w-5/6 cursor-pointer text-center transition-all hover:opacity-60">
          داشبورد SaaS
        </h4>
      </div>

      <nav className="flex-1">
        <ul>
          {sidebarListItems.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              status={item.id === activeId}
              onSetStatus={onSetStatus}
              sidebarIsOpen={isOpen}
            />
          ))}
        </ul>
      </nav>
      <div className="border-border flex items-center justify-between border-t p-4">
        <Avatar
          src="https://i.pravatar.cc/150?img=50"
          alt={"ممد قلی"}
          onlyImage
        />

        <div className="flex gap-2">
          <ThemeToggle />
          <ToggleSidebar
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </aside>
  );
}

function ListItem({ item, status, onSetStatus, sidebarIsOpen }) {
  return (
    <li
      className={twMerge(
        "flex cursor-pointer items-center gap-3 p-3 text-lg", // 1. Base & Layout Style
        "text-muted border-border w-full border-b font-semibold", // 2. Color, Border & Appearance
        "", // 3. Responsive & Dark Mode Style
        "hover:text-foreground hover:bg-muted/20 group", // 4. Interaction Style
        "transition-[background-color,color] duration-200", // 5. Animation Style
        [status && "text-foreground hover:text-foreground-h bg-muted/10"], // 6. Conditional Styles
      )}
      onClick={() => onSetStatus(item.id)}
    >
      <span
        className={twMerge(
          "", // Responsive & Dark Mode Style
          "group-hover:scale-120 group-hover:rotate-5", // Interaction Style
          "transition-transform", // Animation Style
          [status && "rotate-0"], // Conditional Styles
        )}
      >
        {item.icon}
      </span>
      {item.title}
    </li>
  );
}
