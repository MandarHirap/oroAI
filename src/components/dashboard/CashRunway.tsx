export default function CashRunway() {

  return (

    <div className="bg-white rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold">

        AI Forecast Summary

      </h2>

      <div className="space-y-6 mt-8">

        <div className="border rounded-2xl p-5">

          <h3 className="font-semibold">

            Cash Runway

          </h3>

          <p className="text-gray-500 mt-2">

            Current balance can sustain operations for approximately
            <span className="font-semibold text-black"> 14 months.</span>

          </p>

        </div>

        <div className="border rounded-2xl p-5">

          <h3 className="font-semibold">

            Revenue Trend

          </h3>

          <p className="text-gray-500 mt-2">

            Revenue is projected to increase steadily over the next quarter.

          </p>

        </div>

        <div className="border rounded-2xl p-5">

          <h3 className="font-semibold">

            AI Suggestion

          </h3>

          <p className="text-green-600 mt-2">

            Hiring two additional developers is financially sustainable.

          </p>

        </div>

      </div>

    </div>

  )

}