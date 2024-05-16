import { useState } from "react"
import { themes } from "../themes"
import { ThemeContext } from "./theme-context"

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState(themes.light)

   return (
      <ThemeContext.Provider value={{theme, setTheme}}>
         {props.children}
      </ThemeContext.Provider>
   )
}