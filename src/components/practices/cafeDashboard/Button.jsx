import { twMerge } from "tailwind-merge";
export default function Button({ disable, onClick, type, style, children }) {
  return (
    <button
      className={twMerge(
        "bg-accent-bg cursor-pointer rounded-md p-2", // 1. Base & Layout Style
        "", // 2. Color, Border & Appearance
        "", // 3. Responsive & Dark Mode Style
        "hover:scale-102", // 4. Interaction Style
        "transition-transform", // 5. Animation Style
        [
          disable &&
            "disabled:cursor-no-drop disabled:bg-gray-800 disabled:opacity-50 disabled:hover:scale-100",
        ], // 6. Conditional Styles
        style, // 7. Custom Style
      )}
      disabled={disable}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
