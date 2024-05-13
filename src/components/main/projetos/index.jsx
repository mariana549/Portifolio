function Projetos({ name, homepage, created }) {

   return (
      <li className="max-w-lg rounded border-2 border-purple-400 bg-black w-80 min-h-[200px]">
         <div className="p-5">
            <h1 className="text-xl text-purple-400 font-semibold text-center">{name}</h1>
            
         </div>
      </li>
   )
}

export default Projetos

