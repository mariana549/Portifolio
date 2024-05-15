import javascript  from '../../../assets/js.png'
import html  from '../../../assets/html-5.png'
import css from '../../../assets/css-3.png'

import { PropTypes } from "prop-types"

function Projetos({ name, homepage, deploy, linguagem }) {
   const imgs = {
      JavaScript: javascript,
      CSS: css,
      HTML: html
   }

   const imgLiguagem = imgs[linguagem]

   return (
      <li
         className="w-[500px] min-h-[400px] rounded duration-300 ease-in-out hover:scale-105 list-none flex flex-col items-center justify-center"
      >
         <div className="p-5 flex flex-col items-center justify-between gap-3">
            <iframe
               src={homepage}
               title={name}
               className="bg-white w-[400px] h-[300px] rounded-lg border border-purple-600"
               style={{ backgroundSize: "cover" }}
               scrolling="no"
               sandbox="allow-scripts allow-same-origin"
            />
            <h1 className="text-xl text-purple-400 font-semibold pb-3">{name}</h1>
            <hr className="border border-purple-600 w-full" />
            <ul className="flex items-center justify-between w-full mt-4">
               <li className="list-none">
                  <img src={imgLiguagem} alt={linguagem} className="w-11 rounded-lg" />
               </li>
               <li className="list-none">
                  <a href={homepage ? homepage : deploy} target="_blank" rel="noopener noreferrer" className="text-pink-50 p-2 bg-purple-400 rounded">Demo</a>
               </li>
            </ul>
         </div>
      </li>
   )
}

Projetos.propTypes = {
   name: PropTypes.string.isRiquired,
   homepage: PropTypes.string.isRiquired,
   deploy: PropTypes.any.isRiquired,
   linguagem: PropTypes.string.isRiquired,
}
export default Projetos

