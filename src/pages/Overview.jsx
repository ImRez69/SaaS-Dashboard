import MinStatCard from "../components/ui/MinStatCard";
import SparklineChart from "../components/ui/SparklineChart";
import SparklineBarChart from "../components/ui/SparklineBarChart";
import OverviewChart from "../components/ui/OverviewChart";

import {
  revenueSparkData,
  subscriptionSparkData,
  overviewMainChartData,
} from "../data/overviewData";

export default function Overview() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-foreground text-2xl font-bold">نمای کلی داشبورد</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MinStatCard title="درآمد کلی" value={"45،000،000 " + "تومان"}>
          <SparklineChart
            data={revenueSparkData}
            dataKey="val"
            color="#38bdf8"
          />
        </MinStatCard>

        <MinStatCard title="کاربران جدید" value="1،120">
          <SparklineBarChart
            data={subscriptionSparkData}
            dataKey="val"
            color="#818cf8"
          />
        </MinStatCard>

        <MinStatCard title="کاربران فعال" value="3،890">
          <div className="text-muted text-md flex h-16 items-center">
            <p>
              <strong className="text-emerald-500">12%+ </strong>
              نسبت به هفته قبل
            </p>
          </div>
        </MinStatCard>
      </div>

      <OverviewChart data={overviewMainChartData} />
    </div>
  );
}
