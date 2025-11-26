import useFetch from "../hook/useFetch"
import { type ListaUtenti, type Utente, type TPosts} from "../../public/interfaces/interfaces"
export default function ListaUtenti(){

    const {data,loading,error}=useFetch<ListaUtenti>("https://jsonplaceholder.typicode.com/users");
    const {data: dataPost,loading: loadingPost,error: e}=useFetch<TPosts>("https://jsonplaceholder.typicode.com/posts");
    if (loading || loadingPost) return <h1>Pagina in caricamento...</h1>;
    if (error || e) return <h1>Errore: {error}</h1>;
    
    return(
        <>
        <h1>Lista Utenti</h1>
        <ul>

            {data && data.map((u:  Utente) =>{
              return (
                <li key={u.id}>
                    {u.id}: {u.name}
                </li>
              )
            })}
        </ul>
        </>
    )


}