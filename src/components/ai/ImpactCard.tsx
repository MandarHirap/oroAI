export default function ImpactCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Estimated Financial Impact
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div>
          <p className="text-gray-500">
            Monthly Cost
          </p>

          <h3 className="text-3xl font-bold mt-2">
            ₹25,000
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Annual Cost
          </p>

          <h3 className="text-3xl font-bold mt-2">
            ₹3,00,000
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Expected ROI
          </p>

          <h3 className="text-3xl font-bold mt-2 text-green-600">
            Positive
          </h3>
        </div>

      </div>

    </div>
  );
}