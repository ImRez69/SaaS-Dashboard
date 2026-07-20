import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { localGet, localSet } from "./localStorage.js";
import TodoList from "./TodoList.jsx";
import { twMerge } from "tailwind-merge";

export default function Todo() {
  const [todos, setTodos] = useState(() => localGet("todoList") || []);
  const [newTodoInputValue, setNewTodoInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTodoGenerator = () => {
    return {
      id: uuidv4(),
      status: false,
      title: newTodoInputValue.trim(),
      createdAt: new Date().toLocaleString(),
    };
  };
  const filteredTodos = todos.filter((todo) => {
    const title = todo.title.toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query);
  });

  const onNewTodoInputChangeHandler = (e) => {
    setNewTodoInputValue(e.target.value);
  };

  const searchTodoInputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const newTodoHandler = (e) => {
    if (e.key !== "Enter" || e.shiftKey) return;
    e.preventDefault();
    if (!newTodoInputValue.trim()) return;
    const newTodo = newTodoGenerator();
    const newTodosList = [...todos, newTodo];

    setTodos(newTodosList);
    localSet("todoList", newTodosList);
    setNewTodoInputValue("");
    console.log(newTodosList);
  };

  const editTodoTitleHandler = (todoId, newTitleValue) => {
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === todoId
        ? {
            ...todoItem,
            title: newTitleValue,
            createdAt: new Date().toLocaleString(),
          }
        : todoItem,
    );
    setTodos(updatedTodos);
    localSet("todoList", updatedTodos);
  };

  const deleteTodoHandler = (todoId) => {
    // const updatedTodos = todos.flatMap((todoItem) => {
    //   if (todoItem.id === todoId) todoItem = []; // If id matched that todo will be removed from updatedTodos);
    //   return todoItem;
    // });
    const updatedTodos = todos.filter((todoItem) => todoItem.id !== todoId);
    setTodos(updatedTodos);
    localSet("todoList", updatedTodos);
  };

  const clearAllTodoHandler = () => {
    setTodos([]);
    setSearchQuery("");
    localSet("todoList", []);
  };

  const statusToggleHandler = (todoId) => {
    const upadtedTodos = todos.map((todoItem) =>
      todoItem.id === todoId
        ? { ...todoItem, status: !todoItem.status }
        : todoItem,
    );
    setTodos(upadtedTodos);
    localSet("todoList", upadtedTodos);
  };

  return (
    <div className="border-border w-full border-b-2 py-5">
      <div
        className={twMerge(
          "flex-center shadow-base mx-auto w-1/2 flex-col rounded-md py-6", // 1. Base & Layout Style
          "border-border border", // 2. Color, Border & Appearance
          "max-md:w-full max-md:rounded-none max-md:border-x-0", // 3. Responsive & Dark Mode Style
          "", // 4. Interaction Style
          "", // 5. Animation Style
          // [conditional && "style", conditional ? "if-true-style" : "if-false-style"], // 6. Conditional Styles
        )}
      >
        <h3 className="mt-0 font-bold">TO DO APP</h3>

        <textarea
          type="text"
          placeholder={`What needs to be done today?\n[Enter for add | Shift+Enter for next line]\nHeight of field automatic change`}
          className="border-border mb-4 field-sizing-content min-h-28 w-7/8 rounded-xl border p-4"
          value={newTodoInputValue}
          onChange={onNewTodoInputChangeHandler}
          onKeyDown={newTodoHandler}
        ></textarea>
        <input
          id="todo-search"
          type="text"
          placeholder="Search in Your Todos"
          className={`border-border w-full border-y py-3 text-center ${todos.length <= 0 ? "hidden" : ""}`}
          value={searchQuery}
          onChange={searchTodoInputHandler}
        />

        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            statusToggle={statusToggleHandler}
            editTodoTitle={editTodoTitleHandler}
            deleteTodo={deleteTodoHandler}
            clearAllTodo={clearAllTodoHandler}
          />
        ) : (
          <p className="word-spacing-hover-anime text-foreground/50">
            Items Not Found
          </p>
        )}
      </div>
    </div>
  );
}
