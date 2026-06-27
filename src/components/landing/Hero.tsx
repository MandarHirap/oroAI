export default function Hero() {
  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              AI-Powered CFO for Modern Businesses
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-[#111111]">
              Your AI CFO for
              <span className="block text-[#D4AF37]">
                Smarter Business Decisions
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Track finances, forecast growth, reduce expenses and receive
              AI-powered recommendations that help your business grow faster.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:opacity-90 transition">
                Start Free
              </button>

              <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-50 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Revenue</p>
                <h3 className="mt-2 text-3xl font-bold">₹1.25L</h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Expenses</p>
                <h3 className="mt-2 text-3xl font-bold">₹55K</h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Profit</p>
                <h3 className="mt-2 text-3xl font-bold">₹70K</h3>
              </div>

              <div className="rounded-2xl bg-[#D4AF37] p-5">
                <p className="text-sm">Health Score</p>
                <h3 className="mt-2 text-3xl font-bold">87</h3>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="font-semibold">AI Insight</p>

              <p className="mt-3 text-gray-600">
                Marketing expenses increased 23%.
                Potential monthly savings of ₹8,000 by reducing
                underperforming campaigns.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}