"use client";

import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";
import { useContext } from "react";

export default function ExpenseTracker() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Expense Tracker</div>
  ) : (
    <AuthSuggestion feature="Expense Tracker" />
  );
}