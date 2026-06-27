import {
  Brain,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Target,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "AI CFO Chat",
    description: "Ask business questions and receive strategic recommendations.",
    icon: Brain,
  },
  {
    title: "Expense Intelligence",
    description: "Detect unnecessary spending and optimize costs.",
    icon: Wallet,
  },
  {
    title: "Financial Health Score",
    description: "Understand the financial strength of your business.",
    icon: ShieldCheck,
  },
  {
    title: "Revenue Forecasting",
    description: "Predict future growth using AI-powered insights.",
    icon: TrendingUp,
  },
  {
    title: "Cash Runway Analysis",
    description: "Know how long your current cash reserves will last.",
    icon: Target,
  },
  {
    title: "Action Plans",
    description: "Receive practical recommendations to improve performance.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything You Need To Run Smarter
          </h2>

          <p className="text-gray-600 mt-4">
            AI-powered financial insights designed for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="h-12 w-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}