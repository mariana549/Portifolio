import Container from "../container"
import NavBar from "../navBar"

import logo from "../../assets/images/M.png"
import contato from "../../assets/images/contato.png"
import { ThemeTogglerButton } from "../togglerButton/themeTogglerButton"


function Header() {
   return (
      <header className="w-full">
         <Container className="flex items-center justify-between">
            <div className="flex items-center justify-between">
               <img
                  src={logo}
                  alt="logo"
                  className="max-sm:w-12 w-28"
               />
               <NavBar>
                  <li
                     className="max-sm:text-xs text-xl
                      p-2 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out 
                     hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 ">
                     <img
                        src={contato}
                        alt="contato"
                        className="max-sm:w-4 w-6"
                     />
                     <a href={`#contato`} className="font-poppins">
                        Contato
                     </a>
                  </li>
                  <li>
                     <ThemeTogglerButton />
                  </li>
               </NavBar>
            </div>
         </Container>
      </header>
   )
}

export default Header
