"use client";

import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";
import { useContext } from "react";

export default function RecurringTask() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Recurring Task</div>
  ) : (
    <AuthSuggestion feature="Recurring Task" />
  );
}