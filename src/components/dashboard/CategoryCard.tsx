const categories = [
  {
    title: "Marketing",
    amount: "₹18,000",
    color: "text-blue-600",
  },
  {
    title: "Software",
    amount: "₹12,000",
    color: "text-purple-600",
  },
  {
    title: "Salary",
    amount: "₹20,000",
    color: "text-green-600",
  },
  {
    title: "Office",
    amount: "₹5,000",
    color: "text-yellow-600",
  },
];

export default function CategoryCard() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {categories.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <p className="text-gray-500">
            {item.title}
          </p>

          <h2 className={`text-3xl font-bold mt-3 ${item.color}`}>
            {item.amount}
          </h2>
        </div>
      ))}
    </div>
  );
}