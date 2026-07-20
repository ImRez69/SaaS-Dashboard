import Button from "../ui/Button";

export default function MinStatCard({ title, value, children }) {
  return (
    <div className="bg-surface border-border flex flex-col justify-between gap-2 rounded-xl border p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-muted text-md">{title}</span>
        <Button
          style="text-muted bg-accent-bg/00 hover:text-foreground text-sm font-bold"
          hover={false}
          bg={false}
          border={false}
        >
          •••
        </Button>
      </div>

      <div className="text-foreground text-2xl font-bold tracking-tight">
        {value}
      </div>

      <div className="pt-2">{children}</div>
    </div>
  );
}
