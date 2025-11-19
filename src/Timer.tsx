import { useEffect, useState } from "react";

function Timer() {
    const [sec, setSec]=useState <number>(0);
    useEffect(()=>{
        const timerId=setInterval(() => {
            setSec(s=>s+1);
        }, 1000);

        return () => clearInterval(timerId);
    },[]);
    return(
        <p>Secondi: {sec}</p>
    )
}

export default Timer;