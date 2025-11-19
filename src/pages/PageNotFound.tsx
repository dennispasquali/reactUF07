import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const nav=useNavigate();
    return (
        <>
            <h1>104 not found</h1>
            <button onClick={()=> nav('/home')}>
                Torna alla home
            </button>
        
        </>
    )
}