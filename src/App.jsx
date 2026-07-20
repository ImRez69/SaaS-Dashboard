import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { sidebarListItems } from "./data/SidebarData";
import "./App.css";

function App() {
  const [activeId, setActiveId] = useState(() => {
    return JSON.parse(localStorage.getItem("activePageId")) || 1;
  });

  const statusHandle = (listId) => {
    setActiveId(listId);
    localStorage.setItem("activePageId", JSON.stringify(listId));
  };

  return (
    <>
      <MainLayout activeId={activeId} onSetStatus={statusHandle}>
        {sidebarListItems.find((list) => list.id === activeId).page}
      </MainLayout>
    </>
  );
}

export default App;
