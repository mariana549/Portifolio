function Projetos({name, url, vizibility, wachers, update, svn, language, leguage_url, homepage, description, created, stargazers }) {
   // const {name, stargazers_count, url, visibility, watchers_count, updated_at, svn_url, language, languages_url, homepage, description, created_at, }
   console.log(name, "n")
   return (
      <li className="max-w-lg rounded border-2 border-purple-400 bg-black w-80 min-h-[200px]">
         <div className="p-5">
            <h1 className="text-xl text-purple-400 font-semibold text-center">{name}</h1>
         </div>
      </li>
   )
}

export default Projetos

