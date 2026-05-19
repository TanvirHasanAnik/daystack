"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "./navigationItems";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      <h1 className="pb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-[#5A3E2B] to-[#C4A484] bg-clip-text text-transparent">
        Day Stack
      </h1>
      <hr className="border border-border my-4"/>
      <nav>
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded p-2 ${
                active
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
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