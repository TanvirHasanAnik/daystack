"use client";

import { RootState } from "../state/store";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notAuthenticated,authenticated } from "../state/user/userSlice";
import { User } from "../(authentication)/types";
import { useGetCurrentUserQuery } from "../state/user/userApiSlice";

type UserContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  //const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          dispatch(notAuthenticated())
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        setUser(data);
        dispatch(authenticated())
      } catch (error) {
        dispatch(notAuthenticated())
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      login: (data: User) => setUser(data),
      logout: () => setUser(null)
    }}>
      {children}
    </UserContext.Provider>
  );
}