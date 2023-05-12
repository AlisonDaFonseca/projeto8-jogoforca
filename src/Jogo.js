import estadoInicial from "./assets/forca0.png"

export default function Jogo(){
    return (
        <div className="jogo">
            <img src={estadoInicial} alt="imagem forca"/>
            <button>Escolher palavra</button> 
        </div>
        
    );
}