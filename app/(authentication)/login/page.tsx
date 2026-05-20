'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { loginSchema } from "../schemas";
import { useLoginMutation } from "@/app/state/user/userApiSlice";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/app/ui/common/primaryButton";
import DayStackTitle from "@/app/ui/common/daystackTitle";
import { LogIn } from "lucide-react";


type FormFields = z.infer<typeof loginSchema>;

export default function Login() {
    const [loginApi, { isLoading }] = useLoginMutation();
    const router = useRouter();
    
    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await loginApi(data).unwrap();
            router.push('/');
        } catch (error: any) {
            if (error?.data?.error) {
                setError("root", {
                    message: error.data.error
                });
            } else {
                setError("root", {
                    message: "Invalid email or password"
                });
            }
        }
    };

    return (
        <div className="login">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font tracking-tight text-gray-700">
                    Login to
                </h1>
                <DayStackTitle/>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                <input
                    {...register("email")}
                    type="text"
                    placeholder="example@mail.com"
                    className="w-full rounded-2xl border border-border/10 bg-input-bg px-4 py-3 outline-none focus:border-input-focus-border transition"
                />
                {errors.email && (
                    <div className="text-red-500 text-sm">
                    {errors.email.message}
                    </div>
                )}
                </div>

                <div className="flex flex-col gap-1">
                <input
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    
                    className="w-full rounded-2xl border border-border/10 bg-input-bg px-4 py-3 outline-none focus:border-input-focus-border transition"
                />
                {errors.password && (
                    <div className="text-red-500 text-sm">
                    {errors.password.message}
                    </div>
                )}
                </div>

                <PrimaryButton icon={LogIn} disabled={isLoading} type="submit">
                {isLoading ? "Logging in..." : "Login"}
                </PrimaryButton>

                {errors.root && (
                <div className="text-red-500 text-sm">
                    {errors.root.message}
                </div>
                )}
            </form>
            <p onClick={() => {router.push("/register")}} className="cursor-pointer mt-5 tracking-tight text-gray-600 hover:text-black">Create a new account</p>
        </div>
    );
}