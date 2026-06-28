"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jul", revenue: 120000 },
  { month: "Aug", revenue: 132000 },
  { month: "Sep", revenue: 145000 },
  { month: "Oct", revenue: 158000 },
  { month: "Nov", revenue: 171000 },
  { month: "Dec", revenue: 186000 },
];

export default function ForecastChart() {

  return (

    <div className="bg-white rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold">

        AI Revenue Forecast

      </h2>

      <div className="h-[420px] mt-8">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="month"/>

            <YAxis/>

            <Tooltip/>

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#D4AF37"
              fill="#D4AF37"
              fillOpacity={0.25}
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  )

}