import { Route, Routes } from "react-router-dom"
import Home from "../home"

function AppRoutes() {
   return (
     <Routes>
         <Route path="/" element={<Home />}/>
     </Routes> 
   )
}

export default AppRoutes
