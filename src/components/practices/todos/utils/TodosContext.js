import { createContext, useContext } from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function useTodos() {
  return useContext(TodosContext);
}
export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}
