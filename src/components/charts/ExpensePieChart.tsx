"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Marketing", value: 18000 },
  { name: "Salary", value: 20000 },
  { name: "Software", value: 12000 },
  { name: "Office", value: 5000 },
];

const COLORS = [
  "#D4AF37",
  "#111111",
  "#4CAF50",
  "#2196F3",
];

export default function ExpensePieChart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold mb-6">
        Expense Breakdown
      </h2>

      <div className="h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={140}
              innerRadius={70}
            >

              {data.map((_, index) => (
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