import { sidebarListItems } from "../../data/SidebarData";
import Avatar from "../ui/avatar";
import Search from "../ui/Search";

export default function Topbar({ activeId }) {
  const activeTab = sidebarListItems.find((list) => list.id === activeId);

  return (
    <header className="bg-surface border-border sticky top-0 z-10 flex h-16 items-center justify-between border-b px-6">
      <Search />
      <h3 className="word-spacing-hover-anime">{activeTab.title}</h3>
      <Avatar src="https://i.pravatar.cc/150?img=50" alt={"ممد قلی"} />
    </header>
  );
}
