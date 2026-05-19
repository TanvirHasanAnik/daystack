'use client'

import { UserContext } from "@/app/contextProviders/userProvider";
import { useLogoutMutation } from "@/app/state/user/userApiSlice";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { items } from "./navigationItems";
import PrimaryButton from "./primaryButton";



export default function TopBar(){
    const pathname = usePathname();
    const currentItem = items.find((item) => item.href === pathname);
    const currentLabel = currentItem?.label;
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
        <div className="h-20 flex items-center justify-between p-6">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
                {currentLabel}
            </h2>
            <div className="flex items-center gap-4">
                {user && 
                <span className="inline-flex items-center rounded-xl px-3 py-1 text-sm font-medium bg-blue-50 text-blue-900 border-2 border-dotted border-blue-300">
                    {user.name}
                </span>
                }
            <PrimaryButton disabled={isLoading} onClick={user ? handleLogout : handleLogin}>{user ? "logout" : "login"}

            </PrimaryButton>
            </div>
        </div>
    )
}