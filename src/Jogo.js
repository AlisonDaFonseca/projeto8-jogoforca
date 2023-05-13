import { useState } from "react";
import palavras from "./palavras";


export default function Jogo({ setBotao, imagem, setPalavra , novaArrayPalavras}) {
    const[botaoP, setBotaoP] = useState (false);
   

    return (
        <div className="jogo">
            <img src={imagem} alt="imagem forca" />
            <div className="botao-e-palavra">
                <button disabled={botaoP} onClick={() => {
                    setBotao(false);
                    setPalavra(palavras[0].split(''));
                    setBotaoP(true);
                }}>Escolher palavra</button>
                <span>{novaArrayPalavras}</span>
            </div>

        </div>

    );
}
