import { useReducer, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList.jsx";
import todosReducer from "./utils/todosReducer";

const todosInit = (initialTodos) => {
  const savedTodos = JSON.parse(localStorage.getItem("todoList"));
  return savedTodos ? savedTodos : initialTodos;
};

export default function Todos() {
  const [todos, todosDispatch] = useReducer(todosReducer, [], todosInit);
  const [newTodoInputValue, setNewTodoInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const title = todo.title.toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query);
  });

  const handleNewTodoInputChange = (e) => {
    setNewTodoInputValue(e.target.value);
  };

  const searchTodoInputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddTodo = (e) => {
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

  const handleDeleteTodo = (todoId) => {
    todosDispatch({
      type: "deleted",
      id: todoId,
    });
  };

  const handleClearAllTodo = () => {
    todosDispatch({
      type: "cleared",
    });

    setSearchQuery("");
  };

  const handleChangeTodoTitle = (todoId, newTitleValue) => {
    todosDispatch({
      type: "titleChanged",
      id: todoId,
      title: newTitleValue,
    });
  };

  const handleStatusToggle = (todoId) => {
    todosDispatch({
      type: "statusToggled",
      id: todoId,
    });
  };

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
        <h3 className="word-spacing-hover-anime mt-0 mb-4 font-bold">
          TO DO APP
        </h3>

        <textarea
          type="text"
          placeholder={`What needs to be done today?\n[Enter for add | Shift+Enter for next line]\nHeight of field automatic change`}
          className="border-border mb-4 field-sizing-content min-h-28 w-7/8 rounded-xl border p-4"
          value={newTodoInputValue}
          onChange={handleNewTodoInputChange}
          onKeyDown={handleAddTodo}
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
            onStatusToggle={handleStatusToggle}
            onChangeTodo={handleChangeTodoTitle}
            onDeleteTodo={handleDeleteTodo}
            onClearAllTodo={handleClearAllTodo}
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
