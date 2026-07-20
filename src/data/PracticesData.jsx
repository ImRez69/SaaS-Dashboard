import CafeDashboard from "../components/practices/cafeDashboard/CafeDashboard";
import CafeMenu from "../components/practices/cafeMenu/CafeMenu";
import ShoppingCart from "../components/practices/shoppingCart/ShoppingCart";
import Todo from "../components/practices/todo/Todo";

export const initialPractices = [
  {
    id: 1,
    title: "داشبورد کافه",
    description: "یک داشبورد کافه ساده",
    difficulty: "normal",
    jsxElement: <CafeDashboard />,
    jsxString: CafeDashboard,
  },
  {
    id: 2,
    title: "منو کافه",
    description: "یک منو کافه ساده",
    difficulty: "normal",
    jsxElement: <CafeMenu />,
    jsxString: CafeMenu,
  },
  {
    id: 3,
    title: "کارت خرید",
    description: "یک کارت خرید ساده",
    difficulty: "easy",
    jsxElement: <ShoppingCart />,
    jsxString: ShoppingCart,
  },
  {
    id: 4,
    title: "لیست کار ها",
    description: "یک لیست کار های ساده",
    difficulty: "hard",
    jsxElement: <Todo />,
    jsxString: Todo,
  },
];
