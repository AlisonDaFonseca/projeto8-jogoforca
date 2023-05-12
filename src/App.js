import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import estado0 from "./assets/forca0.png";
import estado1 from "./assets/forca1.png";
import estado2 from "./assets/forca2.png";
import estado3 from "./assets/forca3.png";
import estado4 from "./assets/forca4.png";
import estado5 from "./assets/forca5.png";
import estado6 from "./assets/forca6.png";
import { useState } from "react";




export default function App() {
  const [botao, setBotao] = useState(true);
  const [contaErro, setContaErro] = useState(0);
  let imagemForca = estado0;

  if (contaErro === 0) {
    imagemForca = estado0;
  } else if (contaErro === 1) {
    imagemForca = estado1;
  } else if (contaErro === 2) {
    imagemForca = estado2;
  } else if (contaErro === 3) {
    imagemForca = estado3;
  } else if (contaErro === 4) {
    imagemForca = estado4;
  } else if (contaErro === 5) {
    imagemForca = estado5;
  } else if (contaErro === 6) {
    imagemForca = estado6;
  }

  return (
    <div>
      <Jogo setBotao={setBotao} imagem={imagemForca} />
      <Letras botao={botao} />
    </div>
  );
}


