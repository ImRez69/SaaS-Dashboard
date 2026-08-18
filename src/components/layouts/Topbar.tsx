import { sidebarListItems } from "../../data/SidebarData";
import { useTodos } from "../practices/todos/utils/TodosContext";
import Avatar from "../ui/Avatar";
import SearchBar from "../ui/Search";
import ThemeToggle from "../ui/ThemeToggle";
import type { SidebarListsId } from "../../types/sidebar";

interface TopbarProps {
  activePageId: SidebarListsId;
}

export default function Topbar({ activePageId }: TopbarProps) {
  const activePage = sidebarListItems.find((list) => list.id === activePageId);
  const activeTodos =
    (useTodos() as unknown as { status: boolean }[])?.filter(
      (todo) => todo.status === false,
    ) ?? [];

  return (
    <header className="bg-surface border-border sticky top-0 z-10 flex h-16 items-center justify-between border-b px-6 max-md:px-1.5">
      <div className="flex items-center gap-5">
        <SearchBar />
        <span className="absolute right-60 opacity-50 max-xl:right-35 max-lg:hidden">
          تعداد کارها باقیمانده: <strong> {activeTodos.length}</strong>
        </span>
      </div>

      <h3 className="word-spacing-hover-anime">{activePage?.title}</h3>

      <div className="flex gap-4">
        <Avatar src="https://i.pravatar.cc/150?img=50" alt={"ممد قلی"} />
        <ThemeToggle />
      </div>
    </header>
  );
}
