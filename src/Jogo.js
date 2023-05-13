import { useState } from "react";
import palavras from "./palavras";


export default function Jogo({ setBotao, imagem, palavra, setPalavra }) {
    const[botaoP, setBotaoP] = useState (false)

    return (
        <div className="jogo">
            <img src={imagem} alt="imagem forca" />
            <div className="botao-e-palavra">
                <button disabled={botaoP} onClick={() => {
                    setBotao(false);
                    setPalavra(palavras[0]);
                    setBotaoP(true);
                }}>Escolher palavra</button>
                <span>{palavra}</span>
            </div>

        </div>

    );
}
