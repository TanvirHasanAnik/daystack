"use client";

import { useContext } from "react";
import { UserContext } from "@/app/contextProviders/userProvider";
import AuthSuggestion from "@/app/ui/common/authSuggestion";

export default function TopicTree() {
  const context = useContext(UserContext);
  const user = context?.user;

  return user ? (
    <div>Topic Tree</div>
  ) : (
    <AuthSuggestion feature="Topic Tree" />
  );
}