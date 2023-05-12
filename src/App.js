import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";




export default function App() {
  const [botao, setBotao] = useState("botao-desabled");
  
  return (
    <div>
      <Jogo />
      <Letras botao={botao}/>
    </div>
  );
}


