
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({botao, letras, setLetras, palavra, contaErro, setContaErro}){
    const novaArrayLetras = [...letras];
    const botaoTrue = true;
    
    

    return (
        <div className="botoes-letras ">
            {alfabeto.map((letra, index) => {
                
                return (
                    <button data-test="letter" key={index} onClick={() => {
                        novaArrayLetras.push(letra);
                        setLetras(novaArrayLetras);
                        if(!palavra.includes(letra)){
                            setContaErro(contaErro + 1);
                        }
                        
                    }} disabled={letras.includes(letra) ? botaoTrue : botao}>{letra}</button>
                );
                
            })}
        </div>
    );
}

