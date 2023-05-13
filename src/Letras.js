
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({botao, letras, setLetras}){
    const novaArrayLetras = [...letras];

    return (
        <div className="botoes-letras ">
            {alfabeto.map((botoes, index) => (<button onClick={() => {
                novaArrayLetras.push(botoes);
                setLetras(novaArrayLetras);
            }} key={index} disabled={botao}>{botoes}</button>))}
        </div>
    );
}