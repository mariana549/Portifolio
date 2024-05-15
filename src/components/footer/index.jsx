import Container from "../container"
import NavBar from "../navBar"

import logo2 from "../../assets/M2.png"
import home from "../../assets/home.png"

function Footer() {
   return (
      <footer className="mt-20 bg-pink-500">
         <Container>
            <div className="flex w-full justify-between items-center">
               <ul>
                  <li className="flex gap-3 items-center">
                     <img src={logo2} alt="logo" className="w-20" />
                     <p className="text-pink-50 text-xl pointer-events-none font-semibold">
                        Feito por Mariana Antonia
                     </p>
                  </li>
               </ul>
               <NavBar>
                  <li
                     className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
                     <img
                        src={home}
                        alt="logo home"
                        className="w-5"
                     />
                     <a href="#">
                        Subir
                     </a>
                  </li>
               </NavBar>
            </div>
         </Container>
      </footer>
   )
}

export default Footer
