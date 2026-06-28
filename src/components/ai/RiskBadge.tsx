export default function RiskBadge() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <p className="text-gray-500">
        Risk Level
      </p>

      <h2 className="text-5xl font-bold mt-4 text-green-600">
        LOW
      </h2>

      <p className="mt-3 text-gray-500">
        Current finances are stable.
      </p>

    </div>
  );
}