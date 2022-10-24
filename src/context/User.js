import { useState, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    // const [email, setEmail] = useState("");
    // const [senha, setSenha] = useState("");
    const [data, setData] = useState(undefined) 

    function handleSubmit({data}){
        setData(data)
        console.log(data)
    }

    return(
        <UserContext.Provider value={{data, submit: handleSubmit}} >
        {children}
        </ UserContext.Provider>
    )
}

