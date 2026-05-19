"use client";

import { useContext } from "react";
import { UserContext } from "../contextProviders/userProvider";
import AuthSuggestion from "../ui/common/authSuggestion";
import TodoDashboardDemo from "./demoDesign";


export default function Dashboard() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <TodoDashboardDemo/>
  ) : (
    <AuthSuggestion feature="Dashboard" />
  );
}