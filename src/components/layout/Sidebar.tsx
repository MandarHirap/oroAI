"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  TrendingUp,
  HeartPulse,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Revenue", href: "/revenue", icon: Wallet },
  { title: "Expenses", href: "/expenses", icon: Receipt },
  { title: "Forecast", href: "/forecast", icon: TrendingUp },
  { title: "Health", href: "/health", icon: HeartPulse },
  { title: "AI CFO", href: "/ai-cfo", icon: Bot },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#111111] text-white p-6">
      <h1 className="text-3xl font-bold text-[#D4AF37]">
        OroAI
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        AI Financial Assistant
      </p>

      <nav className="mt-10 space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#1E1E1E]"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}