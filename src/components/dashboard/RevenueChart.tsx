"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 51000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 76000 },
  { month: "May", revenue: 93000 },
  { month: "Jun", revenue: 125000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">

      <h2 className="text-2xl font-bold mb-8">
        Revenue Trend
      </h2>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Line
              dataKey="revenue"
              stroke="#D4AF37"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}