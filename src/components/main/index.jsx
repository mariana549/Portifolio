import Container from "../container";
import image1 from "../../assets/image1.jpg";
import "../main/main.css";
import SobreMim from "./sobreMim";
import Projetos from "./projetos";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context/context";
import { motion } from "framer-motion";
import { projetos } from './projetos/projetos.json'

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
            <img src={image1} alt="foto mariana" className="w-[38%] rounded-full border-4 border-pink-400" />
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
              className="flex items-center gap-3 p-2 cursor-grab"
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
        </Container>
      </section>
    </main>
  );
}

export default Main;
