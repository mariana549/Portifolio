import { motion } from "framer-motion"

function Projetos({ name, homepage, deploy }) {
   return (
      <motion.li
         className="max-w-xl min-w-96 min-h-[500px] rounded border-2 border-purple-400 duration-300 ease-in-out hover:scale-105 list-none flex flex-col items-center justify-center"
      >
         <div className="p-5 flex flex-col items-center">
            <img src="#" alt={`projeto ${name}`} />
            <h1 className="text-xl text-purple-400 font-semibold text-center pb-3">{name}</h1>
            <ul>
               <li className="list-none">
                  <a href={homepage ? homepage : deploy} target="_blank" rel="noopener noreferrer" className="text-pink-50 p-1 bg-purple-400">Demo</a>
               </li>
            </ul>
         </div>
      </motion.li>
   )
}

export default Projetos

