import { createContext,useContext } from "react";

export const themeContext=createContext({
    themeMode:"light",
    darktheme:()=>{},
    lightTheme:()=>{},

})

export const ThemeProvider=themeContext.Provider

export default function useTheme(){                 // custom hooks
    return useContext(themeContext)
}