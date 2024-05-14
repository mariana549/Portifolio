function Projetos({ name, homepage, deploy}) {
   return (
      <li className="max-w-xl rounded border-2 border-purple-400 bg-black w-80 min-h-[200px] duration-300 ease-in-out hover:scale-105">
         <div className="p-5">
            <h1 className="text-xl text-purple-400 font-semibold text-center pb-3">{name}</h1>
            <ul>
               <li>
                  <a href={homepage ? homepage : deploy } target="_blank" rel="noopener noreferrer" className="text-pink-50 p-1 bg-purple-400">Demo</a>
               </li>
            </ul>
         </div>
      </li>
   )
}

export default Projetos

