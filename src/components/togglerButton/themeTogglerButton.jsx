import { useContext } from "react"
import { themes } from "../../themes"
import { ThemeContext } from "../../Contexts/themeContext/theme-context"

export const ThemeTogglerButton = () => {
   const { theme, setTheme } = useContext(ThemeContext)

   return (
      <button
         type="button"
         onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
         className="rounded-lg p-3 ml-3 border border-pink-600
         max-sm:text-xs max-lg:text-sm text-base"
      >
         {theme === themes.light ? "Light" : "Dark" }
      </button>
   )
}