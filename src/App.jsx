import { ThemeProvider } from './Context/themeProvider'
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
