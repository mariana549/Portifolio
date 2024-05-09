import axios from "axios"
import { useEffect, useState } from "react"
import Main from "../main"

function GetData() {
   const [getRepos, setRepos] = useState([])

   const getAxios = async () => {
      try {
         const baseUrl = `https://api.github.com/users/mariana549`
         const response = await axios.get(`${baseUrl}`)
         const reposUrl = response.data.repos_url
         const reposResponse = await axios.get(`${reposUrl}`)
         const data = reposResponse.data

         console.log(data)

         setRepos(data)
      } catch (error) {
         `Erro fetching GitHub: ${error.message}`
      }
   }

   useEffect(() => { getAxios() }, [])

   return (
      <>
         <Main repos={getRepos}/>
      </>
   )
}

export default GetData
