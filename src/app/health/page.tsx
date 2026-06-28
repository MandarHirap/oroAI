import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

export default function HealthPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#111111]">
              Business Health
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor your company's financial stability and performance.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Health Score</p>
              <h2 className="text-5xl font-bold mt-4 text-green-600">92</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Cash Flow</p>
              <h2 className="text-4xl font-bold mt-4">Healthy</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Profit Margin</p>
              <h2 className="text-4xl font-bold mt-4">41%</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500">Risk Level</p>
              <h2 className="text-4xl font-bold mt-4 text-yellow-500">Low</h2>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">
              AI Financial Health Analysis
            </h2>

            <div className="space-y-5">
              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold text-lg">
                  Revenue Stability
                </h3>

                <p className="text-gray-600 mt-2">
                  Revenue has remained stable over the last 6 months with an
                  average monthly growth of 18%.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold text-lg">
                  Expense Efficiency
                </h3>

                <p className="text-gray-600 mt-2">
                  Expenses are within healthy limits. Marketing spending is the
                  highest contributor this month.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold text-lg">
                  AI Recommendation
                </h3>

                <p className="text-green-600 mt-2">
                  Maintain current spending patterns and improve customer
                  retention to increase profitability by an estimated 12%.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}