'use client'

import { useContext } from "react";
import { UserContext } from "@/app/contextProviders/userProvider";

export default function TopBar(){
    const context = useContext(UserContext);
    const user = context?.user;

    return (
        <div className="h-20 bg-blue-200 flex items-center justify-between px-6">
            <div>This is topBar</div>
            {user && (
                <div className="flex items-center gap-4">
                    <span>Welcome, <strong>{user.name}</strong> ({user.role})</span>
                </div>
            )}
        </div>
    )
}