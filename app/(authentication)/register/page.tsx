'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {z} from 'zod'
import {registerSchema} from "../schemas"
import { useRegisterMutation } from "@/app/state/user/userApiSlice";
import { useRouter } from "next/navigation";

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
            if (error?.data?.error) {
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Your Name"/>
                {errors.name && <div className="text-red-500">{errors.name.message}</div>}
                <input {...register("email")} type="text" placeholder="example@mail.com"/>
                {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                <input {...register("password")} type="password" placeholder="password"/>
                {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                <button disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Submit"}
                </button>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </form>
        </div>
    )
}