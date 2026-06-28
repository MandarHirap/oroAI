const vendors = [
  {
    vendor: "Google Ads",
    amount: "₹12,000",
    status: "Paid",
  },
  {
    vendor: "AWS",
    amount: "₹5,200",
    status: "Pending",
  },
  {
    vendor: "Figma",
    amount: "₹2,000",
    status: "Paid",
  },
  {
    vendor: "Notion",
    amount: "₹1,200",
    status: "Paid",
  },
];

export default function VendorTable() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6">
        Vendor Payments
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left">

            <th className="pb-4">Vendor</th>

            <th className="pb-4">Amount</th>

            <th className="pb-4">Status</th>

          </tr>

        </thead>

        <tbody>

          {vendors.map((vendor) => (

            <tr
              key={vendor.vendor}
              className="border-b"
            >

              <td className="py-4">{vendor.vendor}</td>

              <td>{vendor.amount}</td>

              <td className="text-green-600">
                {vendor.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}