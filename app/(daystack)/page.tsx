"use client";

import { useContext } from "react";
import { UserContext } from "../contextProviders/userProvider";
import AuthSuggestion from "../ui/common/authSuggestion";

export default function Dashboard() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Dashboard</div>
  ) : (
    <AuthSuggestion feature="Dashboard" />
  );
}