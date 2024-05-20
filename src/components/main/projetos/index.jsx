import javascript from '../../../assets/images/js.png'
import html from '../../../assets/images/html-5.png'
import css from '../../../assets/images/css-3.png'

import PropTypes from "prop-types"

function Projetos({ name, homepage, deploy, linguagem }) {

   const imgs = {
      JavaScript: javascript,
      CSS: css,
      HTML: html
   }

   const imgLiguagem = imgs[linguagem]

   return (
      <li
         className="max-md:w-96 w-[500px] min-h-[300px] 
         rounded duration-300 ease-in-out hover:scale-105 list-none flex flex-col items-center justify-center"
      >
         <div className="p-5 flex flex-col items-center justify-between gap-3">
            <iframe
               src={homepage}
               title={name}
               className="max-md:w-80 w-[400px] max-md:h-56 h-[300px] bg-white rounded-lg border-2 border-pink-500"
               style={{ backgroundSize: "cover" }}
               scrolling="no"
               sandbox="allow-scripts allow-same-origin allow-presentation"
            />
            <h1 className="max-md:text-sm text-lg
             text-pink-500 font-semibold pb-3 font-poppins">
               {name}
            </h1>
            <hr className="border border-pink-500 w-full" />
            <ul className="flex items-center justify-between w-full mt-4">
               <li className="list-none">
                  <img
                     src={imgLiguagem}
                     alt={linguagem}
                     className="max-sm:w-7 w-11 max-sm:rounded-none rounded-lg"
                  />
               </li>
               <li className="list-none">
                  <a
                     href={homepage ? homepage : deploy}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="max-sm:text-xs text-base text-pink-50 p-2 bg-pink-500 rounded font-poppins">
                     Demo
                  </a>
               </li>
            </ul>
         </div>
      </li>
   )
}

Projetos.propTypes = {
   name: PropTypes.string.isRequired,
   homepage: PropTypes.string.isRequired,
   deploy: PropTypes.any.isRequired,
   linguagem: PropTypes.string.isRequired,
}
export default Projetos

