import Container from "../container"
import NavBar from "../navBar"

import logo from "../../assets/images/M.png"
import contato from "../../assets/images/contato.png"


function Header() {
   return (
      <header className="w-full">
         <Container className="flex items-center justify-between">
            <div className="flex items-center justify-between">
               <img src={logo} alt="logo" className="w-28" />
               <NavBar>
                  <li
                     className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
                     <img
                        src={contato}
                        alt="contato"
                     />
                     <a href={`#contato`} className="font-poppins">
                        Contato
                     </a>
                  </li>
               </NavBar>
            </div>
         </Container>
      </header>
   )
}

export default Header
