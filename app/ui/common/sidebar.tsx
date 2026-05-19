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