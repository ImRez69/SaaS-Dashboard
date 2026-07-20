import { twMerge } from "tailwind-merge";
import Logo from "../../assets/react.svg";
import ThemeToggle from "../ui/ThemeToggle";
import { sidebarListItems } from "../../data/SidebarData";
import Avatar from "../ui/avatar";

export default function Sidebar({ activeId, onSetStatus }) {
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

        <ThemeToggle />
      </div>
    </aside>
  );
}

function ListItem({ item, status, onSetStatus }) {
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
