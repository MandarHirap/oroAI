import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import RevenueSummary from "../../components/dashboard/RevenueSummary";
import RevenueLineChart from "../../components/charts/RevenueLineChart";
import TopCustomers from "../../components/dashboard/TopCustomers";
import TransactionsTable from "../../components/dashboard/TransactionsTable";

export default function RevenuePage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8 space-y-8">

          <RevenueSummary />

          <RevenueLineChart />

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <TransactionsTable />
            </div>

            <TopCustomers />
          </div>

        </main>
      </div>
    </div>
  );
}