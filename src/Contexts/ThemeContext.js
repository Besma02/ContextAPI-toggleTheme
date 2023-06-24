import React,{useState} from 'react'
import { createContext } from "react";
export const ThemeContext=createContext()

const ThemeContextProvider = (props) => {
    const [islightTheme, setIslightTheme] = useState(false)
     
    const toggleTheme=()=>{
        setIslightTheme({islightTheme:!islightTheme.islightTheme})
    }

  return (
    <ThemeContext.Provider  value={{...islightTheme,toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider