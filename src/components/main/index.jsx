import "../main/main.css";

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../Contexts/themeContext/theme-context";
import Context from "../../Contexts/dadosContext/context";
import { motion } from "framer-motion";

import Container from "../container";
import SobreMim from "./sobreMim";
import Projetos from "./projetos";
import { projetos } from './projetos/projetos.json'

import mari1 from "../../assets/images/mari1.jpg";

import { handleClick } from "../pegarId";

function Main() {
  const { theme } = useContext(ThemeContext)

  const { repositorios, carregando } = useContext(Context)
  const carossel = useRef()
  const [Width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)
  })

  return (
    <main>
      <section
        className=" flex flex-col justify-center"
        style={{ background: theme.bgInicio }}>
        <Container>
          <div className="flex gap-4 justify-between items-center">
            <div>
              <p
                className="text-3xl font-poppins"
                style={{ color: theme.color }}>
                Seja Bem vindo(a), eu sou a
              </p>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=60&pause=1000&color=EC4899&background=80808000&vCenter=true&random=false&width=800&height=70&lines=Mariana+Ant%C3%B4nia"
                  alt="Typing SVG"
                  className="py-4"
                />
              </a>
              <p
                className="text-4xl font-semibold div1 shinning-3 font-poppins"
                style={{ color: theme.color }}>
                Desenvolvedora Frontend
              </p>
            </div>
            <img src={mari1} alt="foto mariana" className="w-[38%] rounded-full border-4 border-pink-400 float-animation" />
          </div>
        </Container>
      </section>

      <SobreMim />

      <section
        className="pb-9"
        id="projeto"
        onClick={handleClick}
        style={{ background: theme.bgProjetos }}
      >
        <div
          className="flex flex-col items-center p-12 gap-4 w-full overflow-hidden"
          ref={carossel}
        >
          <h1
            className="max-sm:text-3xl text-5xl 
            shinning-2 div1 mb-5 font-poppins"
            id="projetos"
            style={{ color: theme.color }}>
             Projetos
          </h1>
          <motion.ul
            className="flex items-center p-2 cursor-grab"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ left: -Width, right: Width }}
          >
            {carregando ?
              <div className="text-pink-500 max-sm:text-lg text-2xl font-bold border-2 p-2 font-poppins">Carregando....</div>
              : repositorios
                .filter(e => (projetos.map(element => element.nome).includes(e.name)))
                .map((repo, i) => (
                  <Projetos
                    key={i}
                    name={repo.name}
                    homepage={repo.homepage}
                    deploy={repo.html_url}
                    linguagem={repo.language}
                  />
                ))
            }
          </motion.ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
