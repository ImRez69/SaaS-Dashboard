import { twMerge } from "tailwind-merge";
import TrendingUpIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownIcon from "@mui/icons-material/TrendingDownRounded";

export default function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  style,
}) {
  return (
    <div
      className={`bg-surface border-border flex flex-col justify-between gap-4 rounded-xl border p-5 shadow-sm transition-all hover:shadow-md ${style ? style : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-muted text-md font-medium">{title}</span>
        {icon && (
          <div className="bg-accent-bg text-accent flex items-center justify-center rounded-lg p-2.5">
            {icon}
          </div>
        )}
      </div>

      <div className="text-foreground text-3xl font-bold tracking-tight">
        {value}
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span
          className={twMerge(
            "dir-ltr flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold",
            isPositive
              ? "bg-emerald-500/15 text-emerald-500"
              : "bg-rose-500/15 text-rose-500",
          )}
        >
          {isPositive ? (
            <TrendingUpIcon className="text-xl!" />
          ) : (
            <TrendingDownIcon className="text-xl!" />
          )}
          {change}
        </span>
        <span className="text-muted">نسبت به ماه گذشته</span>
      </div>
    </div>
  );
}
