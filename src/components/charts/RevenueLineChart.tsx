"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 41000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 52000 },
  { month: "May", revenue: 61000 },
  { month: "Jun", revenue: 72000 },
  { month: "Jul", revenue: 84000 },
  { month: "Aug", revenue: 91000 },
  { month: "Sep", revenue: 102000 },
  { month: "Oct", revenue: 115000 },
  { month: "Nov", revenue: 121000 },
  { month: "Dec", revenue: 125000 },
];

export default function RevenueLineChart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Revenue Overview
          </h2>

          <p className="text-gray-500 mt-1">
            Monthly revenue for this year
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">
            Total Revenue
          </p>

          <h3 className="text-3xl font-bold text-[#D4AF37]">
            ₹12.5L
          </h3>
        </div>
      </div>

      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#D4AF37"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}