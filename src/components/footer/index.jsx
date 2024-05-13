import Container from "../container"
import whats from "../../assets/whatsapp.png"
import In from "../../assets/linkedin.png"
import image2 from "../../assets/image2.jpg"

function Footer() {
   return (
      <footer className="min-h-80 ">
         <Container>
            <h1 className="text-pink-50 text-5xl font-bold pb-7 text-center">Contato</h1>
            <div className="flex items-center justify-between">
               <aside className="flex flex-col items-start">
                  <p className="text-pink-500 text-3xl font-medium">Entre em contato comigo por: </p>
                  <ul className="py-4 flex gap-5">
                     <li className="flex items-center gap-2 hover:border p-2 rounded">
                        <img src={In} alt="" className="w-4 h-4" />
                        <a href="http://www.linkedin.com/in/mariana-a-6694b5245/" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-base font-bold">Linkedin</a>
                     </li>
                     <li className="flex items-center gap-2 hover:border p-2 rounded">
                        <img src={whats} alt="" className="w-4 h-4" />
                        <a href="https://contate.me/marianaantonia" target="_blank" rel="noopener noreferrer" className="text-pink-100 text-base font-bold">WhatsApp</a>
                     </li>
                  </ul>
               </aside>
               <img src={image2} alt="mariana imagem2" className="w-60 rounded-full border-4 border-pink-500" />
            </div>
         </Container>
      </footer>
   )
}

export default Footer