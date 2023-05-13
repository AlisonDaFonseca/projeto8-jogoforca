import palavras from "./palavras";


export default function Jogo({ setContaErro, setLetras, venceOuPerde, setBotao, imagem, setImagemForca, setPalavra , arrayPalavras}) {
    
    

    return (
        <div className="jogo">
            <img data-test="game-image" src={imagem} alt="imagem forca" />
            <div className="botao-e-palavra">
                <button data-test="choose-word" onClick={() => {
                    setContaErro(0);
                    setLetras('')
                    setBotao(false);
                    setPalavra(palavras[0].split(''));
                }}>Escolher palavra</button>
                <span data-test="word" className={venceOuPerde}>{arrayPalavras}</span>
            </div>

        </div>

    );
}
