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
  palavras.sort(comparador);


  const [palavra, setPalavra] = useState('');
  const arrayPalavras = [];
  const [letras, setLetras] = useState('');
  const [botao, setBotao] = useState(true);
  const [botaoP, setBotaoP] = useState(false);
  const [contaErro, setContaErro] = useState(0);
  let venceOuPerde = '';
  let imagemForca = estado0;


  if (palavra !== '') {

    palavra.map((letra) => {
      if (letras.includes(letra)) {
        arrayPalavras.push(letra)
      } else {
        arrayPalavras.push('_ ')
      }
    })

  }


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


  if (palavra.toString() === arrayPalavras.toString() && imagemForca !== estado6) {
    venceOuPerde = 'verde'
    if (botao === false) {
      setBotao(true);
    }
  }

  if (imagemForca === estado6) {
    venceOuPerde = 'vermelho';
    if (botao === false) {
      setBotao(true);
    }
  }

  return (
    <div>
      <Jogo botaoP={botaoP} setBotaoP={setBotaoP} venceOuPerde={venceOuPerde} setBotao={setBotao} imagem={imagemForca} palavra={palavra} setPalavra={setPalavra} arrayPalavras={imagemForca !== estado6 ? arrayPalavras : palavra} />
      <Letras palavra={palavra} contaErro={contaErro} setContaErro={setContaErro} botao={botao} setBotao={setBotao} letras={letras} setLetras={setLetras} />
    </div>
  );
}


function comparador() {
  return Math.random() - 0.5;
}

