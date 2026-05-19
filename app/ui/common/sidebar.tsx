"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "./navigationItems";
import DayStackTitle from "./daystackTitle";


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      <DayStackTitle/>
      <hr className="border border-border my-4"/>
      <nav className="space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full block rounded-2xl px-4 py-3 ${
                active
                  ? "bg-gradient-to-r from-[#5A3E2B] to-[#C4A484] text-white"
                  : "hover:bg-black/5 transition"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}