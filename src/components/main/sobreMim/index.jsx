import Container from '../../container'

import react from '../../../assets/images/biblioteca.png'
import css from '../../../assets/images/css-3.png'
import html from '../../../assets/images/html-5.png'
import js from '../../../assets/images/js.png'
import git from '../../../assets/images/git.png'
import figma from '../../../assets/images/figma.png'

import { handleClick } from '../../pegarId'

import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/themeContext/theme-context'

function SobreMim() {

   const { theme } = useContext(ThemeContext)

   return (
      <section
         className="pb-9"
         id='sobremim'
         onClick={handleClick}
         style={{ background: theme.bgSobreMim }}
      >
         <Container>
            <div className="flex flex-col items-center 
            max-md:py-7 py-12 max-md:gap-2 gap-4">
               <h1
                  className="max-sm:text-3xl max-lg:text-4xl text-5xl shinning-2 div1 mb-4 font-poppins"
                  style={{ color: theme.color }}>
                  Sobre mim
               </h1>
               <p
                  className="max-sm:text-sm max-lg:text-base text-lg font-medium font-poppins"
                  style={{ color: theme.color2 }}>
                     Em outubro de 2023, iniciei o curso da DevQuest e desde então, tenho me dedicado diariamente aos estudos. Ao entrar para a DevQuest, fui inspirada a também investir no meu perfil do LinkedIn, que já possuía desde 2022, mas nunca havia postado nada. No começo, senti um pouco de apreensão, sem saber exatamente o que compartilhar. Comecei seguindo diversos programadores e, com o tempo, as ideias foram surgindo. Em novembro, comecei a compartilhar conteúdo lá e, desde então, conquistei 7 mil seguidores.
               </p>
               <p
                  className="max-sm:text-sm max-lg:text-base text-lg font-medium font-poppins"
                  style={{ color: theme.color2 }}>
                     Minha jornada até aqui tem sido fascinante, e a cada dia, meu interesse pela área de programação cresce. Visualizo-me trabalhando nesse campo no futuro. Tenho facilidade com programação e estou determinada a me aprofundar ainda mais.               
               </p>
            </div>
            <div className="flex flex-col items-center py-12
            max-md:gap-2 gap-4">
               <h2
                  className="max-sm:text-2xl max-lg:text-3xl text-4xl shinning-2 div1 mb-4 font-poppins"
                  style={{ color: theme.color }}>
                     Tecnologias
               </h2>
               <ul className="flex flex-wrap gap-2 justify-center">
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={js}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20 max-md:rounded-lg rounded-2xl" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={html}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={css}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={react}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={figma}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={git}
                        alt="logo"
                        className="max-sm:w-14 max-lg:w-16 w-20" />
                  </li>
               </ul>
            </div>
         </Container>
      </section>
   )
}

export default SobreMim
