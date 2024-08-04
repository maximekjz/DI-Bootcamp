import React from 'react'
import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme)=> (prevTheme==="light" ? "dark" : "light"))
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }
  

export { ThemeProvider, useTheme };


