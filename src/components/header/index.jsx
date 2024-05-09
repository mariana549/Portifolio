import Container from "../container"
import logo from "../../assets/m.png"

function Header() {
   return (
      <header className="w-full">
         <Container className="flex items-center justify-between">
            <div className="flex items-center justify-between">
               <img src={logo} alt="logo" className="w-32"/>
               <nav>
                  <ul className="flex items-center gap-2 text-gray-50">
                     <li className="text-xl p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">Home</li>
                     <li className="text-xl p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">Cursos</li>
                     <li className="text-xl p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">Projetos</li>
                     <li className="text-xl p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">Sobre mim</li>
                  </ul>
               </nav>
            </div>
         </Container>
      </header>
   )
}

export default Header
