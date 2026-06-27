export default function AICFOSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-[#D4AF37] font-semibold">
            AI CFO
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Ask Financial Questions.
            <br />
            Get Executive Answers.
          </h2>
        </div>

        <div className="mt-16 rounded-3xl border border-gray-200 bg-white shadow-xl p-8">

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="font-medium text-gray-700">
              Can I hire another employee?
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#111111] text-white p-8">

            <h3 className="text-xl font-semibold">
              Recommendation
            </h3>

            <p className="mt-2 text-gray-300">
              Yes. Current cash flow supports an additional hire.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div>
                <p className="text-gray-400 text-sm">
                  Risk Level
                </p>

                <h4 className="text-lg font-bold text-green-400">
                  Low
                </h4>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Financial Impact
                </p>

                <h4 className="text-lg font-bold">
                  ₹25,000/month
                </h4>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Confidence
                </p>

                <h4 className="text-lg font-bold">
                  92%
                </h4>
              </div>

            </div>

            <div className="mt-8">
              <p className="font-semibold">
                Suggested Next Steps
              </p>

              <ul className="mt-3 space-y-2 text-gray-300">
                <li>• Hire within the next 60 days</li>
                <li>• Maintain a 6-month cash reserve</li>
                <li>• Monitor payroll-to-revenue ratio</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}