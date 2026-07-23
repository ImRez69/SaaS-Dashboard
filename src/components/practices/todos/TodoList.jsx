import TodoItems from "./TodoItems";
import Button from "../../ui/Button";

export default function TodoList({
  todos,
  statusToggle,
  editTodoTitle,
  deleteTodo,
  clearAllTodo,
}) {
  return (
    <ul className="divide-border flex-center w-full flex-wrap divide-y-2 divide-dashed">
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo?.id}
            statusToggle={statusToggle}
            editTodoTitle={editTodoTitle}
            deleteTodo={deleteTodo}
          />
        );
      })}

      <Button
        style={`border-border mt-4 gap-2 flex-center  ${todos.length > 0 ? "" : "hidden"}`}
        onClickFunc={clearAllTodo}
      >
        Clear All
      </Button>
    </ul>
  );
}
