import { createContext,useContext } from "react";


export const contextState=createContext();

export  function useContextState(){
    return useContext(contextState);
}

export const ContextProvider=contextState.Provider;