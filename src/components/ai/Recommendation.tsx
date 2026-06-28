export default function Recommendation() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Executive Recommendation
        </h2>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Recommended
        </span>

      </div>

      <div className="mt-8 space-y-6">

        <div>

          <h3 className="font-semibold text-lg">
            Decision
          </h3>

          <p className="text-gray-600 mt-2">
            Hiring one additional employee is financially sustainable.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Why?
          </h3>

          <p className="text-gray-600 mt-2">
            Revenue has increased consistently over the last six months while
            operating expenses remain below the industry benchmark.
          </p>

        </div>

      </div>

    </div>
  );
}