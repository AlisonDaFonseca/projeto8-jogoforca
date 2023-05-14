
export default function Chute({ botao, setContaErro, setLetras, palavra, textInput, setTextInput }) {
    

    return (
        <div className="chute">
            <span>Já sei a palavra!</span>
            <input data-test="guess-input" type="text" onChange={(event) => setTextInput(event.target.value)} value={textInput} disabled={botao}/>
            <button data-test="guess-button" onClick={() => {
                let textoInput = textInput.split('');
                textoInput = textoInput.toString();
                let palavraExt = palavra.toString();
               
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