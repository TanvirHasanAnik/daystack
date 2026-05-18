"use client";

import { useContext } from "react";
import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";

export default function Notes() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Notes</div>
  ) : (
    <AuthSuggestion feature="Notes" />
  );
}