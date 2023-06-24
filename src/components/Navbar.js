import React,{useContext}from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'

const Navbar = () => {
    
    const light={syntax:'#555',ui:'#ddd',bg:'#eee'}
    const dark={syntax:'#ddd',ui:'#333',bg:'#555'}
    const{islightTheme}=useContext(ThemeContext)
    const theme=islightTheme?light:dark
    const{isAuthenticated,toggleAuth}=useContext(AuthContext)
  return (
   
       
       
            <div className="navbar" style={{background:theme.bg,color:theme.syntax}}>
             <div>   
            <ul>
                <li  >home</li>
                <li  >about</li>
                <li >contact</li>
            </ul>
            </div>
            <button onClick={toggleAuth} className='btn'>
                    {isAuthenticated?'logg in':'logg out'}
                </button>
        </div>
        )
  
   
  
}

export default Navbar