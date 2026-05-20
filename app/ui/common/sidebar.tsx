"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DayStackTitle from "./daystackTitle";
import { items } from "./navigationItems";



export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      <DayStackTitle/>
      <hr className="border border-border my-4"/>
      <nav className="space-y-2">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`w-full flex items-center gap-2 rounded-2xl px-4 py-3 transition ${
              active
                ? "bg-button-primary/90 text-button-primary-text"
                : "hover:bg-button-primary/10"
            }`}
          >
            {Icon && <Icon size={18} />}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
    </div>
  );
}