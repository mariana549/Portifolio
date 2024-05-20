import { ThemeProvider } from './Contexts/themeContext/themeProvider'
import Home from './page/home'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
