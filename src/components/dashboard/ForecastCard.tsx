export default function ForecastCard() {

  return (

    <div className="grid grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <p className="text-gray-500">Projected Revenue</p>
        <h2 className="text-4xl font-bold mt-3">₹18.6L</h2>
        <p className="text-green-600 mt-2">+18%</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <p className="text-gray-500">Projected Profit</p>
        <h2 className="text-4xl font-bold mt-3">₹8.2L</h2>
        <p className="text-green-600 mt-2">+11%</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <p className="text-gray-500">Cash Flow</p>
        <h2 className="text-4xl font-bold mt-3">Positive</h2>
        <p className="text-green-600 mt-2">Healthy</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <p className="text-gray-500">Confidence</p>
        <h2 className="text-4xl font-bold mt-3">94%</h2>
        <p className="text-[#D4AF37] mt-2">AI Prediction</p>
      </div>

    </div>

  )

}