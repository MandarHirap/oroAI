import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import ForecastCard from "../../components/dashboard/ForecastCard";
import ForecastChart from "../../components/charts/ForecastChart";
import CashRunway from "../../components/dashboard/CashRunway";
import Recommendation from "../../components/ai/Recommendation";

export default function ForecastPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8 space-y-8">

          <ForecastCard />

          <ForecastChart />

          <div className="grid grid-cols-3 gap-8">

            <div className="col-span-2">
              <CashRunway />
            </div>

            <Recommendation />

          </div>

        </main>

      </div>

    </div>
  );
}