'use client'
import React, { useState } from 'react'
import DarkModeContext from './DarkModeContext';
export default function DarkmodeState(props) {
    const [darkMode,setDarkMode]=useState(localStorage.getItem("dark"));

  return (
    <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
        { props.children }
    </DarkModeContext.Provider>
  )
}
