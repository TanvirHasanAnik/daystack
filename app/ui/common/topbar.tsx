'use client'

import { UserContext } from "@/app/contextProviders/userProvider";
import { useLogoutMutation } from "@/app/state/user/userApiSlice";
import { useRouter } from "next/navigation";
import { useContext } from "react";


export default function TopBar(){
    const context = useContext(UserContext);
    const user = context?.user;
    const [logout, {isLoading}] = useLogoutMutation()
    const router = useRouter()

    function handleLogin(){
        router.push("/login")
    }
    async function handleLogout(){
        try{
            await logout().unwrap()
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="h-20 bg-blue-200 flex items-center justify-between px-6">
            <div>This is topBar</div>
            {user && (
                <div className="flex items-center gap-4">
                    <span>Welcome, <strong>{user.name}</strong> ({user.role})</span>
                </div>
            )}
            <button disabled={isLoading} onClick={user ? handleLogout : handleLogin}>{user ? "logout" : "login"}</button>
        </div>
    )
}