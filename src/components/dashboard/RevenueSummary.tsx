export default function RevenueSummary() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-gray-500">Today's Revenue</p>
        <h2 className="text-4xl font-bold mt-3">₹18,450</h2>
        <p className="text-green-600 mt-2">+12%</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-gray-500">Monthly Revenue</p>
        <h2 className="text-4xl font-bold mt-3">₹1.25L</h2>
        <p className="text-green-600 mt-2">+18%</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-gray-500">Annual Revenue</p>
        <h2 className="text-4xl font-bold mt-3">₹15.8L</h2>
        <p className="text-green-600 mt-2">+24%</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-gray-500">Average Order</p>
        <h2 className="text-4xl font-bold mt-3">₹2,350</h2>
        <p className="text-green-600 mt-2">+8%</p>
      </div>

    </div>
  );
}