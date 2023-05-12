

export default function Jogo({setBotao, imagem}){
   
    return (
        <div className="jogo">
            <img src={imagem} alt="imagem forca"/>
            <div>
                <button onClick={() => setBotao(false)}>Escolher palavra</button> 
            </div>
            
        </div>
        
    );
}