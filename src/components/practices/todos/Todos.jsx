import { useReducer, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import { localGet } from "./utils/localStorage";
import TodoList from "./TodoList.jsx";
import todosReducer from "./utils/todosReducer";

const initialTodos = localGet("todoList") || [];

export default function Todos() {
  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);
  const [newTodoInputValue, setNewTodoInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

    todosDispatch({
      type: "added",
      id: uuidv4(),
      status: false,
      title: newTodoInputValue.trim(),
      createdAt: new Date().toLocaleString(),
    });

    setNewTodoInputValue("");
  };

  // const editTodoTitleHandler = (todoId, newTitleValue) => {
  //   const updatedTodos = todos.map((todoItem) =>
  //     todoItem.id === todoId
  //       ? {
  //           ...todoItem,
  //           title: newTitleValue,
  //           createdAt: new Date().toLocaleString(),
  //         }
  //       : todoItem,
  //   );
  //   setTodos(updatedTodos);
  //   localSet("todoList", updatedTodos);
  // };

  const deleteTodoHandler = (todoId) => {
    todosDispatch({
      type: "deleted",
      id: todoId,
    });
  };

  const clearAllTodoHandler = () => {
    console.log("sdad");

    todosDispatch({
      type: "cleared",
    });

    setSearchQuery("");
  };

  // const statusToggleHandler = (todoId) => {
  //   const upadtedTodos = todos.map((todoItem) =>
  //     todoItem.id === todoId
  //       ? { ...todoItem, status: !todoItem.status }
  //       : todoItem,
  //   );
  //   setTodos(upadtedTodos);
  //   localSet("todoList", upadtedTodos);
  // };

  return (
    <div className="border-border w-full py-5">
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
          className={`border-border w-full rounded-none border-x-0 border-y py-3 text-center shadow-none ${todos.length <= 0 ? "hidden" : ""} hover:shadow-none`}
          value={searchQuery}
          onChange={searchTodoInputHandler}
        />

        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            // statusToggle={statusToggleHandler}
            // editTodoTitle={editTodoTitleHandler}
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
