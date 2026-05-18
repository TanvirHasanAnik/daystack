"use client";

import { useContext } from "react";
import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";

export default function HabitTracker() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Habit Tracker</div>
  ) : (
    <AuthSuggestion feature="Habit Tracker" />
  );
}