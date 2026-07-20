import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OverviewChart({ data }) {
  return (
    <div className="bg-surface border-border flex flex-col gap-4 rounded-xl border p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-foreground text-lg font-bold">
            تحلیل کلی عملکرد
          </h3>
          <p className="text-muted text-xs">گزارش درآمد و رشد کاربران</p>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="mainRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255, 255, 255, 0.08)"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(val) =>
                `${val.toLocaleString("en-US").replace(/,/g, "،")}\u00A0تومان`
              }
            />

            <Tooltip
              separator=": "
              formatter={(value) => [
                `${value.toLocaleString("en-US").replace(/,/g, "،")} تومان`,
                "درآمد",
              ]}
              contentStyle={{
                backgroundColor: "var(--bg-surface, #1e293b)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "0.5rem",
                color: "#f8fafc",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#mainRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
