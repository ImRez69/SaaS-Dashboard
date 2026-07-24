import TodosProvider from "../practices/todos/utils/TodosProvider";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children, activeId, onSetStatus }) {
  return (
    <TodosProvider>
      <div className="bg-background text-foreground flex min-h-screen justify-between">
        <Sidebar activeId={activeId} onSetStatus={onSetStatus} />
        <div className="flex flex-1 flex-col">
          <Topbar activeId={activeId} />
          <main className="flex-1 p-6 max-md:p-3">{children}</main>
        </div>
      </div>
    </TodosProvider>
  );
}
