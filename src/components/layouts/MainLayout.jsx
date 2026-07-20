import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children, activeId, onSetStatus }) {
  return (
    <div className="bg-background text-foreground flex min-h-screen justify-between">
      <Sidebar activeId={activeId} onSetStatus={onSetStatus} />
      <div className="flex flex-1 flex-col">
        <Topbar activeId={activeId}/>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
