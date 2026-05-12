"use client";

import { createContext } from "react";
import { User } from "../(authentication)/types";
import { useGetCurrentUserQuery } from "../state/user/userApiSlice";

type UserContextType = {
  user: User | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const {
    data,
    isLoading
  } = useGetCurrentUserQuery();

  return (
    <UserContext.Provider
      value={{
        user: data ?? null,
        isLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
}