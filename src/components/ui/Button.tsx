import type { ComponentPropsWithoutRef } from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  disable?: boolean;
  hover?: boolean;
  bg?: boolean;
  border?: boolean;
  customClassName?: string;
}

export default function Button({
  disable,
  hover = true,
  bg = true,
  border = true,
  onClick,
  type,
  customClassName,
  children,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-md p-2", // 1. Base & Layout Style
        `${bg && "bg-surface"} ${border && "border-border border"}`, // 2. Color, Border & Appearance
        "", // 3. Responsive & Dark Mode Style
        `${hover && "hover:shadow-base-hover"}`, // 4. Interaction Style
        "transition-[box-shadow,background-color,color] duration-200 ease-linear", // 5. Animation Style
        [
          disable &&
            "disabled:cursor-no-drop disabled:bg-gray-800 disabled:opacity-50",
        ], // 6. Conditional Styles
        customClassName, // 7. Custom Style
      )}
      disabled={disable}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
