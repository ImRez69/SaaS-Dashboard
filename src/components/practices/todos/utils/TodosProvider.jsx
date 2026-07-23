import { useReducer } from "react";
import { TodosContext, TodosDispatchContext } from "./TodosContext";
import todosReducer from "./todosReducer";

const todosInit = (initialTodos) => {
  const savedTodos = JSON.parse(localStorage.getItem("todoList"));
  return savedTodos ? savedTodos : initialTodos;
};

export default function TodosProvider({ children }) {
  const [todos, todosDispatch] = useReducer(todosReducer, [], todosInit);

  return (
    <TodosContext value={todos}>
      <TodosDispatchContext value={todosDispatch}>
        {children}
      </TodosDispatchContext>
    </TodosContext>
  );
}
