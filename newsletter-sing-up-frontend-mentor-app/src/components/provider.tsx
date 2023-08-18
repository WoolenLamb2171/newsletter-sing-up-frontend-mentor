import React, { createContext, ReactNode } from "react";

interface ProviderProps {
    children: ReactNode,
}

const Context = createContext<boolean>(false);

const Provider: React.FC<ProviderProps> = (props: ProviderProps) => {
    const subbmited = false;

    return ( 
        <Context.Provider value={subbmited}>
            {props.children}
        </Context.Provider>
    );
}
 
export {Provider, Context};