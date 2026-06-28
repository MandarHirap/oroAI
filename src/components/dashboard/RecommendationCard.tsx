export default function RecommendationCard() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-6">
        AI Revenue Insights
      </h2>

      <div className="space-y-6">

        <div>

          <h3 className="font-semibold">
            Revenue Growth
          </h3>

          <p className="text-gray-500">
            Revenue increased by 18% compared to last month.
          </p>

        </div>

        <div>

          <h3 className="font-semibold">
            Best Performing Service
          </h3>

          <p className="text-green-600">
            Web Development generated ₹4.8L this month.
          </p>

        </div>

        <div>

          <h3 className="font-semibold">
            AI Recommendation
          </h3>

          <p>
            Increase marketing spend by 8% to maximize projected growth.
          </p>

        </div>

      </div>

    </div>
  );
}