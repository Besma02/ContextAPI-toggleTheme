import React,{useContext} from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const Booklist = () => {
    const light={syntax:'#555',ui:'#ddd',bg:'#eee'}
    const dark={syntax:'#ddd',ui:'#333',bg:'#555'}
    const{islightTheme}=useContext(ThemeContext)
    const theme=islightTheme?light:dark
  return (
    <div className='booklist' style={{background:theme.bg,color:theme.syntax}}>
        <ul>
            <li  >the way of kings</li>
            <li  >the last Empire</li>
            <li  >the name of wind</li>
        </ul>
    </div>
  )
}

export default Booklist