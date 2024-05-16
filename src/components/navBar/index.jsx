import user from "../../assets/user.png"
import projetos from "../../assets/siga-a-pasta.png"

function NavBar({children}) {
   return (
      <nav>
         <ul className="flex items-center gap-2 text-gray-50">
            <li
               className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
               <img
                  src={projetos}
                  alt="icone projetos"
                  className="w-5"
               />
               <a href={`#projeto`} className="font-poppins">
                  Projetos
               </a>
            </li>
            <li
               className="text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
               <img
                  src={user}
                  alt="user"
                  className="w-5"
               />
               <a href={`#sobremim`} className="font-poppins">
                  Sobre mim
               </a>
            </li>
            {children}
         </ul>
      </nav>
   )
}

export default NavBar
