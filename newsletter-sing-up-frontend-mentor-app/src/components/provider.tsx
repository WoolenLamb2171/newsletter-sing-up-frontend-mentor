'use client'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type Email = {
    isSubbmitted: boolean;
}

export interface EmailContextInterface {
    email: Email,
    setEmail: Dispatch<SetStateAction<Email>>,
}

const defaultState = {
    email: {
        isSubbmitted: false
    },
    setEmail: (email: Email) => {}
} as EmailContextInterface

export const EmailContext = createContext(defaultState);

type EmailProviderProps = {
    children: ReactNode
}

export default function EmailProvider({children}: EmailProviderProps){
    const  [email, setEmail] = useState<Email>({
        isSubbmitted: false,
    });

    return (
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}