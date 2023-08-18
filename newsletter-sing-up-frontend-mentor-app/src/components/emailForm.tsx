'use client'
import { useForm } from "react-hook-form";

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
    } = useForm<FormData>({
        mode: "onBlur"
    });

    const onSubmit = (data: FormData): void => {
        alert(JSON.stringify(data));
        reset();
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email address</label>

                <div>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>

                <input {...register('email', {
                    required: "Fill in the form",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid e-mail format"
                    },
                })} className="border" type="email"/>

                <button className="border" disabled={!isValid}>Subscribe to monthly newsletter</button>
            </form>
        </div>
     );
}
 
export default EmailForm; 