import { useContext } from "react"
import { ThemeContext } from "../Context/theme-context"
import { themes } from "../themes"

export const ThemeTogglerButton = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   console.log("themeTogglerButton", theme)

   return (
      <button
         type="button"
         onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
         // style={{ color: theme.color, backgroundColor: theme.bg }}
         className="rounded-lg p-3 ml-3 border border-pink-600"
      >
         {theme === themes.light ? "Light" : "Dark" }
      </button>
   )
}