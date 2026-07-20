import { twMerge } from "tailwind-merge";

export default function Avatar({ src, alt, onlyImage = false, style = null }) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-2">
      {onlyImage || <strong>{alt}</strong>}

      <img
        src={src}
        alt={alt || "avatar"}
        className={twMerge(
          "h-10 w-10 rounded-full transition-transform hover:scale-115 hover:rotate-5", // 1. Base & Layout Style
          "", // 2. Color, Border & Appearance
          "", // 3. Responsive & Dark Mode Style
          "", // 4. Interaction Style
          "", // 5. Animation Style
          [style], // 6. Conditional Styles
        )}
      />
    </div>
  );
}
