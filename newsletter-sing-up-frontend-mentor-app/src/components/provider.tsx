import React, { createContext, ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

const Context = createContext<boolean>(false);

const Provider: React.FC<ProviderProps> = (props: ProviderProps) => {
    const submitted = false;

    return ( 
        <Context.Provider value={submitted}>
            {props.children}
        </Context.Provider>
    );
}
 
export {Context, Provider};
