import { useState, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [data, setData] = useState(undefined) 

    function handleSubmit({data}){
        setData(data)
    }

    return(
        <UserContext.Provider value={{data, submit: handleSubmit}} >
        {children}
        </ UserContext.Provider>
    )
}

