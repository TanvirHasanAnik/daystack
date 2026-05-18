"use client";

import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";
import { useContext } from "react";

export default function ForLater() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>For Later</div>
  ) : (
    <AuthSuggestion feature="For Later" />
  );
}