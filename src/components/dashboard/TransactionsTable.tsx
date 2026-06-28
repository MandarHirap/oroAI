const data = [
  {
    name: "Amazon AWS",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    name: "Google Ads",
    amount: "₹8,200",
    status: "Pending",
  },
  {
    name: "Client Payment",
    amount: "₹75,000",
    status: "Received",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-8">
        Recent Transactions
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-500">

            <th>Company</th>
            <th>Amount</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (

            <tr
              key={item.name}
              className="border-t"
            >

              <td className="py-5">
                {item.name}
              </td>

              <td>
                {item.amount}
              </td>

              <td>
                {item.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}