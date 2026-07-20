import { twMerge } from "tailwind-merge";
import { useState } from "react";
import DeleteIcon from "./DeleteIcon.jsx";
import EditIcon from "./EditIcon.jsx";
import ConfirmIcon from "./ConfirmIcon.jsx";
import CancelIcon from "./CancelIcon.jsx";

export default function TodoItems({
  todo,
  statusToggle,
  deleteTodo,
  editTodoTitle,
}) {
  const [editMode, setEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(todo?.title);
  const onEditInputHandler = (e) => {
    if (e.key !== "Enter" || e.shiftKey) return;
    e.preventDefault();
    if (!e.target.value.trim()) return;
    setEditMode(false);
    editTodoTitle(todo?.id, editInputValue);
  };
  console.log(todo);

  return (
    <li className="flex-center min-h-30 w-full">
      {editMode ? (
        <div className="flex-center-between w-full px-8 py-4">
          <textarea
            type="text"
            value={editInputValue}
            className="border-border field-sizing-content w-3/4 rounded-xl border-2 p-4"
            onChange={(e) => setEditInputValue(e.target.value)}
            onKeyDown={onEditInputHandler}
          ></textarea>

          <div
            className={
              "border-border flex-center h-12 w-20 gap-2 rounded-xl border"
            }
          >
            <ConfirmIcon
              confirmHandler={() => {
                if (!editInputValue.trim()) return;
                setEditMode(false);
                editTodoTitle(todo?.id, editInputValue);
              }}
            />
            <CancelIcon
              cancelHandler={() => {
                setEditMode(false);
                setEditInputValue(todo?.title);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex-center-between relative w-full flex-wrap px-8 py-4">
          <label
            className={twMerge(
              "flex-center-start w-3/4 cursor-pointer pr-2 transition-all hover:opacity-70", // 1. Base & Layout Style
              "", // 2.ّ Color, Border & Appearance
              "", // 3. Responsive & Dark Mode Style
              "", // 4. Interaction Style
              "", // 5. Animation Style
              [todo?.status && "opacity-50"], // 6. Conditional Styles
            )}
          >
            <input
              type="checkbox"
              checked={todo?.status}
              onChange={() => statusToggle(todo?.id)}
              className="accent-accent mr-2 min-h-4.5 min-w-4.5 cursor-pointer"
            />
            <p
              className={twMerge(
                "cursor-pointer overflow-hidden wrap-break-word whitespace-pre-wrap select-none", // 1. Base & Layout Style
                "", // 2. Color, Border & Appearance
                "", // 3. Responsive & Dark Mode Style
                "", // 4. Interaction Style
                "", // 5. Animation Style
                [todo?.status ? "line-through" : "no-underline"], // 6. Conditional Styles
              )}
            >
              {todo?.title}
            </p>
          </label>

          <div
            className={
              "border-border flex-center h-12 w-20 flex-wrap gap-2 rounded-xl border"
            }
          >
            <EditIcon editHandler={() => setEditMode(true)} />
            <DeleteIcon deleteHandler={() => deleteTodo(todo?.id)} />
          </div>

          <span className="text-md absolute top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            {todo.createdAt}
          </span>
        </div>
      )}
    </li>
  );
}
