import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const ToggleTheme = () => {
    const{toggleTheme}=useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className='btnToggle'>toggle theme</button>
  )
}

export default ToggleTheme