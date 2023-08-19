'use client'
import Image from "next/image";
import mobileIllustration from "../../public/images/illustration-sign-up-mobile.svg";
import tick from "../../public/images/icon-success.svg";
import EmailForm from "@/components/emailForm";
import { useContext } from "react";
import { EmailContext } from "@/components/provider";
import SuccessWindow from "@/components/succcessWindow";
import useMediaQuery from "@/components/hooks/useMediaQuery";


export default function Home() {
  const {email} = useContext(EmailContext);
  const isBreakPoint = useMediaQuery(1024);

  return (
    <main className="flex flex-col lg:bg-White lg:border-White lg:rounded-xl lg:w-1/2 lg:h-1/4">
        {email?.isSubbmitted ? <SuccessWindow /> : (
          <>
              {isBreakPoint ? <Image className="w-full mb-7 " src={mobileIllustration} alt="sing up illustration" priority/> : ""}
              {/* <Image className="w-full mb-7" src={mobileIllustration} alt="sing up illustration" priority/> */}

              <h1 className="font-Bold text-4xl text-left ml-6 mb-7">Stay updated!</h1>

              <p className="font-Regular text-base text-left ml-6 mr-7 mb-7">Join 60,000+ product managers receiving monthly updates on:</p>

              <div className="ml-6 mb-7 flex items-start">
                <Image src={tick} alt="a tick" width={25}/>
                <p className="font-Regular text-base text-left ml-3 mr-7">Product discovery and building what matters</p>
              </div>

              <div className="ml-6 mb-7 flex items-start">
                <Image src={tick} alt="a tick" width={25}/>
                <p className="font-Regular text-base text-left ml-3 mr-7">Measuring to ensure updates are a success</p>
              </div>

              <div className="ml-6 mb-7 flex items-start">
                <Image src={tick} alt="a tick" width={25}/>
                <p className="font-Regular text-base text-left ml-3 mr-7">And much more!</p>
              </div>

              <EmailForm />
          </>
        )}
    </main>
  )
}
