import axios from "axios"
import { useEffect, useState } from "react"

function Projetos({name, url, vizibility, wachers, update, svn, language, languages_url, homepage, description, created, stargazers }) {
   // const {name, stargazers_count, url, visibility, watchers_count, updated_at, svn_url, language, languages_url, homepage, description, created_at, }
   const [liguagens, setLiguagens] = useState([])

   const getAxios = async () => {
      try {
         const response = await axios.get(`${languages_url}`)
         const data = response

         console.log(data)

         setLiguagens(data)
      } catch (error) {
         `Erro fetching GitHub: ${error.message}`
      }
   }

   useEffect(() => { getAxios() }, [])

   return (
      <li className="max-w-lg rounded border-2 border-purple-400 bg-black w-80 min-h-[200px]">
         <div className="p-5">
            <h1 className="text-xl text-purple-400 font-semibold text-center">{name}</h1>
            <p>{}</p>
         </div>
      </li>
   )
}

export default Projetos

