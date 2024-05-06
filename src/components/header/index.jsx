import Container from "../container"
import logo from "../../assets/m.png"

function Header() {
   return (
      <header className="w-full h-auto bg-black ">
         <Container className="flex items-center justify-between">
            <div className="flex items-center justify-between">
               <img src={logo} alt="logo" className="w-32"/>
               <nav>
                  <ul className="flex items-center gap-2 text-gray-50">
                     <li className=" p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">Home</li>
                     <li className=" p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">cursos</li>
                     <li className=" p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">projetos</li>
                     <li className=" p-2 hover:bg-pink-500 hover:shadow-md rounded-2xl">sobre</li>
                  </ul>
               </nav>
            </div>
         </Container>
      </header>
   )
}

export default Header
