import palavras from "./palavras";


export default function Jogo({ botaoP, setBotaoP, venceOuPerde, setBotao, imagem, setPalavra , arrayPalavras}) {
    
    

    return (
        <div className="jogo">
            <img src={imagem} alt="imagem forca" />
            <div className="botao-e-palavra">
                <button disabled={botaoP} onClick={() => {
                    setBotao(false);
                    setPalavra(palavras[0].split(''));
                    setBotaoP(true);
                }}>Escolher palavra</button>
                <span className={venceOuPerde}>{arrayPalavras}</span>
            </div>

        </div>

    );
}
