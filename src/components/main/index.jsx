import Container from "../container";
import image1 from "../../assets/image1.jpg";
import "../main/main.css";
import SobreMim from "./sobreMim";
import Projetos from "./projetos";
import { useContext } from "react";
import Context from "../../Context/context";

function Main() {
  const { repositorios } = useContext(Context)

  const FiltroRepositorios = ["Quest-React-Avancado", "projeto-github-api", "intro-component-with-signup-form-master", "rick-and-morty", "lista-imagens-pinturas", "gerador-de-conselhos", "codolandia-loki", "codelandia-portifolio", "landing-page-grid", "cordel-moderno", "projeto-android", "projeto-login"];

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
          <div className="flex flex-col items-center p-12 gap-4">
            <h1 className="text-5xl text-pink-50 shinning-2 div1 mb-4">Projetos</h1>
            <ul className="flex flex-wrap justify-center gap-1">
              {repositorios
                .filter(e => (FiltroRepositorios.includes(e.name)))
                .map((repo, i) => (
                  <Projetos
                    key={i}
                    name={repo.name}
                    homepage={repo.homepage}
                    created={repo.created_at}
                  />
                ))
              }
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Main;
