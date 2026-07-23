import TodoItems from "./TodoItems";
import Button from "../../ui/Button";

export default function TodoList({
  todos,
  onStatusToggle,
  onChangeTodo,
  onDeleteTodo,
  onClearAllTodo,
}) {
  return (
    <ul className="divide-border flex-center w-full flex-wrap divide-y-2 divide-dashed">
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo?.id}
            statusToggle={onStatusToggle}
            changeTodoTitle={onChangeTodo}
            deleteTodo={onDeleteTodo}
          />
        );
      })}

      <Button
        style={`border-border mt-4 gap-2 flex-center  ${todos.length > 0 ? "" : "hidden"}`}
        onClick={onClearAllTodo}
      >
        حذف همه
      </Button>
    </ul>
  );
}
