"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  TrendingUp,
  Activity,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Revenue",
    href: "/revenue",
    icon: Wallet,
  },
  {
    name: "Expenses",
    href: "/expenses",
    icon: Receipt,
  },
  {
    name: "Forecast",
    href: "/forecast",
    icon: TrendingUp,
  },
  {
    name: "Health",
    href: "/health",
    icon: Activity,
  },
  {
    name: "AI CFO",
    href: "/ai-cfo",
    icon: Bot,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#111111] text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold text-[#D4AF37]">
        OroAI
      </h1>

      <p className="text-gray-400 mt-1">
        Your AI CFO
      </p>

      <nav className="mt-12 space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#1d1d1d] transition"
            >

              <Icon size={20}/>

              {item.name}

            </Link>

          );

        })}

      </nav>

    </aside>
  );
}