"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "To do",
    href: "/todo",
  },
  {
    label: "Notes",
    href: "/notes",
  },
  {
    label: "Habit Tracker",
    href: "/habit-tracker",
  },
  {
    label: "For Later",
    href: "/for-later",
  },
  {
    label: "Recurring Task",
    href: "/recurring-task",
  },
  {
    label: "Expense Tracker",
    href: "/expense-tracker",
  },
  {
    label: "Topic Tree",
    href: "/topic-tree",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
      <nav className="space-y-2">
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
  );
}