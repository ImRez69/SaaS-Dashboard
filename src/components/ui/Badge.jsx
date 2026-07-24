import { twMerge } from "tailwind-merge";

const statusConfig = {
  active: {
    label: "فعال",
    style: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
    dotStyle: "bg-emerald-500",
  },
  inactive: {
    label: "غیرفعال",
    style: "bg-rose-500/15 text-rose-500 border-rose-500/20",
    dotStyle: "bg-rose-500",
  },
  pending: {
    label: "در انتظار",
    style: "bg-amber-500/15 text-amber-500 border-amber-500/20",
    dotStyle: "bg-amber-500",
  },
  available: {
    label: " در دسترس",
    style: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
    dotStyle: "bg-emerald-500",
  },
  low_stock: {
    label: "در حال اتمام",
    style: "bg-amber-500/15 text-amber-500 border-amber-500/20",
    dotStyle: "bg-amber-500",
  },
  out_of_stock: {
    label: "ناموجود",
    style: "bg-rose-500/15 text-rose-500 border-rose-500/20",
    dotStyle: "bg-rose-500",
  },
  easy: {
    label: "ساده",
    style: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
    dotStyle: "bg-emerald-500",
  },
  normal: {
    label: "متوسط",
    style: "bg-amber-500/15 text-amber-500 border-amber-500/20",
    dotStyle: "bg-amber-500",
  },
  hard: {
    label: "سخت",
    style: "bg-rose-500/15 text-rose-500 border-rose-500/20",
    dotStyle: "bg-rose-500",
  },
};

export default function Badge({ status = "active", text, addText = "" }) {
  const config = statusConfig[status];

  return (
    <span
      className={twMerge(
        "text-md inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition-colors max-md:text-sm",
        config.style,
      )}
    >
      <span className={twMerge("h-1.5 w-1.5 rounded-full", config.dotStyle)} />
      {addText > 0 && <strong>{addText}</strong>}

      {text || config.label}
    </span>
  );
}
