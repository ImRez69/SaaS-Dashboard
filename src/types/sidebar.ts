import { sidebarListItems } from "../data/SidebarData";
import type { ReactElement } from "react";

export type OnChangePage = (listId: SidebarListsId) => void;
export type SidebarListsId = (typeof sidebarListItems)[number]["id"];

export interface SidebarListItem {
  id: SidebarListsId;
  title: string;
  icon: ReactElement;
  page: ReactElement;
}
