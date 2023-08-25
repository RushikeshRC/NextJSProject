"use client"
import { createContext, useState } from "react"

   //if you are using context api it should be client side component
   //Theme provider is a wrapper, same as layout

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [mode, setMode] = useState("dark"); //mode is set to dark

    const toggle = ()=>{
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return(<ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
    </ThemeContext.Provider>
    );
};