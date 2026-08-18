import { useState } from "react";
import ThemeProvider from "./utils/ThemeProvider";
import MainLayout from "./components/layouts/MainLayout";
import { sidebarListItems } from "./data/SidebarData";
import "./App.css";
import type { SidebarListsId } from "./types/sidebar";

function App() {
  const [activePageId, setActivePageId] = useState(() => {
    const savedActiveId = localStorage.getItem("activePageId");
    return savedActiveId ? JSON.parse(savedActiveId) : "overview";
  });

  const handleChangePage = (listId: SidebarListsId) => {
    setActivePageId(listId);
    localStorage.setItem("activePageId", JSON.stringify(listId));
  };

  return (
    <ThemeProvider>
      <MainLayout activePageId={activePageId} onChangePage={handleChangePage}>
        {sidebarListItems?.find((list) => list.id === activePageId)?.page}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
