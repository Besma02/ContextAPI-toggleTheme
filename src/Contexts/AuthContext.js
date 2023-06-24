import React,{useState} from 'react'
import { createContext } from "react";
export const AuthContext=createContext()


const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const toggleAuth=()=>{
        setIsAuthenticated({isAuthenticated:!isAuthenticated.isAuthenticated})
    }
  return (
    <AuthContext.Provider value={{...isAuthenticated,toggleAuth}}>
     {props.children}
    </AuthContext.Provider>
   
  )
}

export default AuthContextProvider