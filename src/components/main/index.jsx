import "../main/main.css";

import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context/context";
import { motion } from "framer-motion";

import Container from "../container";
import SobreMim from "./sobreMim";
import Projetos from "./projetos";
import { projetos } from './projetos/projetos.json'

import mari1 from "../../assets/mari1.jpg";
import whats from "../../assets/whatsapp.png"
import In from "../../assets/linkedin.png"
import mari2 from "../../assets/mari2.jpg"

function Main() {
  const { repositorios, carregando } = useContext(Context)
  const carossel = useRef()
  const [Width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)
  })


  return (
    <main className="">
      <section className="bg-pink-100  flex flex-col justify-center ">
        <Container>
          <div className="flex gap-4 justify-between items-center">
            <div>
              <p className="text-3xl">Seja Bem vindo(a), eu sou a</p>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=60&pause=1000&color=EC4899&background=80808000&vCenter=true&random=false&width=800&height=70&lines=Mariana+Ant%C3%B4nia"
                  alt="Typing SVG"
                  className="py-4"
                />
              </a>
              <p className="text-4xl font-semibold div1 shinning-3">Desenvolvedora Frontend</p>
            </div>
            <img src={mari1} alt="foto mariana" className="w-[38%] rounded-full border-4 border-pink-400" />
          </div>
        </Container>
      </section>

      <SobreMim />

      <section className="min-h-[500px]">
        <Container>
          <div
            className="flex flex-col items-center p-12 gap-4 w-full overflow-hidden"
            ref={carossel}
          >
            <h1 className="text-5xl text-pink-50 shinning-2 div1 mb-4">Projetos</h1>
            <motion.ul
              className="flex items-center p-2 cursor-grab"
              whileTap={{ cursor: "grabbing" }}
              drag="x"
              dragConstraints={{ left: -Width, right: Width }}
            >
              {carregando ?
                <div className="text-pink-500 text-2xl font-bold border-2 p-2">Carregando....</div>
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
          <aside className="py-9">
            <h1 className="text-pink-50 text-5xl font-bold pb-9 text-center">Contato</h1>
            <div className="flex items-center justify-between">
              <aside className="flex flex-col items-start">
                <p className="text-pink-500 text-4xl font-medium">Entre em contato comigo por: </p>
                <ul className="py-4 flex gap-5">
                  <li className="flex items-center gap-2 hover:border p-2 rounded">
                    <img src={In} alt="" className="w-5 h-5" />
                    <a href="http://www.linkedin.com/in/mariana-a-6694b5245/" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-lg font-bold">Linkedin</a>
                  </li>
                  <li className="flex items-center gap-2 hover:border p-2 rounded">
                    <img src={whats} alt="" className="w-5 h-5" />
                    <a href="https://contate.me/marianaantonia" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-lg font-bold">WhatsApp</a>
                  </li>
                </ul>
              </aside>
              <img src={mari2} alt="mariana imagem2" className="w-80 rounded-3xl border-4 border-pink-500" />
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}

export default Main;
