import { Home, CheckSquare, FileText, Calendar, Bookmark, Repeat, DollarSign, Network } from "lucide-react";

export const items = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "To do", href: "/todo", icon: CheckSquare },
  { label: "Notes", href: "/notes", icon: FileText },
  { label: "Habit Tracker", href: "/habit-tracker", icon: Calendar },
  { label: "For Later", href: "/for-later", icon: Bookmark },
  { label: "Recurring Task", href: "/recurring-task", icon: Repeat },
  { label: "Expense Tracker", href: "/expense-tracker", icon: DollarSign },
  { label: "Topic Tree", href: "/topic-tree", icon: Network },
];