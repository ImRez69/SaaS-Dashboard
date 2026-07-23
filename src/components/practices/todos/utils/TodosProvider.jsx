import { useReducer } from "react";
import { TodosContex, TodosDispatchContex } from "./TodosContext";
import todosReducer from "./todosReducer";

const todosInit = (initialTodos) => {
  const savedTodos = JSON.parse(localStorage.getItem("todoList"));
  return savedTodos ? savedTodos : initialTodos;
};

export default function TodosProvider({ children }) {
  const [todos, todosDispatch] = useReducer(todosReducer, [], todosInit);

  return (
    <TodosContex value={todos}>
      <TodosDispatchContex value={todosDispatch}>
        {children}
      </TodosDispatchContex>
    </TodosContex>
  );
}
