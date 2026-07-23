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
    id: 1,
    title: "نمای کلی",
    icon: <OverviewIcon />,
    page: <OverviewPage />,
  },
  {
    id: 2,
    title: "مدریت کارمندان",
    icon: <UserManagementIcon />,
    page: <UserManagementPage />,
  },
  {
    id: 3,
    title: "محصولات",
    icon: <ProductsIcon />,
    page: <ProductsPage />,
  },
  {
    id: 4,
    title: "تمرین ها",
    icon: <PracticesIcon />,
    page: <PracticesPage />,
  },
  {
    id: 5,
    title: "لیست کار ها",
    icon: <TodosIcon />,
    page: <TodosPage />,
  },
];
