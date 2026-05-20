'use client'

import { useRegisterMutation } from "@/app/state/user/userApiSlice";
import DayStackTitle from "@/app/ui/common/daystackTitle";
import PrimaryButton from "@/app/ui/common/primaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { registerSchema } from "../schemas";
import { UserPlus  } from "lucide-react";

type FormFields = z.infer<typeof registerSchema>;

export default function RegisterUser() {
    const [registerApi, { isLoading }] = useRegisterMutation();
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors} } = useForm<FormFields>({
        resolver: zodResolver(registerSchema),
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try{
            await registerApi(data).unwrap();
            router.push('/');
        }catch(error: any){
            if ( error?.data?.error) {
                setError("root", {
                    message: error.data.error
                });
            } else {
                setError("root", {
                    message: "An error occurred during registration"
                });
            }
        }
    }
    return (
        <div className="login flex flex-col">
            
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font tracking-tight text-gray-700">
                    Register to
                </h1>
                <DayStackTitle/>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1">
                    <input {...register("name")} type="text" placeholder="Name"
                    className="w-full rounded-2xl border border-border/10 bg-input-bg px-4 py-3 outline-none focus:border-input-focus-border transition"
                    />
                    {errors.name && <div className="text-red-500">{errors.name.message}</div>}
                </div>
                <div className="flex flex-col gap-1">
                    <input {...register("email")} type="text" placeholder="example@mail.com"
                    className="w-full rounded-2xl border border-border/10 bg-input-bg px-4 py-3 outline-none focus:border-input-focus-border transition"
                    />
                    {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                </div>
                <div className="flex flex-col gap-1">
                    <input {...register("password")} type="password" placeholder="password"
                    className="w-full rounded-2xl border border-border/10 bg-input-bg px-4 py-3 outline-none focus:border-input-focus-border transition"
                    />
                    {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                </div>
                <PrimaryButton icon={UserPlus} disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Create Account"}
                </PrimaryButton>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </form>
            <p onClick={() => {router.push("/login")}} className="cursor-pointer mt-5 tracking-tight text-gray-600 hover:text-black">Already have an account?</p>
        </div>
    )
}