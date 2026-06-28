"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">

      <div>
        <h1 className="text-3xl font-bold">
          Financial Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, here's your business overview.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">

          <Search size={18} className="text-gray-500"/>

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-3"
          />

        </div>

        <Bell size={22} className="cursor-pointer"/>

        <UserCircle2 size={35}/>
      </div>

    </header>
  );
}