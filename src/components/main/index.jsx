import Container from "../container";
import image1 from "../../assets/image1.jpg";
import "../main/main.css";
import Projetos from "../projetos";

function Main({ repos }) {
  return (
    <main>
      <section className="bg-white h-[748px] flex flex-col justify-center">
        <Container>
          <div className="flex gap-4 justify-between items-center">
            <div>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=48&pause=1000&color=000000&background=80808000&vCenter=true&random=false&width=800&height=70&lines=Ol%C3%A1+sou+Mariana+Ant%C3%B4nia"
                  alt="Typing SVG"
                />
              </a>
              <p className="text-3xl font-semibold div1 shinning-3">Desenvolvedora Frontend</p>
            </div>
            <img src={image1} alt="foto mariana"  className="w-[45%] rounded-full border-4 border-pink-400" />
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
                  language_url={repo.language_url}
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
