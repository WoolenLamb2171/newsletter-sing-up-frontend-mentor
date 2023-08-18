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
        <>
            <Image src={tick} alt="a picture of tick" priority width={55}/>

            <h1>Thanks for Subscribing!</h1>

            <p>
                A confirmation email has been sent to <strong>{email.adress?.toString()}</strong>. 
                Please open it and click the button inside to confirm your subscrition
            </p>

            <button onClick={handleDismissClick}>
                Dismiss message
            </button>
        </> 
    );
}
 
export default SuccessWindow;