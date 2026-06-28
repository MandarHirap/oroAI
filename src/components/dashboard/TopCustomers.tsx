const customers = [
  {
    name: "TechNova",
    revenue: "₹42,000",
  },
  {
    name: "PixelCraft",
    revenue: "₹35,500",
  },
  {
    name: "StartupX",
    revenue: "₹28,000",
  },
  {
    name: "VisionAI",
    revenue: "₹22,000",
  },
];

export default function TopCustomers() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        Top Customers
      </h2>

      <div className="space-y-5">
        {customers.map((customer) => (
          <div
            key={customer.name}
            className="flex justify-between border-b pb-3"
          >
            <span>{customer.name}</span>

            <span className="font-semibold">
              {customer.revenue}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}