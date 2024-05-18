import Container from '../../container'

import react from '../../../assets/images/biblioteca.png'
import css from '../../../assets/images/css-3.png'
import html from '../../../assets/images/html-5.png'
import js from '../../../assets/images/js.png'
import git from '../../../assets/images/git.png'
import figma from '../../../assets/images/figma.png'

import { handleClick } from '../../pegarId'

import { useContext } from 'react'
import { ThemeContext } from '../../../Context/theme-context'

function SobreMim() {
   const { theme } = useContext(ThemeContext)

   return (
      <section
         className="min-h-[500px] pb-9"
         id='sobremim'
         onClick={handleClick}
         style={{ background: theme.bgSobreMim }}>
         <Container>
            <div className="flex flex-col items-center py-12 gap-4">
               <h1
                  className="text-5xl shinning-2 div1 mb-4 font-poppins"
                  style={{ color: theme.color }}>
                     Sobre mim
               </h1>
               <p
                  className="text-lg font-medium font-poppins"
                  style={{ color: theme.color2 }}>Eu estudo programação desde o ano passado, estudei por um tempo no inicio do ano mas tive que parar. quando foi em outubro eu iniciei no curso da devquest e desde lá estudos constantemente todos os dias.</p>
               <p
                  className="text-lg font-medium font-poppins"
                  style={{ color: theme.color2 }}>Depois que entrei para devquest fui influenciada a mecher também com meu linkedin, que eu já possuia desde 2022, mas, eu nunca tinha postado nada. Fiquei meio aprenciva pois não sabia o que poderia postar, então comecei seguindo um monte de programadores e nisso fui tendo ideias. começei a posta em novembro lá algumas coisas e de lá para ca eu conquistei meu 7k de seguidores.</p>
               <p
                  className="text-lg font-medium font-poppins"
                  style={{ color: theme.color2 }}>Meu processo até aqui vem sido interresante pois cada vez mais me interesso pela area e me vejo trabalhando nela futuramente. Eu realmente tenho uma facilidade com programação e quero cada vez mais me aprofundar na area.</p>
            </div>
            <div className="flex flex-col items-center py-12 gap-4">
               <h2
                  className="text-4xl shinning-2 div1 mb-4 font-poppins"
                  style={{ color: theme.color }}>
                     Tecnologias
               </h2>
               <ul className="flex flex-wrap gap-2 justify-center">
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={js}
                        alt="logo"
                        className="w-20 rounded-2xl" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={html}
                        alt="logo"
                        className="w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={css}
                        alt="logo"
                        className="w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={react}
                        alt="logo"
                        className="w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={figma}
                        alt="logo"
                        className="w-20" />
                  </li>
                  <li className="p-3 bg-black border-2 border-pink-600 rounded-2xl flex items-center">
                     <img
                        src={git}
                        alt="logo"
                        className="w-20" />
                  </li>
               </ul>
            </div>
         </Container>
      </section>
   )
}

export default SobreMim
