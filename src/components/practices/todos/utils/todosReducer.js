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

      return updatedTodos;
    }

    case "titleChanged": {
      const updatedTodos = todos.map((todoItem) =>
        todoItem.id === action.id
          ? {
              ...todoItem,
              title: action.title,
              createdAt: new Date().toLocaleString(),
            }
          : todoItem,
      );

      return updatedTodos;
    }

    case "statusToggled": {
      const updatedTodos = todos.map((todoItem) =>
        todoItem.id === action.id
          ? {
              ...todoItem,
              status: !todoItem.status,
            }
          : todoItem,
      );

      return updatedTodos;
    }

    case "deleted": {
      const updatedTodos = todos.filter((todo) => todo.id !== action.id);

      return updatedTodos;
    }

    case "cleared": {
      const updatedTodos = [];

      return updatedTodos;
    }
  }
}
