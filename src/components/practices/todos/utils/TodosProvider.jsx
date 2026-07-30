import { useReducer, useEffect, useRef } from "react";
import { TodosContext, TodosDispatchContext } from "./TodosContext";
import todosReducer from "./todosReducer";

const todosInit = (initialTodos) => {
  const savedTodos = JSON.parse(localStorage.getItem("todoList"));
  return savedTodos ? savedTodos : initialTodos;
};

export default function TodosProvider({ children }) {
  const [todos, todosDispatch] = useReducer(todosReducer, [], todosInit);
  const isFirstLoading = useRef(true);

  useEffect(() => {
    if (isFirstLoading.current) {
      isFirstLoading.current = false;
      return;
    }
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext value={todos}>
      <TodosDispatchContext value={todosDispatch}>
        {children}
      </TodosDispatchContext>
    </TodosContext>
  );
}
