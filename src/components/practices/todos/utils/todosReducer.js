import { localSet } from "./localStorage";

export default function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: action.id,
        status: action.status,
        title: action.title,
        createdAt: action.createdAt,
      };
      const updatedTodos = [...todos, newTodo];

      localSet("todoList", updatedTodos);
      return updatedTodos;
    }

    case "changed": {
      return;
    }

    case "deleted": {
      const updatedTodos = todos.filter((todo) => todo.id !== action.id);
      localSet("todoList", updatedTodos);
      return updatedTodos;
    }

    case "cleared": {
      const updatedTodos = [];
      localSet("todoList", updatedTodos);
    //   console.log(updatedTodos);
      return updatedTodos;
    }
  }
}

// const newTodoHandler = (e) => {
//   if (e.key !== "Enter" || e.shiftKey) return;
//   e.preventDefault();
//   if (!newTodoInputValue.trim()) return;
//   const newTodo = newTodoGenerator();
//   const newTodosList = [...todos, newTodo];

//   setTodos(newTodosList);
//   localSet("todoList", newTodosList);
//   setNewTodoInputValue("");
//   console.log(newTodosList);
// };

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

// const statusToggleHandler = (todoId) => {
//   const upadtedTodos = todos.map((todoItem) =>
//     todoItem.id === todoId
//       ? { ...todoItem, status: !todoItem.status }
//       : todoItem,
//   );
//   setTodos(upadtedTodos);
//   localSet("todoList", upadtedTodos);
// };

// const deleteTodoHandler = (todoId) => {
//   const updatedTodos = todos.filter((todoItem) => todoItem.id !== todoId);
//   setTodos(updatedTodos);
//   localSet("todoList", updatedTodos);
// };

// const clearAllTodoHandler = () => {
//   setTodos([]);
//   setSearchQuery("");
//   localSet("todoList", []);
// };
