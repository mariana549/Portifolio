import Container from "../container"
import logo from "../../assets/M.png"
import home from "../../assets/home.png"
import user from "../../assets/user.png"
import projetos from "../../assets/siga-a-pasta.png"
import cursos from "../../assets/licao.png"
import contato from "../../assets/contato.png"

function Header() {
   return (
      <header className="w-full">
         <Container className="flex items-center justify-between">
            <div className="flex items-center justify-between">
               <img src={logo} alt="logo" className="w-28"/>
               <nav>
                  <ul className="flex items-center gap-2 text-gray-50">
                     <li className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110"> <img src={cursos} alt="icone curso" 
className="w-5"/> Cursos</li>
                     <li className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110"> <img src={projetos} alt="icone projetos" className="w-5"/> Projetos</li>
                     <li className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110"> <img src={user} alt="user" className="w-5"/> Sobre mim</li>
                     <li className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110"> <img src={home} alt="logo home" className="w-5"/> Home</li>
                     <li className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110"> <img src={contato} alt="contato" className=""/> Contato</li>
                  </ul>
               </nav>
            </div>
         </Container>
      </header>
   )
}

export default Header
