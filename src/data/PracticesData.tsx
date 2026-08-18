import CafeDashboard from "../components/practices/cafeDashboard/CafeDashboard";
import CafeMenu from "../components/practices/cafeMenu/CafeMenu";
import ShoppingCart from "../components/practices/shoppingCart/ShoppingCart";
import Todos from "../components/practices/todos/Todos";
import CafeDashboardSource from "../components/practices/cafeDashboard/CafeDashboard?raw";
import CafeMenuSource from "../components/practices/cafeMenu/CafeMenu?raw";
import ShoppingCartSource from "../components/practices/shoppingCart/ShoppingCart?raw";
import TodosSource from "../components/practices/todos/Todos?raw";
import type { Practices } from "../types/practice";

export const initialPractices: Practices = [
  {
    id: 1,
    title: "داشبورد کافه",
    description: "یک داشبورد کافه ساده",
    difficulty: "normal",
    jsxElement: <CafeDashboard />,
    jsxString: CafeDashboardSource,
  },
  {
    id: 2,
    title: "منو کافه",
    description: "یک منو کافه ساده",
    difficulty: "normal",
    jsxElement: <CafeMenu />,
    jsxString: CafeMenuSource,
  },
  {
    id: 3,
    title: "کارت خرید",
    description: "یک کارت خرید ساده",
    difficulty: "easy",
    jsxElement: <ShoppingCart />,
    jsxString: ShoppingCartSource,
  },
  {
    id: 4,
    title: "لیست کار ها",
    description: "یک لیست کار های ساده",
    difficulty: "hard",
    jsxElement: <Todos />,
    jsxString: TodosSource,
  },
];
