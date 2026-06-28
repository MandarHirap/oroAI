"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Marketing", value: 30 },
  { name: "Salary", value: 40 },
  { name: "Software", value: 15 },
  { name: "Office", value: 15 },
];

const COLORS = [
  "#D4AF37",
  "#111111",
  "#C9C9C9",
  "#E5E7EB",
];

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        Expense Breakdown
      </h2>

      <div className="h-72">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}