interface ISaluta {
    nome: string,
    cognome?: string
}

function Saluta({nome, cognome}: ISaluta) {

    return (

        <div>
            <p>ciao {nome}  {cognome!==undefined ? (<p>{cognome}</p>) : (<p>Cognome non Presente</p>)}</p>
           
        </div>
        
        
    );
}


export default Saluta;