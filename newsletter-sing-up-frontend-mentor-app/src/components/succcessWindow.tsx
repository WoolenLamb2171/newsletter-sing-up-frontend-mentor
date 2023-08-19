'use client'
import Image from "next/image";
import tick from "../../public/images/icon-success.svg"
import { EmailContext } from "./provider";
import { useContext } from "react";

const SuccessWindow = () => {
    const {email, setEmail} = useContext(EmailContext);

    const handleDismissClick = (): void =>{
        setEmail({
            isSubbmitted: false,
            adress: ""
        })
    }

    return ( 
        <div className="mx-5 flex flex-col lg:bg-White lg:border-White lg:rounded-3xl lg:px-10 lg:py-10 lg:m-0 lg:max-w-md lg:max-h-sreen-sm">
            <Image className="mt-[35%] mb-7 lg:mt-0" src={tick} alt="a picture of tick" priority width={60}/>

            <h1 className="mb-7 font-Bold text-4xl text-left ">Thanks for Subscribing!</h1>

            <p className="font-Regular text-base text-left mb-[95%] lg:mb-7 lg:text-sm">
                A confirmation email has been sent to <strong className="font-Bold">{email.adress?.toString()}</strong>. 
                Please open it and click the button inside to confirm your subscrition
            </p>

            <button className="border rounded-lg w-full h-13 p-3 font-Regular text-White bg-Dark-Slate-Grey" onClick={handleDismissClick}>
                Dismiss message
            </button>
        </div> 
    );
}
 
export default SuccessWindow;