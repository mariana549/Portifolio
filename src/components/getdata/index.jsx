import axios from "axios"
import { useEffect, useState } from "react"
import Main from "../main"
import AppProvider from "../../Contexts/dadosContext/provider";

function GetData() {
   const [getRepos, setRepos] = useState([])
   const [loading, setLoading] = useState(true);

   const getAxios = async () => {
      try {
         const baseUrl = `https://api.github.com/users/mariana549`
         const response = await axios.get(`${baseUrl}`)
         const reposUrl = response.data.repos_url
         const reposResponse = await axios.get(`${reposUrl}`)
         const data = reposResponse.data
         
         setRepos(data) 
         setLoading(false)
      } catch (error) {
         `Erro fetching GitHub: ${error.message}`
      }
   }

   useEffect(() => { getAxios() }, [])

   return (
      <AppProvider value={{ repositorios: getRepos , carregando: loading}}>
         <Main />
      </AppProvider>
   )
}

export default GetData
