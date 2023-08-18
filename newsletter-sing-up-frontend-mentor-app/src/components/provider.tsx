'use client'
import React, { createContext, ReactNode, useState } from "react";

interface ProviderProps {
    children: ReactNode;
}

interface ContextState {
    // Определите свойства состояния контекста и их типы
    // Например: property: string;
    isSubmitted: boolean;
}

const Context = createContext<{ contextState: ContextState; updateContextState: (newContext: ContextState) => void } | undefined>(undefined);

const Provider: React.FC<ProviderProps> = (props: ProviderProps) => {
    const [contextState, setContextState] = useState<ContextState>({
        isSubmitted: false,
    });

    const updateContextState = (newContext: ContextState) =>{
        setContextState((prevContext) => ({...prevContext, ...newContext}))
    }

    return ( 
        <Context.Provider value={{contextState, updateContextState}}>
            {props.children}
        </Context.Provider>
    );
}
 
export {Context, Provider};
