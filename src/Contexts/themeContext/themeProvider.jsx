import { useState } from "react"
import { themes } from "../../themes"
import { ThemeContext } from "./theme-context"
import PropTypes from "prop-types"


export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(themes.light)

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   )

}

ThemeProvider.propTypes = {
   children: PropTypes.any.isRequired
}