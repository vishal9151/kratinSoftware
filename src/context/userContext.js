import { createContext,useContext } from "react";

const userContext=createContext();

export function useTodo(){
    return useContext(userContext);
}

export default userContext;