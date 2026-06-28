import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import ExpensePieChart from "../../components/charts/ExpensePieChart";
import CategoryCard from "../../components/dashboard/CategoryCard";
import VendorTable from "../../components/dashboard/VendorTable";
import Recommendation from "../../components/ai/Recommendation";

export default function ExpensesPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8 space-y-8">

          <CategoryCard />

          <ExpensePieChart />

          <div className="grid grid-cols-3 gap-8">

            <div className="col-span-2">
              <VendorTable />
            </div>

            <Recommendation />

          </div>

        </main>
      </div>
    </div>
  );
}