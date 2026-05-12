'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {z} from 'zod'
import {userSchema} from "../schemas"

type FormFields = z.infer<typeof userSchema>;

export default function RegisterUser() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting} } = useForm<FormFields>({
        resolver: zodResolver(userSchema),
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log(data)
            throw errors
        }catch(error){
            if (error instanceof Error) {
                setError("email", {
                message: error.message
                });
            } else {
                setError("root", {
                message: "Unknown error"
                });
            }
        }
    }
    return (
        <div className="login flex flex-col">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="text" placeholder="example@mail.com"/>
                {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                <input {...register("password")} type="password" placeholder="password"/>
                {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </form>
        </div>
    )
}