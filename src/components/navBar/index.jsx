import user from "../../assets/images/user.png"
import projetos from "../../assets/images/siga-a-pasta.png"

import PropTypes from "prop-types"

function NavBar({children}) {
   return (
      <nav>
         <ul className="flex items-center gap-2 text-gray-50">
            <li
               className="max-sm:text-xs max-md:text-sm max-xl:text-base text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
               <img
                  src={projetos}
                  alt="icone projetos"
                  className="max-sm:w-3 max-lg:w-4 w-5"
               />
               <a href={`#projeto`} className="font-poppins">
                  Projetos
               </a>
            </li>
            <li
               className="max-sm:text-xs max-md:text-sm max-xl:text-base text-xl p-2 hover:bg-pink-500 rounded-lg flex gap-2 items-center transition-[0.5s] ease-in-out hover:-translate-y-1 hover:scale-110">
               <img
                  src={user}
                  alt="user"
                  className="max-sm:w-3 max-lg:w-4 w-5"
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

NavBar.propTypes = {
   children: PropTypes.any.isRequired,
}

export default NavBar
