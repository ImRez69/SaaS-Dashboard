import { twMerge } from "tailwind-merge";

export default function Button({ style, onClickFunc, children }) {
  return (
    <button
      className={twMerge(
        "bg-accent-bg text-accent rounded-lg px-3.5 py-3 text-sm font-medium", // 1. Base & Layout Style
        "shadow-accent border-accent-border border-2 border-solid", // 2. Color, Border & Appearance
        "max-sm:focus:shadow-accent-hover max-sm:text-xs max-sm:focus:scale-105", // 3. Responsive & Dark Mode Style
        "hover:shadow-accent-hover cursor-pointer hover:scale-105", // 4. Interaction Style
        "transition-all", // 5. Animation Style
        // [conditional && "style", conditional ? "if-true-style" : "if-false-style"], // 6. Conditional Style
        style, // 7. Costum Style
      )}
      onClick={onClickFunc}
    >
      {children}
    </button>
  );
}
