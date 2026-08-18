import OverviewIcon from "@mui/icons-material/GridViewOutlined";
import UserManagementIcon from "@mui/icons-material/PeopleAltOutlined";
import ProductsIcon from "@mui/icons-material/CategoryOutlined";
import PracticesIcon from "@mui/icons-material/CodeRounded";
import TodosIcon from "@mui/icons-material/ChecklistRtlRounded";

import OverviewPage from "../pages/Overview";
import UserManagementPage from "../pages/UserManagement";
import ProductsPage from "../pages/Products";
import PracticesPage from "../pages/Practices";
import TodosPage from "../components/practices/todos/Todos";

export const sidebarListItems = [
  {
    id: "overview",
    title: "نمای کلی",
    icon: <OverviewIcon />,
    page: <OverviewPage />,
  },
  {
    id: "user-managementIcon",
    title: "مدریت کارمندان",
    icon: <UserManagementIcon />,
    page: <UserManagementPage />,
  },
  {
    id: "products",
    title: "محصولات",
    icon: <ProductsIcon />,
    page: <ProductsPage />,
  },
  {
    id: "practices",
    title: "تمرین ها",
    icon: <PracticesIcon />,
    page: <PracticesPage />,
  },
  {
    id: "todos",
    title: "لیست کار ها",
    icon: <TodosIcon />,
    page: <TodosPage />,
  },
] as const;
