import { useState } from "react";

function Counter(){
    const [counter, setCounter] =useState<number>(0);

    return(
        <div>
            <h1>Contatore {counter}</h1>
            <button onClick={() => setCounter(counter+1)} type="button">+</button>
            <button onClick={() => setCounter(counter-1) } type="button">-</button>
            <button onClick={()=> setCounter(0)}>reset</button>
        </div>
    )
}

export default Counter;