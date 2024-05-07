import Container from "../container"
import image1 from "../../assets/image1.jpg"
import '../main/main.css'

function Main() {
   return (
      <main>
         <section className="bg-white">
            <Container>
               <div className="flex gap-4 justify-between items-center">
                  <a href="https://git.io/typing-svg">
                     <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=48&pause=1000&color=EC4899&random=false&width=806&height=100&lines=Ol%C3%A1+sou+a++Mariana+Antonia+;Desenvolvedora+Web+Frontend" alt="Typing SVG" />
                  </a>
                  <img src={image1} alt="Mariana Imagem" className="w-96 rounded-full border-4 border-pink-400" />
               </div>
            </Container>
         </section>
         <section className="bg-pink-400 h-96">

         </section>
      </main>
   )
}

export default Main
