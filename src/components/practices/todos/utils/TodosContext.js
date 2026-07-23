import { createContext, useContext } from "react";

export const TodosContex = createContext(null);
export const TodosDispatchContex = createContext(null);

export function useTodos() {
  return useContext(TodosContex);
}
export function useTodosDispatch() {
  return useContext(TodosDispatchContex);
}
