import Container from "../container";
import image1 from "../../assets/image1.jpg";
import "../main/main.css";
import Projetos from "../projetos";
import react from '../../assets/biblioteca.png'
import css from '../../assets/css-3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/js.png'
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'

function Main({ repos }) {
  return (
    <main className="">
      <section className="bg-white  flex flex-col justify-center ">
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
            <img src={image1} alt="foto mariana"  className="w-[38%] rounded-full border-4 border-pink-400" />
          </div>
        </Container>
      </section>
      <section className="bg-pink-300 min-h-[500px]">
         <Container>
         <div className="flex flex-col items-center p-12 gap-4">
            <h1 className="text-5xl shinning-2 div1 mb-4">Sobre mim</h1>
            <p className="text-lg text-pink-950 font-medium">Eu estudo programação desde o ano passado, estudei por um tempo no inicio do ano mas tive que parar. quando foi em outubro eu iniciei no curso da devquest e desde lá estudos constantemente todos os dias.</p>
            <p className="text-lg text-pink-950 font-medium">Depois que entrei para devquest fui influenciada a mecher também com meu linkedin, que eu já possuia desde 2022, mas, eu nunca tinha postado nada. Fiquei meio aprenciva pois não sabia o que poderia postar, então comecei seguindo um monte de programadores e nisso fui tendo ideias. começei a posta em novembro lá algumas coisas e de lá para ca eu conquistei meu 7k de seguidores.</p>
            <p className="text-lg text-pink-950 font-medium">Meu processo até aqui vem sido interresante pois cada vez mais me interesso pela area e me vejo trabalhando nela futuramente. Eu realmente tenho uma facilidade com programação e quero cada vez mais me aprofundar na area.</p>
         </div>
         <div className="flex flex-col items-center p-12 gap-4">
            <h2 className="text-4xl shinning-2 div1 mb-4">Tecnologias</h2>
            <ul className="flex flex-wrap gap-2">
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={js} alt="logo" className="w-40 "/> JavaScript</li>
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={html} alt="logo" className="w-40"/> HtML 5</li>
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={css} alt="logo" className="w-40"/> CSS 3</li>
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={react} alt="logo" className="w-40"/> React</li>
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={figma} alt="logo" className="w-40"/> Figma</li>
              <li className="p-3 bg-black text-pink-100 font-medium text-xl rounded text-center"><img src={git} alt="logo" className="w-40"/> Git</li>
            </ul>
         </div>
         </Container>
      </section>
      <section className="bg-purple-300 min-h-[500px]">
        <Container>
          <div className="flex flex-col items-center p-12 gap-4">
            <h1 className="text-5xl shinning-2 div1 mb-4">Projetos</h1>
            <ul className="flex flex-wrap gap-1">
              {repos.map((repo, i) => (
                <Projetos
                  key={i}
                  name={repo.name}
                  stargazers={repo.stargazers_count}
                  url={repo.url}
                  vizibility={repo.visibility}
                  watchers={repo.watchers_count}
                  updated={repo.updated_at}
                  svn={repo.svn_url}
                  language={repo.language}
                  language_url={repo.languages_url}
                  homepage={repo.homepage}
                  description={repo.description}
                  created={repo.created_at}
                />
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Main;
