const suggestions = [
  {
    title: "Hire a Backend Developer",
    impact: "+18% Productivity",
  },
  {
    title: "Reduce Marketing Spend",
    impact: "Save ₹8,200/month",
  },
  {
    title: "Upgrade Pricing",
    impact: "+12% Revenue",
  },
  {
    title: "Cancel Unused SaaS",
    impact: "Save ₹6,000/month",
  },
];

export default function SuggestionCards() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {suggestions.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
        >

          <h3 className="font-bold text-lg">
            {item.title}
          </h3>

          <p className="mt-3 text-green-600">
            {item.impact}
          </p>

        </div>

      ))}

    </div>
  );
}