import palavras from "./palavras";
import imagemInicial from "./assets/forca0.png"


export default function Jogo({ setContaErro, contaErro, letras, setLetras, venceOuPerde, setBotao, imagem, setImagemForca, setPalavra , arrayPalavras}) {
    
    

    return (
        <div className="jogo">
            <img src={imagem} alt="imagem forca" />
            <div className="botao-e-palavra">
                <button onClick={() => {
                    setContaErro(0);
                    setLetras('')
                    setBotao(false);
                    setPalavra(palavras[0].split(''));
                }}>Escolher palavra</button>
                <span className={venceOuPerde}>{arrayPalavras}</span>
            </div>

        </div>

    );
}
