import Container from "../container"
import NavBar from "../navBar"

import logo2 from "../../assets/images/M.png"
import home from "../../assets/images/home.png"
import whats from "../../assets/images/whatsapp.png"
import In from "../../assets/images/linkedin.png"
import mari2 from "../../assets/images/mari2.jpg"

import { handleClick } from "../pegarId";

function Footer() {
   
   const handleSubir = () => {
      window.scrollTo(0,0)
   }

   return (
      <footer className="bg-black">
         <Container>
         <aside className="py-12" id="contato" onClick={handleClick}>
            <h1 className="text-pink-500 text-4xl font-bold pb-9 text-center font-poppins">Contato</h1>
            <div className="flex items-center justify-between">
              <aside className="flex flex-col items-start">
                <p className="text-pink-500 text-2xl font-medium pointer-events-none font-poppins">Entre em contato comigo por: </p>
                <ul className="py-4 flex gap-5">
                  <li className="flex items-center gap-2 hover:border p-2 rounded">
                    <img src={In} alt="" className="w-5 h-5" />
                    <a href="http://www.linkedin.com/in/mariana-a-6694b5245/" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-base font-bold font-poppins">Linkedin</a>
                  </li>
                  <li className="flex items-center gap-2 hover:border p-2 rounded">
                    <img src={whats} alt="" className="w-5 h-5" />
                    <a href="https://contate.me/marianaantonia" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-base font-bold font-poppins">WhatsApp</a>
                  </li>
                </ul>
              </aside>
              <img src={mari2} alt="mariana imagem2" className="w-64 rounded-3xl border-4 border-pink-500" />
            </div>
          </aside>
            <div className="flex w-full justify-between items-center 
            max-sm:flex-col">
               <ul>
                  <li className="flex gap-2 items-center">
                     <img src={logo2} alt="logo" className="max-sm:w-10 w-20" />
                     <p className="max-sm:text-xs text-xl
                      text-pink-50 pointer-events-none font-poppins">
                        Feito por <span className="font-bold">Mariana Antonia</span>
                     </p>
                  </li>
               </ul>
               <NavBar>
                  <li
                     className="max-sm:text-xs text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
                     <img
                        src={home}
                        alt="logo home"
                        className="max-sm:w-3 w-5"
                     />
                     <button type="button" onClick={handleSubir} className="font-poppins">Subir</button>
                  </li>
               </NavBar>
            </div>
         </Container>
      </footer>
   )
}

export default Footer
