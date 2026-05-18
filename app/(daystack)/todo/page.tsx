"use client";

import { useContext } from "react";
import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";
import TaskList from "./components/tasklist"

export default function Todo() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>To do</div>
  ) : (
    <AuthSuggestion feature="To do" />
  );
}