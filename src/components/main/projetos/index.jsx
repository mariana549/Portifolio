import { motion } from "framer-motion"

function Projetos({ name, homepage, deploy, linguagem }) {   
   return (
      <motion.li
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
            <hr className="border border-purple-600 w-full"/>
            <ul className="flex items-center justify-around w-full mt-4">
               <li className="list-none">
                  <span className="text-purple-400">{linguagem}</span>
               </li>
               <li className="list-none">
                  <a href={homepage ? homepage : deploy} target="_blank" rel="noopener noreferrer" className="text-pink-50 p-2 bg-purple-400 rounded">Demo</a>
               </li>
            </ul>
            {/* <hr className="border border-purple-600 w-full"/> */}
         </div>
      </motion.li>
   )
}

export default Projetos

