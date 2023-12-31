'use client'
import { useForm } from "react-hook-form";
import { MutableRefObject, useContext } from "react";
import { EmailContext } from "./provider";
interface FormData {
    email: string;
}

const EmailForm = () => {
    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset,
        getValues
    } = useForm<FormData>({
        mode: "onBlur"
    });

    const {setEmail} = useContext(EmailContext);

    const onSubmit = (data: FormData): void => {
        setEmail({isSubbmitted: true, adress: getValues('email')})
        reset();
    }

    return ( 
        <div className="ml-6 mr-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mb-2">
                    <label className="font-Regular text-xs text-left" htmlFor="email">Email address</label>
                    <div>{errors?.email && <p className="font-Regular text-xs text-Tomato">{errors?.email?.message || "Error!"}</p>}</div>
                </div>

                <input  {...register('email', {
                    required: "Fill in the form",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid e-mail format"
                    },
                })} className="border rounded-lg w-full h-13 p-3 font-Regular mb-4" placeholder="example@company.com" type="email"/>

                <button className="border rounded-lg w-full h-13 p-3 font-Regular text-White bg-Dark-Slate-Grey" disabled={!isValid}>Subscribe to monthly newsletter</button>
            </form>
        </div>
     );
}
 
export default EmailForm; 
