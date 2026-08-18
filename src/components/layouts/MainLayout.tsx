import TodosProvider from "../practices/todos/utils/TodosProvider";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import type { ReactNode } from "react";
import type { SidebarListsId, OnChangePage } from "../../types/sidebar";

interface MainLayoutProps {
  children: ReactNode;
  activePageId: SidebarListsId;
  onChangePage: OnChangePage;
}

export default function MainLayout({
  children,
  activePageId,
  onChangePage,
}: MainLayoutProps) {
  return (
    <TodosProvider>
      <div className="bg-background text-foreground flex min-h-screen justify-between">
        <Sidebar activePageId={activePageId} onChangePage={onChangePage} />
        <div className="flex flex-1 flex-col">
          <Topbar activePageId={activePageId} />
          <main className="flex-1 p-6 max-md:p-3">{children}</main>
        </div>
      </div>
    </TodosProvider>
  );
}
