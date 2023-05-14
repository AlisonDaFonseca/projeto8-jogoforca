
export default function Chute({ botao, setContaErro, setLetras, palavra, textInput, setTextInput }) {
    
    let novaPalavra = palavra;
    novaPalavra = novaPalavra.toString();
    let semVirgula = novaPalavra.replaceAll(',', '');
    semVirgula = semVirgula.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let novaArraySemAcentos = semVirgula.split('')

    return (
        <div className="chute">
            <span>Já sei a palavra!</span>
            <input data-test="guess-input" type="text" onChange={(event) => setTextInput(event.target.value)} value={textInput} disabled={botao}/>
            <button data-test="guess-button" onClick={() => {
                let textoInput = textInput.split('');
                textoInput = textoInput.toString();
                let palavraExt = novaArraySemAcentos.toString();
               
                if(textoInput === palavraExt){
                    setLetras(textInput);
                }else{
                    setContaErro(6);
                }
            setTextInput('');
            }} disabled={botao}>Chutar</button>
        </div>
    );
}