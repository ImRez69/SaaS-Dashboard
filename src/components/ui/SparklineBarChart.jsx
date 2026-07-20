import { ResponsiveContainer, BarChart, Bar } from "recharts";

export default function SparklineBarChart({
  data,
  dataKey = "value",
  color = "#8b5cf6",
}) {
  return (
    <div className="dir-ltr h-16 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <Bar
            dataKey={dataKey}
            fill={color}
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
