import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import KPICard from "../../components/dashboard/KPICard";
import AIInsightCard from "../../components/dashboard/AIInsightCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import ExpenseChart from "../../components/dashboard/ExpenseChart";
import CashRunwayCard from "../../components/dashboard/CashRunwayCard";
import HealthCard from "../../components/dashboard/HealthCard";
import TransactionsTable from "../../components/dashboard/TransactionsTable";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <div className="grid grid-cols-4 gap-6">

            <KPICard
              title="Revenue"
              value="₹1.25L"
              growth="+18%"
            />

            <KPICard
              title="Expenses"
              value="₹55K"
              growth="-6%"
            />

            <KPICard
              title="Profit"
              value="₹70K"
              growth="+22%"
            />

            <KPICard
              title="Health Score"
              value="92"
              growth="Excellent"
            />

          </div>

          <div className="mt-8">

            <AIInsightCard />

          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
  <RevenueChart />
  <ExpenseChart />
</div>

<div className="grid grid-cols-2 gap-6 mt-8">
  <CashRunwayCard />
  <HealthCard />
</div>

<div className="mt-8">
  <TransactionsTable />
</div>
        </main>

      </div>

    </div>
  );
}